import type { RoutePlannerInput, RoutePlan, RouteStop } from "@/types";

const STOPS: { city: string; minDays: number; highlights: string[] }[] = [
  { city: "Datong", minDays: 2, highlights: ["Yungang Grottoes", "Hanging Temple"] },
  { city: "Taiyuan", minDays: 1, highlights: ["Jinci Temple", "Shanxi Museum"] },
  { city: "Pingyao", minDays: 1, highlights: ["Pingyao Ancient City"] },
  { city: "Wutai Mountain", minDays: 2, highlights: ["Temples and mountain scenery"] },
  { city: "Linfen", minDays: 1, highlights: ["Ancient architecture and temples"] },
];

export function buildRoute(input: RoutePlannerInput): RoutePlan {
  let remaining = input.days;
  const stops: RouteStop[] = [];

  for (const s of STOPS) {
    if (remaining <= 0) break;
    if (remaining >= s.minDays) {
      const alloc = Math.min(remaining, s.minDays);
      stops.push({ city: s.city, days: alloc, highlights: s.highlights, note: null });
      remaining -= alloc;
    }
  }

  return {
    stops,
    total_days: input.days,
    disclaimer:
      "Sample itinerary only — check live schedules, opening times and ticket rules before travelling.",
  };
}
