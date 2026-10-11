import { describe, it, expect } from "vitest";
import { buildMetadata } from "./seo";
import { faqPage, breadcrumbList } from "./schema";
import { siteConfig } from "./site";
import { getTransportRouteBySlug } from "./data-access";

describe("buildMetadata", () => {
  it("adds a self-referencing canonical URL", () => {
    const metadata = buildMetadata({
      title: "Beijing to Datong",
      description: "How to travel",
      path: "/transport/beijing-to-datong",
    });
    expect(metadata.alternates?.canonical).toBe(
      `${siteConfig.url}/transport/beijing-to-datong`,
    );
  });

  it("sets consistent OpenGraph and Twitter titles", () => {
    const metadata = buildMetadata({
      title: "Attractions",
      description: "Guides",
      path: "/attractions",
    });
    expect(metadata.openGraph?.title).toBe("Attractions");
    expect(metadata.openGraph?.url).toBe(`${siteConfig.url}/attractions`);
    expect(metadata.twitter?.title).toBe("Attractions");
  });
});

describe("faqPage", () => {
  it("generates FAQPage schema with questions and answers", () => {
    const jsonLd = faqPage([{ question: "How long?", answer: "About 2 hours." }]);
    expect(jsonLd["@type"]).toBe("FAQPage");
    expect(jsonLd.mainEntity).toHaveLength(1);
    expect(jsonLd.mainEntity[0].name).toBe("How long?");
    expect(jsonLd.mainEntity[0].acceptedAnswer.text).toBe("About 2 hours.");
  });
});

describe("breadcrumbList", () => {
  it("builds positional items under the site URL", () => {
    const jsonLd = breadcrumbList([
      { name: "Transport", path: "/transport" },
      { name: "Beijing to Datong", path: "/transport/beijing-to-datong" },
    ]);
    expect(jsonLd["@type"]).toBe("BreadcrumbList");
    expect(jsonLd.itemListElement[0].position).toBe(1);
    expect(jsonLd.itemListElement[1].item).toBe(
      `${siteConfig.url}/transport/beijing-to-datong`,
    );
  });
});

describe("transport route FAQ", () => {
  it("answers Beijing-to-Datong questions without inventing data", () => {
    const route = getTransportRouteBySlug("beijing-to-datong");
    expect(route?.faq?.length).toBeGreaterThan(0);
    const questions = route!.faq!.map((f) => f.question).join(" ");
    expect(questions).toContain("station");
    expect(questions).toContain("Yungang");
  });
});
