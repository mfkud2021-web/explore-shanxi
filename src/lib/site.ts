const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteConfig = {
  name: "Explore Shanxi",
  tagline: "Independent Shanxi Travel Guide & Data",
  description:
    "Plan an independent trip to Shanxi, China with practical, verified local information on destinations, tickets, transport, passports and more.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    vercelProductionUrl ??
    "https://explore-shanxi.vercel.app",
} as const;
