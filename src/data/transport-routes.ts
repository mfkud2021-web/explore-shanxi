import type { Source, TransportRoute } from "@/types";

const VERIFIED_AT = "2026-10-07";

const CHECK_12306 = "Check 12306 for current schedules, stations and ticket availability.";

const RAIL_12306: Source = {
  source_name: "China Railway 12306 (official timetable)",
  source_url: "https://kyfw.12306.cn",
  source_checked_at: VERIFIED_AT,
  source_level: 1,
};

const CTRIP_TRAINS: Source = {
  source_name: "Ctrip Trains (携程火车票)",
  source_url: "https://trains.ctrip.com",
  source_checked_at: VERIFIED_AT,
  source_level: 2,
};

export const transportRoutes: TransportRoute[] = [
  {
    slug: "beijing-to-datong",
    from: "Beijing",
    from_zh: "北京",
    to: "Datong",
    to_zh: "大同",
    recommended_transport: "High-speed rail",
    approximate_duration: "≈2h (fastest ≈1h45m)",
    departure_station: "Beijing North (北京北) or Qinghe (清河)",
    arrival_station: "Datong South (大同南)",
    frequency: "Frequent — roughly every 20 min at peak",
    notes: [
      "Served by high-speed rail (G/D trains).",
      "Some trains depart from Beijing North (北京北站), others from Qinghe (清河站) — check the departure station when booking.",
      CHECK_12306,
    ],
    faq: [
      {
        question: "Which station in Beijing does the train leave from?",
        answer:
          "Trains to Datong depart from Beijing North (北京北站) or Qinghe (清河站), depending on the service. Check the departure station shown when you book — do not assume it is Beijing South or Beijing West.",
      },
      {
        question: "How long does the train take?",
        answer:
          "About 2 hours; the fastest trains take about 1 hour 45 minutes to Datong South (大同南站).",
      },
      {
        question: "How do I get to the Yungang Grottoes from Datong South?",
        answer:
          "The Yungang Grottoes are west of the city. From Datong South Station a taxi takes about 30–40 minutes; alternatively take city bus 3 or tourist bus 603 from Datong (about 40–50 minutes).",
      },
    ],
    sources: [RAIL_12306, CTRIP_TRAINS],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "datong-to-taiyuan",
    from: "Datong",
    from_zh: "大同",
    to: "Taiyuan",
    to_zh: "太原",
    recommended_transport: "High-speed rail",
    approximate_duration: "≈1h25m–2h (fastest ≈1h21m)",
    departure_station: "Datong South (大同南)",
    arrival_station: "Taiyuan South (太原南)",
    frequency: "Frequent — multiple trains per hour",
    notes: ["Served by high-speed rail (G/D trains).", CHECK_12306],
    sources: [RAIL_12306, CTRIP_TRAINS],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "taiyuan-to-pingyao",
    from: "Taiyuan",
    from_zh: "太原",
    to: "Pingyao",
    to_zh: "平遥",
    recommended_transport: "High-speed rail",
    approximate_duration: "≈30–40 min",
    departure_station: "Taiyuan South (太原南)",
    arrival_station: "Pingyao Gucheng (平遥古城)",
    frequency: "Frequent",
    notes: [
      "Served by high-speed rail.",
      "Buy a ticket to 'Pingyao Gucheng' (平遥古城站), not 'Pingyao' (平遥站) — the high-speed station is ~10 min by taxi from the old town.",
      CHECK_12306,
    ],
    sources: [RAIL_12306, CTRIP_TRAINS],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "pingyao-to-xian",
    from: "Pingyao",
    from_zh: "平遥",
    to: "Xi'an",
    to_zh: "西安",
    recommended_transport: "High-speed rail",
    approximate_duration: "≈2.5–3h (fastest ≈2h28m)",
    departure_station: "Pingyao Gucheng (平遥古城)",
    arrival_station: "Xi'an North (西安北)",
    frequency: "Several trains per day",
    notes: ["Served by high-speed rail (G/D trains).", CHECK_12306],
    sources: [RAIL_12306, CTRIP_TRAINS],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
];
