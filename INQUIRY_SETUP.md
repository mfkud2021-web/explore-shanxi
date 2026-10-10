# Inquiry service setup (V2 phase 2)

1. Verify a sending domain with Resend (or replace the email adapter).
2. Set `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, and `INQUIRY_TO_EMAIL` as **server-side** deployment secrets. Do not commit real values.
3. Set `NEXT_PUBLIC_SITE_URL` to the actual public HTTPS domain.
4. Update privacy and contact information for your legal operator, actual retention policy, and email processing arrangement before accepting customer data.
5. Test a successful submission and an invalid submission on staging. Verify the message arrives, check spam folders, and confirm no duplicate delivery.
6. Before public promotion, implement shared persistent IP-based rate limiting and an anti-bot challenge (e.g. Turnstile). The honeypot alone is insufficient; serverless instances cannot share in-memory rate limits.

## Low-cost anti-abuse plan (before public launch)

The current route already: escapes HTML in the email body (XSS-safe), caps field lengths, rejects oversized bodies (413), returns no raw input in error responses, and uses a honeypot field. These are not enough on their own.

**1. CAPTCHA — Cloudflare Turnstile (free, no card required)**
- Add `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` server secrets.
- Frontend: render the Turnstile widget on the form; send `cf-turnstile-response` with the POST.
- Backend: before sending email, verify the token via `https://challenges.cloudflare.com/turnstile/v0/siteverify` (POST `{ secret, response, remoteip }`); on failure return 400/403.
- Free tier covers up to 10 sites / 10k challenges per month — ample for this use case.

**2. Rate limiting — Vercel (Upstash) KV or Vercel WAF (low cost)**
- Option A (preferred): Vercel's built-in **Firewall (WAF)** — add a rate-limit rule on `POST /api/inquiries` (e.g. 5 req / 10 min per IP). No code, billed only if you exceed the included allowance; for this volume effectively free.
- Option B: **Upstash Redis** (free tier) — a small helper `rateLimit(ip)` doing `INCR` + `EXPIRE 600`; reject with 429 past the threshold. Shared across serverless instances (unlike in-memory).

**3. Privacy consent (already enforced server-side)**
- The route requires `consent === "yes"` and rejects otherwise (400). The checkbox is `required` client-side and links to `/privacy`.
- Before accepting real data: complete `/privacy` with the real operator identity, retention period, and the email-processing arrangement (Resend as processor). Do not store inquiries beyond the destination inbox.

**4. Do NOT** expose any unauthenticated test/send endpoint in production; keep the email send behind the single validated `POST /api/inquiries` path only.
7. This release does not store inquiries in a database or provide a lead dashboard. The destination inbox is the temporary record of inquiries.
8. Confirm lawful local transport-provider qualifications and the operator's role before quoting or accepting payments.
