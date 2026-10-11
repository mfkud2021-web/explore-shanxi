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

  it("reverses the corridor when starting from Xi'an", () => {
    const plan = buildRoute({ origin: "xian", days: 7, next: "beijing", interests: [] });
    expect(plan.stops.map((s) => s.city)).toEqual([
      "Linfen",
      "Wutai Mountain",
      "Pingyao",
      "Taiyuan",
      "Datong",
    ]);
  });

  it("derives highlights from real attraction data", () => {
    const plan = buildRoute({ origin: "beijing", days: 3, next: "xian", interests: [] });
    const datong = plan.stops.find((s) => s.city === "Datong");
    expect(datong?.highlights).toEqual(["Yungang Grottoes", "Hanging Temple"]);
  });

  it("marks stops that match a Black Myth interest", () => {
    const plan = buildRoute({
      origin: "beijing",
      days: 5,
      next: "xian",
      interests: ["black-myth"],
    });
    const datong = plan.stops.find((s) => s.city === "Datong");
    expect(datong?.note).toContain("Black Myth");
    const taiyuan = plan.stops.find((s) => s.city === "Taiyuan");
    expect(taiyuan?.note).toBeNull();
  });

  it("notes interests that have no verified data", () => {
    const plan = buildRoute({
      origin: "beijing",
      days: 3,
      next: "xian",
      interests: ["food"],
    });
    expect(plan.contextNote).toContain("No verified recommendations");
    expect(plan.contextNote).toContain("Food");
  });

  it("includes verified entry transport for a Beijing origin", () => {
    const plan = buildRoute({ origin: "beijing", days: 3, next: "other", interests: [] });
    expect(plan.contextNote).toContain("Beijing–Datong");
  });

  it("notes when an onward destination has no verified route", () => {
    const plan = buildRoute({ origin: "beijing", days: 3, next: "other", interests: [] });
    expect(plan.contextNote).toContain("No verified onward route");
  });

  it("distributes remaining days so the total matches the requested length", () => {
    const plan = buildRoute({ origin: "beijing", days: 10, next: "xian", interests: [] });
    const sum = plan.stops.reduce((acc, s) => acc + s.days, 0);
    expect(plan.total_days).toBe(10);
    expect(sum).toBe(10);
  });

  it("adds verified transport hints between consecutive stops", () => {
    const plan = buildRoute({ origin: "beijing", days: 3, next: "xian", interests: [] });
    const taiyuan = plan.stops.find((s) => s.city === "Taiyuan");
    expect(taiyuan?.transport).toContain("High-speed rail");
  });

  it("includes southern Shanxi attractions in the Linfen stop", () => {
    const plan = buildRoute({ origin: "beijing", days: 5, next: "xian", interests: [] });
    const linfen = plan.stops.find((s) => s.city === "Linfen");
    expect(linfen?.highlights).toEqual([
      "Yao Temple",
      "Guangsheng Temple",
      "Xiaoxitian Temple",
      "Hukou Waterfall",
    ]);
  });

  it("warns when a stop's attractions are spread across counties", () => {
    const plan = buildRoute({ origin: "beijing", days: 5, next: "xian", interests: [] });
    const linfen = plan.stops.find((s) => s.city === "Linfen");
    expect(linfen?.note).toContain("different counties");
  });

  it("warns when a stop has pending-verification attractions", () => {
    const plan = buildRoute({ origin: "beijing", days: 5, next: "xian", interests: [] });
    const linfen = plan.stops.find((s) => s.city === "Linfen");
    expect(linfen?.note).toContain("pending verification");
  });

  it("matches the photography interest to scenic areas", () => {
    const plan = buildRoute({
      origin: "beijing",
      days: 7,
      next: "xian",
      interests: ["photography"],
    });
    const linfen = plan.stops.find((s) => s.city === "Linfen");
    expect(linfen?.note).toContain("Photography");
  });
});
