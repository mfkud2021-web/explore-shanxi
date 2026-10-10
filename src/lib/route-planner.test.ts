import { describe, it, expect } from "vitest";
import { buildRoute } from "./route-planner";

describe("buildRoute", () => {
  it("builds a 3-day route (Datong + Taiyuan)", () => {
    const plan = buildRoute({ origin: "beijing", days: 3, next: "xian", interests: [] });
    expect(plan.total_days).toBe(3);
    expect(plan.stops.map((s) => s.city)).toEqual(["Datong", "Taiyuan"]);
  });

  it("builds a 5-day route", () => {
    const plan = buildRoute({ origin: "beijing", days: 5, next: "xian", interests: [] });
    expect(plan.stops.map((s) => s.city)).toEqual([
      "Datong",
      "Taiyuan",
      "Pingyao",
      "Linfen",
    ]);
  });

  it("builds a 7-day route covering all five destinations", () => {
    const plan = buildRoute({ origin: "beijing", days: 7, next: "xian", interests: [] });
    expect(plan.stops.map((s) => s.city)).toEqual([
      "Datong",
      "Taiyuan",
      "Pingyao",
      "Wutai Mountain",
      "Linfen",
    ]);
  });

  it("allocates at least one day per stop and includes a disclaimer", () => {
    const plan = buildRoute({ origin: "beijing", days: 3, next: "xian", interests: [] });
    expect(plan.disclaimer).toContain("Sample itinerary");
    for (const stop of plan.stops) {
      expect(stop.days).toBeGreaterThan(0);
    }
  });
});
