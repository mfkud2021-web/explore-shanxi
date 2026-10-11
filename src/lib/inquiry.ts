export function isInquiryServiceConfigured(): boolean {
  const emailConfigured = Boolean(
    process.env.RESEND_API_KEY &&
      process.env.INQUIRY_TO_EMAIL &&
      process.env.INQUIRY_FROM_EMAIL,
  );
  if (!emailConfigured) return false;
  if (process.env.NODE_ENV === "production") {
    return Boolean(
      process.env.TURNSTILE_SECRET_KEY &&
        process.env.UPSTASH_REDIS_REST_URL &&
        process.env.UPSTASH_REDIS_REST_TOKEN,
    );
  }
  return true;
}
