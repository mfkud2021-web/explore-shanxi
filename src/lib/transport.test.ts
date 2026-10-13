import { describe, it, expect } from "vitest";
import { transportRoutes } from "@/data/transport-routes";
import {
  getIntercityTransportRoutes,
  getLastMileTransportRoutes,
  getLastMileRoutesForAttraction,
  getAttractionBySlug,
  getTransportRouteSlugs,
} from "./data-access";

const LAST_MILE_SLUGS = [
  "datong-south-to-yungang-grottoes",
  "yingxian-west-to-wooden-pagoda",
  "pingyao-gucheng-to-ancient-city",
  "wutai-stations-to-mount-wutai",
  "linfen-to-xiaoxitian",
];

describe("transport route data", () => {
  it("has unique slugs", () => {
    const slugs = transportRoutes.map((r) => r.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("keeps the four intercity rail routes", () => {
    const intercity = getIntercityTransportRoutes();
    expect(intercity.map((r) => r.slug)).toEqual([
      "beijing-to-datong",
      "datong-to-taiyuan",
      "taiyuan-to-pingyao",
      "pingyao-to-xian",
    ]);
  });

  it("adds the five last-mile station routes", () => {
    const lastMile = getLastMileTransportRoutes();
    expect(lastMile.map((r) => r.slug)).toEqual(LAST_MILE_SLUGS);
  });

  it("gives every last-mile route the required sections", () => {
    for (const r of getLastMileTransportRoutes()) {
      expect(r.steps?.length).toBeGreaterThan(0);
      expect(r.public_transport).toBeTruthy();
      expect(r.taxi_backup).toBeTruthy();
      expect(r.return_journey).toBeTruthy();
      expect(r.recommended_transport).toBeTruthy();
    }
  });

  it("links every last-mile route to an existing attraction", () => {
    for (const r of getLastMileTransportRoutes()) {
      expect(r.attraction_slug).toBeTruthy();
      expect(getAttractionBySlug(r.attraction_slug!)).toBeTruthy();
    }
  });

  it("gives every last-mile route at least one source with a valid level", () => {
    for (const r of getLastMileTransportRoutes()) {
      expect(r.sources.length).toBeGreaterThan(0);
      for (const s of r.sources) {
        expect([1, 2, 3, 4]).toContain(s.source_level);
      }
    }
  });

  it("returns the matching routes for an attraction", () => {
    expect(
      getLastMileRoutesForAttraction("yungang-grottoes").map((r) => r.slug),
    ).toEqual(["datong-south-to-yungang-grottoes"]);
    expect(getLastMileRoutesForAttraction("xiaoxitian-temple").map((r) => r.slug)).toEqual([
      "linfen-to-xiaoxitian",
    ]);
    expect(getLastMileRoutesForAttraction("hanging-temple")).toEqual([]);
  });

  it("exposes every route through the sitemap slug list", () => {
    expect(getTransportRouteSlugs().sort()).toEqual(
      [...LAST_MILE_SLUGS, "beijing-to-datong", "datong-to-taiyuan", "taiyuan-to-pingyao", "pingyao-to-xian"].sort(),
    );
  });
});
