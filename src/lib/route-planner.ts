import { destinations } from "@/data/destinations";
import { attractions } from "@/data/attractions";
import { transportRoutes } from "@/data/transport-routes";
import type {
  AttractionCategory,
  Destination,
  Interest,
  RoutePlannerInput,
  RoutePlan,
  RouteStop,
} from "@/types";

// North-to-south sample corridor. The first three are on the verified
// high-speed rail line (Beijing–Datong–Taiyuan–Pingyao–Xi'an); the last two are
// additional Shanxi destinations without a dedicated route entry in the data.
const CORRIDOR = ["datong", "taiyuan", "pingyao", "wutai-mountain", "linfen"] as const;

// Minimum nights per stop. Derived from each destination's recommended stay.
const MIN_DAYS: Record<(typeof CORRIDOR)[number], number> = {
  datong: 2,
  taiyuan: 1,
  pingyao: 1,
  "wutai-mountain": 2,
  linfen: 1,
};

const destBySlug = new Map(destinations.map((d) => [d.slug, d]));
const attractionBySlug = new Map(attractions.map((a) => [a.slug, a]));

const INTEREST_LABEL: Record<Interest, string> = {
  "ancient-architecture": "Ancient architecture",
  "black-myth": "Black Myth: Wukong",
  history: "History",
  food: "Food",
  photography: "Photography",
  unesco: "UNESCO sites",
};

function attractionCategories(dest: Destination): AttractionCategory[] {
  return dest.major_attractions
    .map((slug) => attractionBySlug.get(slug)?.category)
    .filter((c): c is AttractionCategory => c != null);
}

function matchesInterest(dest: Destination, interest: Interest): boolean {
  const categories = attractionCategories(dest);
  switch (interest) {
    case "black-myth":
      return dest.major_attractions.some(
        (slug) => attractionBySlug.get(slug)?.black_myth_related === true,
      );
    case "unesco":
      return (
        dest.key_facts.some((f) => /unesco/i.test(f.label)) ||
        categories.includes("unesco")
      );
    case "ancient-architecture":
      return categories.some(
        (c) =>
          c === "ancient-architecture" || c === "temple" || c === "historic-city",
      );
    case "history":
      return categories.some((c) => c === "museum" || c === "historic-city");
    case "food":
      return false;
    case "photography":
      return categories.includes("scenic-area");
  }
}

function highlightsFor(slug: (typeof CORRIDOR)[number]): string[] {
  const dest = destBySlug.get(slug);
  if (!dest) return [];
  return dest.major_attractions
    .map((s) => attractionBySlug.get(s)?.name_en)
    .filter((n): n is string => Boolean(n));
}

// Some destinations list attractions that sit in different counties, several
// hours apart. Flag this so the planner never implies a single day covers them.
function spreadWarning(dest: Destination): string | null {
  const cities = new Set(
    dest.major_attractions
      .map((slug) => attractionBySlug.get(slug)?.city)
      .filter((c): c is string => Boolean(c)),
  );
  if (cities.size > 1) {
    return "These attractions sit in different counties, several hours apart — don't try to visit them all in one day.";
  }
  return null;
}

// Flag stops whose attraction details still need verification, so travellers
// know to confirm tickets, hours and transport themselves.
function pendingWarning(dest: Destination): string | null {
  const hasPending = dest.major_attractions.some(
    (slug) => attractionBySlug.get(slug)?.verification_status === "pending",
  );
  return hasPending
    ? "Some attraction details are pending verification — confirm tickets and transport before travelling."
    : null;
}

function routeDuration(from: string, to: string): string | null {
  return (
    transportRoutes.find((r) => r.from === from && r.to === to)
      ?.approximate_duration ?? null
  );
}

