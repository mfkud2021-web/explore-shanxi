# Inquiry service setup (V2 phase 2)

1. Verify a sending domain with Resend (or replace the email adapter).
2. Set `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, and `INQUIRY_TO_EMAIL` as **server-side** deployment secrets. Do not commit real values.
3. Set `NEXT_PUBLIC_SITE_URL` to the actual public HTTPS domain.
4. Update privacy and contact information for your legal operator, actual retention policy, and email processing arrangement before accepting customer data.
5. Test a successful submission and an invalid submission on staging. Verify the message arrives, check spam folders, and confirm no duplicate delivery.
6. Before public promotion, implement shared persistent IP-based rate limiting and an anti-bot challenge (e.g. Turnstile). The honeypot alone is insufficient; serverless instances cannot share in-memory rate limits.
7. This release does not store inquiries in a database or provide a lead dashboard. The destination inbox is the temporary record of inquiries.
8. Confirm lawful local transport-provider qualifications and the operator's role before quoting or accepting payments.
