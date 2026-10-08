import type { Metadata } from "next";
import { siteConfig } from "./site";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export function buildMetadata({ title, description, path, type = "website" }: SeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
