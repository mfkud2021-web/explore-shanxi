import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";
import robots from "./robots";
import { siteConfig } from "@/lib/site";

describe("sitemap", () => {
  const urls = sitemap().map((entry) => entry.url);
  const paths = urls.map((url) => new URL(url).pathname);

  it("includes the key static landing pages", () => {
    const expected = [
      "/",
      "/destinations",
      "/attractions",
      "/transport",
      "/trip-planner",
      "/black-myth-wukong",
      "/travel-essentials",
      "/private-driver",
      "/contact",
    ];
    for (const path of expected) {
      expect(paths).toContain(path);
    }
  });

  it("excludes the API endpoint and error pages", () => {
    expect(paths).not.toContain("/api/inquiries");
    expect(paths).not.toContain("/_not-found");
    expect(paths).not.toContain("/404");
  });

  it("includes dynamic content pages", () => {
    expect(paths).toContain("/destinations/datong");
    expect(paths).toContain("/attractions/yungang-grottoes");
    expect(paths).toContain("/transport/beijing-to-datong");
    expect(paths).toContain("/tickets/hanging-temple");
    expect(paths).toContain("/travel-essentials/passport-guide");
  });

  it("uses the canonical site URL for every entry", () => {
    for (const url of urls) {
      expect(url.startsWith(siteConfig.url)).toBe(true);
    }
  });

  it("emits no duplicate URLs", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("robots", () => {
  it("allows crawling and points to the sitemap", () => {
    const result = robots();
    expect(result.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(result.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
  });
});
