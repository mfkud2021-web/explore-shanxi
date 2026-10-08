import type { Attraction } from "@/types";

const VERIFIED_AT = "2026-10-07";

export const attractions: Attraction[] = [
  {
    name_en: "Yungang Grottoes",
    name_zh: "云冈石窟",
    slug: "yungang-grottoes",
    city: "Datong",
    region: "datong",
    category: "unesco",
    short_description: "UNESCO-listed Buddhist cave temple complex carved from the 5th century.",
    description:
      "Yungang Grottoes is a UNESCO World Heritage Site near Datong, carved into sandstone cliffs from the 5th century during the Northern Wei dynasty. It contains dozens of caves and thousands of Buddhist statues, and is regarded as one of the three great Buddhist cave-temple complexes in China.",
    latitude: 40.1097,
    longitude: 113.1222,
    opening_hours: "Peak (Apr–Oct): 8:30–17:30; Off-season (Nov–Mar): 8:30–16:30",
    ticket_price: {
      amount: "120 (peak) / 100 (off-season)",
      currency: "CNY",
      note: "Full-price adult ticket",
    },
    reservation_required: true,
    reservation_method:
      "Online real-name reservation required — on-site ticket sales stopped from Jan 1, 2025. Book via the WeChat mini-programs \"云冈石窟文旅\" or \"云冈研究院\".",
    passport_policy: null,
    foreign_visitor_notes:
      "The online reservation flow is documented for Chinese ID cards; whether passports work for online reservation is not clearly stated — confirm via the official channel or a travel platform before travel.",
    official_ticket_url: null,
    official_website: null,
    nearest_railway_station: "Datong South Station (大同南站)",
    transportation:
      "From Datong: city bus 3 or tourist bus 603 direct to the grottoes (~40–50 min); taxi ~30–40 min from the station.",
    recommended_visit_duration: "3–4 hours (2–3h for a highlights route, up to 5h for a deep visit)",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT,
    verification_status: "verified",
    official_sources: [
      {
        source_name: "Datong Municipal Government (dt.gov.cn)",
        source_url: "https://www.dt.gov.cn",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Datong Evening News (大同晚报)",
        source_url: "http://epaper.dtnews.cn",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Shanxi Daily (山西日报)",
        source_url: "https://www.sxrb.com",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Map & travel-guide sources (coordinates, transport, visit duration)",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 3,
      },
    ],
    related_attractions: ["hanging-temple"],
    black_myth_related: true,
    black_myth_notes:
      "Featured in Black Myth: Wukong — the game's cave-temple scenes draw on Yungang's 5th-century carvings, including the 'two Buddhas seated together' motif.",
    image: {
      url: "/images/yungang-grottoes.jpg",
      alt: "The 5th-century cave temples of the Yungang Grottoes, carved into sandstone cliffs near Datong",
      credit: "Dudva",
      source: "https://commons.wikimedia.org/wiki/File:Yungang_Grottoes_03.2025._2.jpg",
      license: "CC0",
    },
    faq: [
      {
        question: "Do I need to book tickets in advance?",
        answer:
          "Yes. On-site ticket sales stopped on Jan 1, 2025, so you must reserve online in advance through the WeChat mini-programs \"云冈石窟文旅\" or \"云冈研究院\".",
      },
      {
        question: "How much is the entrance ticket?",
        answer:
          "A full-price adult ticket is 120 CNY in peak season (Apr–Oct) and 100 CNY in the off-season (Nov–Mar).",
      },
      {
        question: "Can I book with a foreign passport?",
        answer:
          "The official online reservation flow is documented for Chinese ID cards; whether passports work for online booking is not clearly stated. Confirm via the official channel or a travel platform before you travel.",
      },
      {
        question: "How do I get there from Datong?",
        answer:
          "Take city bus 3 or tourist bus 603 direct to the grottoes (about 40–50 minutes), or a taxi from Datong South Station (about 30–40 minutes).",
      },
      {
        question: "How long should I allow for a visit?",
        answer: "3–4 hours; about 2–3 hours for a highlights route, up to 5 hours for a deep visit.",
      },
    ],
  },
  {
    name_en: "Hanging Temple",
    name_zh: "悬空寺",
    slug: "hanging-temple",
    city: "Datong",
    region: "datong",
    category: "temple",
    short_description: "Temple built into a cliff face in Hunyuan County, near Datong.",
    description:
      "The Hanging Temple (Xuankong Temple) is a temple built into a cliff face in Hunyuan County, near Datong. Dating to the late Northern Wei period, it is known for its precarious cliffside construction and its combination of Buddhist, Taoist and Confucian elements.",
    latitude: 39.72,
    longitude: 113.68,
    opening_hours: "Peak season: 8:00–17:00 (off-season hours vary)",
    ticket_price: {
      amount: "115 (entry + climbing)",
      currency: "CNY",
      note: "15 CNY entry-only; 100 CNY climbing ticket (limited to ~2,475/day)",
    },
    reservation_required: true,
    reservation_method:
      "Climbing tickets are limited and require booking — via WeChat \"北岳云游\" or major travel platforms (Trip.com/Ctrip).",
    passport_policy: null,
    foreign_visitor_notes:
      "Foreign visitors can book through major travel platforms such as Trip.com or Ctrip.",
    official_ticket_url: null,
    official_website: "https://www.byhs.net.cn",
    nearest_railway_station: "Datong (大同), then ~1–1.5h to Hunyuan County",
    transportation:
      "Bus from Datong East bus station to Hunyuan County (~1.5h), then a short taxi to the temple; or taxi/day tour from Datong (~1h 20m).",
    recommended_visit_duration: "1.5–3 hours (about 1h if not climbing)",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT,
    verification_status: "verified",
    official_sources: [
      {
        source_name: "Hengshan Scenic Area Management Center",
        source_url: "https://www.byhs.net.cn",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Trip.com / Ctrip",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 2,
      },
      {
        source_name: "Map & travel-guide sources (coordinates, transport, visit duration)",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 3,
      },
    ],
    related_attractions: ["yungang-grottoes"],
    black_myth_related: true,
    black_myth_notes:
      "Featured in Black Myth: Wukong — the game's cliffside wooden structures are modeled on the Hanging Temple.",
    image: {
      url: "/images/hanging-temple.jpg",
      alt: "The Hanging Temple built into a cliff face in Hunyuan County near Datong",
      credit: "BRUNNER Emmanuel (Manu25)",
      source: "https://commons.wikimedia.org/wiki/File:Xuankongsi.jpg",
      license: "Public domain",
    },
    faq: [
      {
        question: "Do I need to book in advance?",
        answer:
          "Climbing tickets are limited to about 2,475 per day and should be booked in advance through the WeChat account \"北岳云游\" or a major travel platform like Trip.com or Ctrip.",
      },
      {
        question: "How much does it cost?",
        answer: "115 CNY for entry plus climbing; entry-only is 15 CNY and the climbing ticket is 100 CNY.",
      },
      {
        question: "Can foreign visitors book tickets?",
        answer: "Yes — foreign visitors can book through major travel platforms such as Trip.com or Ctrip.",
      },
      {
        question: "How do I get there from Datong?",
        answer:
          "Take a bus from Datong East bus station to Hunyuan County (about 1.5 hours) then a short taxi, or a taxi/day tour from Datong (about 1 hour 20 minutes).",
      },
      {
        question: "How long should I allow for a visit?",
        answer: "1.5–3 hours; about 1 hour if you do not climb.",
      },
    ],
  },
  {
    name_en: "Jinci Temple",
    name_zh: "晋祠",
    slug: "jinci-temple",
    city: "Taiyuan",
    region: "taiyuan",
    category: "temple",
    short_description: "Ancient ancestral temple complex on the outskirts of Taiyuan.",
    description:
      "Jinci Temple is an ancient ancestral temple complex on the outskirts of Taiyuan, with buildings, halls and sculptures dating back over a thousand years. It is one of Shanxi's most important surviving examples of classical Chinese garden and temple architecture.",
    latitude: 37.7087,
    longitude: 112.4424,
    opening_hours: "Peak (Apr–Oct): 8:00–18:00; Off-season (Nov–Mar): 8:30–17:00",
    ticket_price: {
      amount: "80 (peak) / 65 (off-season)",
      currency: "CNY",
      note: "Museum ticket; the surrounding Jinci Park is free",
    },
    reservation_required: true,
    reservation_method:
      "Real-name reservation recommended via WeChat \"晋祠博物馆\" or major travel platforms.",
    passport_policy: null,
    foreign_visitor_notes: null,
    official_ticket_url: null,
    official_website: null,
    nearest_railway_station: "Taiyuan South Station (太原南站)",
    transportation:
      "Bus 308/804/856 to Jinci Park; metro line 2 to Xiqiao then taxi ~15 min; from Taiyuan South, bus 79 or taxi ~30 min.",
    recommended_visit_duration: "2.5–3.5 hours (3–4h at a relaxed pace)",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT,
    verification_status: "verified",
    official_sources: [
      {
        source_name: "Jinci Museum official WeChat account (晋祠博物馆)",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "太原本地宝 (ty.bendibao.com)",
        source_url: "http://ty.bendibao.com/tour/2024117/72229.shtm",
        source_checked_at: VERIFIED_AT,
        source_level: 3,
      },
      {
        source_name: "Map & travel-guide sources (coordinates, transport, visit duration)",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 3,
      },
    ],
    related_attractions: ["shanxi-museum"],
    black_myth_related: false,
    black_myth_notes: null,
    image: {
      url: "/images/jinci-temple.jpg",
      alt: "Historic halls and gardens of Jinci Temple on the outskirts of Taiyuan",
      credit: "xiquinhosilva",
      source: "https://commons.wikimedia.org/wiki/File:Jinci_Temple_74047-Taiyuan_(49222173368).jpg",
      license: "CC BY 2.0",
    },
    faq: [
      {
        question: "Do I need to reserve in advance?",
        answer:
          "Real-name reservation is recommended via the WeChat account \"晋祠博物馆\" or a major travel platform.",
      },
      {
        question: "How much is the ticket?",
        answer:
          "80 CNY in peak season (Apr–Oct) and 65 CNY in the off-season (Nov–Mar); the surrounding Jinci Park is free.",
      },
      {
        question: "How do I get there from Taiyuan?",
        answer:
          "Buses 308, 804 or 856 to Jinci Park; metro line 2 to Xiqiao then a ~15-minute taxi; or bus 79 / ~30-minute taxi from Taiyuan South Station.",
      },
      {
        question: "How long should I allow for a visit?",
        answer: "2.5–3.5 hours (3–4 hours at a relaxed pace).",
      },
    ],
  },
  {
    name_en: "Shanxi Museum",
    name_zh: "山西博物院",
    slug: "shanxi-museum",
    city: "Taiyuan",
    region: "taiyuan",
    category: "museum",
    short_description: "Provincial museum of Shanxi, focused on the region's history and archaeology.",
    description:
      "The Shanxi Museum is the provincial museum of Shanxi, located in Taiyuan. Its collections focus on the history, archaeology and material culture of Shanxi, including bronzes, Buddhist sculpture and architectural fragments.",
    latitude: 37.8649,
    longitude: 112.5249,
    opening_hours: "Tue–Sun: 9:00–17:00; closed Monday",
    ticket_price: {
      amount: "Free",
      currency: "CNY",
      note: "No entry fee; real-name reservation required",
    },
    reservation_required: true,
    reservation_method:
      "Real-name reservation required via WeChat \"山西博物院\" or the official website.",
    passport_policy: null,
    foreign_visitor_notes: null,
    official_ticket_url: null,
    official_website: "https://www.shanximuseum.com",
    nearest_railway_station: "Taiyuan Station (太原站)",
    transportation:
      "City bus 69/869 to the 'Provincial Museum' stop; metro line 3 to Shanxi Museum station (verify line status before travel).",
    recommended_visit_duration: "3–4 hours (4–5h for a deep visit)",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT,
    verification_status: "verified",
    official_sources: [
      {
        source_name: "Shanxi Museum official website",
        source_url: "https://www.shanximuseum.com",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Map & travel-guide sources (coordinates, transport, visit duration)",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 3,
      },
    ],
    related_attractions: ["jinci-temple"],
    black_myth_related: false,
    black_myth_notes: null,
    image: {
      url: "/images/shanxi-museum.jpg",
      alt: "The Shanxi Museum in Taiyuan",
      credit: "1969社论",
      source: "https://commons.wikimedia.org/wiki/File:Shanxi_Museum_2025.jpg",
      license: "CC BY-SA 4.0",
    },
    faq: [
      {
        question: "Is entry free?",
        answer: "Yes — entry is free, but real-name reservation is required.",
      },
      {
        question: "Do I need to book in advance?",
        answer: "Yes. Reserve via the WeChat account \"山西博物院\" or the official website.",
      },
      {
        question: "When is it open?",
        answer: "Tuesday to Sunday, 9:00–17:00; closed on Mondays.",
      },
      {
        question: "How do I get there?",
        answer:
          "City bus 69 or 869 to the 'Provincial Museum' stop, or metro line 3 to Shanxi Museum station (check the line's operating status before you travel).",
      },
    ],
  },
  {
    name_en: "Pingyao Ancient City",
    name_zh: "平遥古城",
    slug: "pingyao-ancient-city",
    city: "Pingyao",
    region: "jinzhong",
    category: "historic-city",
    short_description: "UNESCO-listed walled city preserving Ming and Qing dynasty streets.",
    description:
      "Pingyao Ancient City is a UNESCO World Heritage Site and one of China's best-preserved walled cities. Its Ming and Qing dynasty street plan, city walls, residences and former banking houses survive largely intact.",
    latitude: 37.2014,
    longitude: 112.1544,
    opening_hours:
      "Attractions: 8:00–18:30 in summer (last entry 18:15); winter closes earlier. The walled city streets are open all day.",
    ticket_price: {
      amount: "125 (combo)",
      currency: "CNY",
      note: "Covers 22 attractions, valid 3 days; entering the city streets is free",
    },
    reservation_required: true,
    reservation_method:
      "Real-name reservation via WeChat \"平遥古城景区官方服务平台\".",
    passport_policy: "Passport is accepted as a valid ID for ticket verification.",
    foreign_visitor_notes: null,
    official_ticket_url: null,
    official_website: null,
    nearest_railway_station: "Pingyao Gucheng Station (平遥古城站)",
    transportation:
      "High-speed rail to Pingyao Gucheng Station, then a short taxi/bus to the old town.",
    recommended_visit_duration: "1–2 days (combo ticket valid 3 days)",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT,
    verification_status: "verified",
    official_sources: [
      {
        source_name: "Pingyao Ancient City official WeChat platform (平遥古城景区官方服务平台)",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Shanxi Provincial Cultural Relics Bureau",
        source_url: "https://wwj.shanxi.gov.cn",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Map & travel-guide sources (coordinates, transport, visit duration)",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 3,
      },
    ],
    related_attractions: [],
    black_myth_related: false,
    black_myth_notes: null,
    image: {
      url: "/images/pingyao.jpg",
      alt: "A historic scene in Pingyao",
      credit: null,
      source: null,
      license: null,
    },
    faq: [
      {
        question: "Do I need a ticket to enter Pingyao?",
        answer:
          "Entering the city streets is free; the 125 CNY combo ticket covers the 22 attractions and is valid for 3 days.",
      },
      {
        question: "Can I use my foreign passport?",
        answer: "Yes — a passport is accepted as a valid ID for ticket verification.",
      },
      {
        question: "How do I get there?",
        answer:
          "Take high-speed rail to Pingyao Gucheng Station (平遥古城站), then a short taxi or bus to the old town. Buy a ticket to 'Pingyao Gucheng', not 'Pingyao'.",
      },
      {
        question: "How long should I allow for a visit?",
        answer: "1–2 days; the combo ticket is valid for 3 days.",
      },
    ],
  },
  {
    name_en: "Wutai Mountain",
    name_zh: "五台山",
    slug: "wutai-mountain",
    city: "Xinzhou",
    region: "xinzhou",
    category: "buddhist-site",
    short_description: "One of China's Four Sacred Buddhist Mountains and a UNESCO World Heritage Site.",
    description:
      "Wutai Mountain is one of the Four Sacred Mountains of Chinese Buddhism and a UNESCO World Heritage Site. Located in Xinzhou, it is a large pilgrimage and scenic area with numerous temples distributed across five main peaks.",
    latitude: 39.0088,
    longitude: 113.591,
    opening_hours:
      "Scenic area: 24 hours. Temples: ~7:00–18:00 (peak), ~8:00–17:00 (off-season).",
    ticket_price: {
      amount: "135 (peak) / 118 (off-season)",
      currency: "CNY",
      note: "Entry fee valid ~2 days; some temples charge small separate fees",
    },
    reservation_required: true,
    reservation_method:
      "Real-name reservation required via WeChat \"五台山游客服务中心\" (book 1–5 days ahead; private vehicles also need a reservation).",
    passport_policy: null,
    foreign_visitor_notes: null,
    official_ticket_url: "http://www.wtsykfwzx.com/",
    official_website: "http://wts.sxxz.gov.cn/",
    nearest_railway_station:
      "Xinzhou West Station (忻州西站), then ~1.5–2h bus; or Wutaishan Station (五台山站, ~40 km)",
    transportation:
      "Bus from Xinzhou West Station (~1.5–2h); private cars are restricted in the core area during peak season.",
    recommended_visit_duration: "2–3 days (1 day for core temples only)",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT,
    verification_status: "verified",
    official_sources: [
      {
        source_name: "Xinzhou Government — Wutai Mountain",
        source_url: "http://wts.sxxz.gov.cn/",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Wutai Mountain Visitor Service Center",
        source_url: "http://www.wtsykfwzx.com/",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Map & travel-guide sources (coordinates, transport, visit duration)",
        source_url: null,
        source_checked_at: VERIFIED_AT,
        source_level: 3,
      },
    ],
    related_attractions: [],
    black_myth_related: false,
    black_myth_notes: null,
    image: {
      url: "/images/wutai-mountain-2.jpg",
      alt: "A scene on Wutai Mountain, in Xinzhou",
      credit: null,
      source: null,
      license: null,
    },
    faq: [
      {
        question: "Do I need to reserve in advance?",
        answer:
          "Yes. Reserve via the WeChat account \"五台山游客服务中心\", ideally 1–5 days ahead; private vehicles also need a reservation.",
      },
      {
        question: "How much is the entry ticket?",
        answer:
          "135 CNY in peak season and 118 CNY in the off-season; the entry fee is valid for about 2 days, and some temples charge small separate fees.",
      },
      {
        question: "How do I get there?",
        answer:
          "Take a bus from Xinzhou West Station (about 1.5–2 hours) or from Wutaishan Station (about 40 km away). Private cars are restricted in the core area during peak season.",
      },
      {
        question: "How long should I allow for a visit?",
        answer: "2–3 days for the full area, or 1 day for the core temples only.",
      },
    ],
  },
];