function legTransport(fromCity: string, toCity: string): string | null {
  const route =
    transportRoutes.find((r) => r.from === fromCity && r.to === toCity) ??
    transportRoutes.find((r) => r.from === toCity && r.to === fromCity);
  if (!route) return null;
  const reverse = route.from === toCity;
  const duration = route.approximate_duration
    ? ` — ${route.approximate_duration}`
    : "";
  return `${route.recommended_transport}${reverse ? " (reverse of a verified route)" : ""}${duration}`;
}

function entryNote(origin: RoutePlannerInput["origin"]): string | null {
  switch (origin) {
    case "beijing": {
      const d = routeDuration("Beijing", "Datong");
      return d
        ? `Start from Beijing — Beijing–Datong high-speed rail is verified (${d}).`
        : "Start from Beijing — Beijing–Datong high-speed rail is verified.";
    }
    case "xian":
      return "Start from Xi'an — the Pingyao–Xi'an high-speed rail connects to the Shanxi corridor (verified).";
    case "shanghai":
      return "No verified transport route from Shanghai is included yet — the sample follows the main corridor.";
    case "other":
      return "No verified transport route for this starting point is included yet.";
  }
}

function exitNote(next: RoutePlannerInput["next"]): string | null {
  switch (next) {
    case "xian": {
      const d = routeDuration("Pingyao", "Xi'an");
      return d
        ? `Continue to Xi'an — Pingyao–Xi'an high-speed rail is verified (${d}).`
        : "Continue to Xi'an — Pingyao–Xi'an high-speed rail is verified.";
    }
    case "beijing": {
      const d = routeDuration("Beijing", "Datong");
      return d
        ? `Continue toward Beijing — Beijing–Datong high-speed rail is verified (${d}).`
        : "Continue toward Beijing — Beijing–Datong high-speed rail is verified.";
    }
    case "other":
      return "No verified onward route is included yet.";
  }
}

export function buildRoute(input: RoutePlannerInput): RoutePlan {
  const reverse = input.origin === "xian";
  const order = reverse ? [...CORRIDOR].reverse() : [...CORRIDOR];

  let remaining = input.days;
  const stops: RouteStop[] = [];
  for (const slug of order) {
    if (remaining <= 0) break;
    const minDays = MIN_DAYS[slug];
    if (remaining < minDays) continue;
    const dest = destBySlug.get(slug)!;
    const matching = input.interests.filter((i) => matchesInterest(dest, i));
    const notes: string[] = [];
    if (matching.length) {
      notes.push(`Matches: ${matching.map((i) => INTEREST_LABEL[i]).join(", ")}`);
    }
    const spread = spreadWarning(dest);
    if (spread) notes.push(spread);
    const pending = pendingWarning(dest);
    if (pending) notes.push(pending);
    stops.push({
      city: dest.name_en,
      days: minDays,
      highlights: highlightsFor(slug),
      note: notes.length ? notes.join(" ") : null,
      transport: null,
    });
    remaining -= minDays;
  }

  // Distribute any remaining days so the sum of stop days equals the requested length.
  if (stops.length > 0 && remaining > 0) {
    let i = 0;
    while (remaining > 0) {
      stops[i % stops.length].days += 1;
      remaining -= 1;
      i += 1;
    }
  }

  // Attach verified transport hints between consecutive stops.
  for (let i = 1; i < stops.length; i++) {
    stops[i].transport = legTransport(stops[i - 1].city, stops[i].city);
  }

  const context: string[] = [];
  const entry = entryNote(input.origin);
  const exit = exitNote(input.next);
  if (entry) context.push(entry);
  if (exit) context.push(exit);

  const noData = input.interests.filter(
    (i) => !CORRIDOR.some((slug) => matchesInterest(destBySlug.get(slug)!, i)),
  );
  if (noData.length) {
    context.push(
      `No verified recommendations are available yet for: ${noData
        .map((i) => INTEREST_LABEL[i])
        .join(", ")}.`,
    );
  }

  return {
    stops,
    total_days: input.days,
    disclaimer:
      "Sample itinerary only — check live schedules, opening times and ticket rules before travelling.",
    contextNote: context.length ? context.join(" ") : null,
  };
}
