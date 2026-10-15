import type { NextConfig } from "next";
import { ticketRedirectRules } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return ticketRedirectRules();
  },
};

export default nextConfig;
