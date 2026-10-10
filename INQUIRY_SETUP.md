# Inquiry service setup (V2 phase 2)

The inquiry route is implemented with anti-abuse controls. In **production**, the form refuses submissions (503) unless email, Turnstile and the rate-limit store are all configured — it fails closed rather than accepting traffic without protection.

## 1. Email — Resend

1. Verify a sending domain with Resend (or replace the email adapter).
2. Set `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, and `INQUIRY_TO_EMAIL` as **server-side** deployment secrets. Do not commit real values.

## 2. CAPTCHA — Cloudflare Turnstile (free tier, no card required)

The route already verifies a `cf-turnstile-response` token against `https://challenges.cloudflare.com/turnstile/v0/siteverify`. You only need to create the keys:

1. Create a free Cloudflare account at dash.cloudflare.com (no card needed for the free tier).
2. Add a new **Turnstile** site (Widget → "Managed", not "Invisible"), for the domain `explore-shanxi.vercel.app`.
3. Copy the **Site Key** → set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (this one is public, embedded in the page).
4. Copy the **Secret Key** → set `TURNSTILE_SECRET_KEY` (server-side secret, never expose).

The form renders the widget automatically when `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set.

## 3. Persistent rate limiting — Upstash Redis (free tier)

The route does atomic `INCR` + `EXPIRE` per client IP via the Upstash REST pipeline and rejects past 5 requests / 10 minutes with 429. It is shared across serverless instances (unlike in-memory). To enable it:

1. Create a free Upstash account at upstash.com → create a Redis database (free tier).
2. Copy the **REST URL** → set `UPSTASH_REDIS_REST_URL`.
3. Copy the **REST token** → set `UPSTASH_REDIS_REST_TOKEN`.

Both values are server-side secrets. The IP is stored transiently (10-minute TTL) solely for rate limiting.

## 4. Site URL

Set `NEXT_PUBLIC_SITE_URL` to the actual public HTTPS domain (or rely on the Vercel production URL fallback already in `src/lib/site.ts`).

## 5. Privacy & consent

- The route requires `consent === "yes"` (400 otherwise). The checkbox links to `/privacy`.
- Before accepting real customer data, complete `/privacy` with the real operator identity, retention period, email-processing arrangement (Resend/Upstash as processors), and any cross-border transfer details.
- This release stores no inquiries in a database and has no lead dashboard; the destination inbox is the temporary record.

## 6. Do NOT

- Do NOT expose any unauthenticated test/send endpoint in production.
- Do NOT commit real keys, passwords, tokens, or customer data.
- Do NOT collect passport numbers, payment details, or other sensitive personal information through the form.

## 7. Legal

Confirm lawful local transport-provider qualifications and the operator's role before quoting or accepting payments. An inquiry is not a booking, a fixed-price offer, or a driver reservation.
