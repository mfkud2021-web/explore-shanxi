import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  getAttractionSlugs,
  getDestinationSlugs,
  getTransportRouteSlugs,
  getTravelEssentialSlugs,
} from "@/lib/data-access";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPaths = [
    "",
    "/destinations",
    "/attractions",
    "/transport",
    "/tickets",
    "/trip-planner",
    "/black-myth-wukong",
    "/travel-essentials",
    "/private-driver",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const destinations: MetadataRoute.Sitemap = getDestinationSlugs().map((slug) => ({
    url: `${base}/destinations/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const attractions: MetadataRoute.Sitemap = getAttractionSlugs().map((slug) => ({
    url: `${base}/attractions/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const transport: MetadataRoute.Sitemap = getTransportRouteSlugs().map((slug) => ({
    url: `${base}/transport/${slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const tickets: MetadataRoute.Sitemap = getAttractionSlugs().map((slug) => ({
    url: `${base}/tickets/${slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const essentials: MetadataRoute.Sitemap = getTravelEssentialSlugs().map((slug) => ({
    url: `${base}/travel-essentials/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...destinations,
    ...attractions,
    ...tickets,
    ...transport,
    ...essentials,
  ];
}
