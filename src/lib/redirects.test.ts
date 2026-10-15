import { describe, it, expect } from "vitest";
import { ticketRedirectRules } from "./redirects";
import { getAttractionSlugs } from "./data-access";

describe("ticketRedirectRules", () => {
  const rules = ticketRedirectRules();
  const slugs = getAttractionSlugs();

  it("emits exactly one redirect per attraction", () => {
    expect(rules.length).toBe(slugs.length);
  });

  it("redirects every ticket detail page to its matching attraction page", () => {
    for (const slug of slugs) {
      const rule = rules.find((r) => r.source === `/tickets/${slug}`);
      expect(rule).toBeDefined();
      expect(rule?.destination).toBe(`/attractions/${slug}`);
      expect(rule?.permanent).toBe(true);
    }
  });

  it("contains no redirect loops or chains", () => {
    const sources = new Set(rules.map((r) => r.source));
    for (const rule of rules) {
      expect(sources.has(rule.destination)).toBe(false);
    }
  });
});
