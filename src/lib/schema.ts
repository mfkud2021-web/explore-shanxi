import type { Attraction, Destination, FAQItem } from "@/types";
import { siteConfig } from "./site";

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function touristDestination(d: Destination) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name_en,
    alternateName: d.name_zh,
    description: d.summary,
    image: `${siteConfig.url}${d.hero_image.url}`,
    url: `${siteConfig.url}/destinations/${d.slug}`,
  };
}

export function touristAttraction(a: Attraction) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: a.name_en,
    alternateName: a.name_zh,
    description: a.short_description,
    image: `${siteConfig.url}${a.image.url}`,
    url: `${siteConfig.url}/attractions/${a.slug}`,
    ...(a.latitude !== null && a.longitude !== null
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: a.latitude,
            longitude: a.longitude,
          },
        }
      : {}),
  };
}

export function faqPage(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
