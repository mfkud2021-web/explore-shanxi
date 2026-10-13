import type { Attraction } from "@/types";

const VERIFIED_AT = "2026-10-07";
const VERIFIED_AT_V31 = "2026-10-11";
const VERIFIED_AT_V42 = "2026-10-12";

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
      url: "/images/pingyao-ancient-city.jpg",
      alt: "Aerial panorama of Pingyao Ancient City showing its Ming and Qing dynasty city walls and street grid",
      credit: "Chensiyuan",
      source: "https://commons.wikimedia.org/wiki/File:1_pingyao_ancient_city_aerial_pano_2019.jpg",
      license: "CC BY-SA 4.0",
      aspectRatio: "4/1",
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
      "Bus from Xinzhou West Station (~1.5–2h); private cars are restricted in the core area during peak season. Inside the scenic area, free shuttle buses run from the visitor centre to the Great White Pagoda (大白塔) at Taihuai town and around the core — board right after the ticket gate (检票口); they depart continuously.",
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
      url: "/images/wutai-mountain.jpg",
      alt: "Temple halls and a pagoda at Wutai Mountain, one of China's Four Sacred Buddhist Mountains",
      credit: "Popolon",
      source: "https://commons.wikimedia.org/wiki/File:Wutai_shan_temples.jpg",
      license: "CC BY-SA 4.0",
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
          "Take a bus from Xinzhou West Station (about 1.5–2 hours) or from Wutaishan Station (about 40 km away). Private cars are restricted in the core area during peak season. Inside the scenic area, free shuttle buses run from the visitor centre to the Great White Pagoda (大白塔) at Taihuai town and around the core — board right after the ticket gate (检票口); they depart continuously.",
      },
      {
        question: "How long should I allow for a visit?",
        answer: "2–3 days for the full area, or 1 day for the core temples only.",
      },
    ],
  },
  {
    name_en: "Xiaoxitian Temple",
    name_zh: "小西天",
    slug: "xiaoxitian-temple",
    city: "Xi County (隰县)",
    region: "linfen",
    category: "temple",
    short_description: "A 17th-century temple in Xi County, Linfen, known for its hanging sculptures.",
    description:
      "Xiaoxitian (小西天), also called Qianfo Temple (千佛寺), is a Buddhist temple on Fenghuang Mountain in Xi County, Linfen. Founded in 1629, its main hall contains nearly 2,000 Ming-dynasty hanging sculptures (悬塑), and it is one of the 27 Shanxi sites on the official Black Myth: Wukong location list.",
    latitude: 36.7016,
    longitude: 110.9267,
    opening_hours: null,
    ticket_price: {
      amount: "35 (full) / 18 (half)",
      currency: "CNY",
      note: "Full-price adult; half-price ticket available",
    },
    reservation_required: null,
    reservation_method: null,
    passport_policy: null,
    foreign_visitor_notes: null,
    official_ticket_url: null,
    official_website: null,
    nearest_railway_station: "Linfen West Station (临汾西站), then ~2.5–3h bus to Xi County",
    transportation:
      "Take a long-distance bus from Linfen (城西客运站) to Xi County (~2.5–3 h), then a short taxi (~10 min) to the temple on Fenghuang Mountain; or join a Linfen–Xiaoxitian day-tour bus.",
    recommended_visit_duration: "1–2 hours",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT_V31,
    verification_status: "verified",
    official_sources: [
      {
        source_name: "Shanxi Provincial Cultural Relics Bureau — 'Follow Wukong through Shanxi' location list",
        source_url: "http://wwj.shanxi.gov.cn/gzdt/szdt/202408/t20240821_9637797.shtml",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 1,
      },
      {
        source_name: "Wikidata — geographic coordinates",
        source_url: "https://www.wikidata.org",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 3,
      },
      {
        source_name: "太原本地宝 (ty.bendibao.com) — ticket & opening info",
        source_url: "http://ty.bendibao.com",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 3,
      },
    ],
    related_attractions: ["guangsheng-temple"],
    black_myth_related: true,
    black_myth_notes:
      "One of the 27 Shanxi sites on the official Black Myth: Wukong list. The game's 'Small Western Paradise' chapter shares its name with this site; its main hall holds nearly 2,000 hanging sculptures (悬塑).",
    image: {
      url: "/images/xiaoxitian-temple.jpg",
      alt: "The upper and lower courtyards of Xiaoxitian Temple (小西天) on Fenghuang Mountain in Xi County, Linfen",
      credit: "三猎",
      source: "https://commons.wikimedia.org/wiki/File:%E9%9A%B0%E5%8E%BF%E5%B0%8F%E8%A5%BF%E5%A4%A9_%E4%B8%8A%E9%99%A2%E4%B8%8B%E9%99%A2.JPG",
      license: "CC BY-SA 4.0",
    },
    faq: [
      {
        question: "Where is Xiaoxitian?",
        answer:
          "It is on Fenghuang Mountain in Xi County (隰县), part of Linfen in southern Shanxi. It is not adjacent to Linfen city — allow about 2.5–3 hours by bus.",
      },
      {
        question: "Why is Xiaoxitian famous?",
        answer:
          "Its main hall holds nearly 2,000 Ming-dynasty hanging sculptures (悬塑), and it is one of the 27 Shanxi sites on the official Black Myth: Wukong location list.",
      },
      {
        question: "How much is the ticket?",
        answer: "A full-price adult ticket is 35 CNY; a half-price ticket is 18 CNY.",
      },
      {
        question: "How do I get there from Linfen?",
        answer:
          "Take a long-distance bus from Linfen's 城西客运站 to Xi County (about 2.5–3 hours), then a short taxi to the temple; or join a day-tour bus.",
      },
    ],
  },
  {
    name_en: "Guangsheng Temple",
    name_zh: "广胜寺",
    slug: "guangsheng-temple",
    city: "Hongdong County (洪洞县)",
    region: "linfen",
    category: "temple",
    short_description: "A temple in Hongdong County, Linfen, known for the glazed-tile Flying Rainbow Tower.",
    description:
      "Guangsheng Temple (广胜寺) is a Buddhist temple in Hongdong County, Linfen, within the Huotai Mountain scenic area. It is best known for the Flying Rainbow Tower (飞虹塔), a 13-storey glazed-tile pagoda often described as the world's tallest of its kind. The temple is one of the 27 Shanxi sites on the official Black Myth: Wukong location list.",
    latitude: null,
    longitude: null,
    opening_hours: "≈8:00–18:30 (peak); off-season closes earlier — confirm locally",
    ticket_price: {
      amount: "55–70 (sources differ)",
      currency: "CNY",
      note: "Full-price adult; some sources list 55 CNY, others 70 CNY — confirm before visiting",
    },
    reservation_required: null,
    reservation_method: null,
    passport_policy: null,
    foreign_visitor_notes: null,
    official_ticket_url: null,
    official_website: null,
    nearest_railway_station: "Linfen West Station (临汾西站), then bus/taxi to Hongdong County",
    transportation:
      "In Hongdong County (洪洞县), roughly 1–1.5h from central Linfen by bus or taxi. Local transport and schedules vary — confirm before travelling.",
    recommended_visit_duration: "2–3 hours",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT_V31,
    verification_status: "pending",
    official_sources: [
      {
        source_name: "Shanxi Provincial Cultural Relics Bureau — 'Follow Wukong through Shanxi' location list",
        source_url: "http://wwj.shanxi.gov.cn/gzdt/szdt/202408/t20240821_9637797.shtml",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 1,
      },
      {
        source_name: "太原本地宝 (ty.bendibao.com) — Guangsheng Temple ticket & opening info",
        source_url: "https://m.ty.bendibao.com/tour/75358.shtm",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 3,
      },
      {
        source_name: "Trip.com — Hongdong Guangsheng Temple guides",
        source_url: "https://www.trip.com",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 2,
      },
    ],
    related_attractions: ["xiaoxitian-temple"],
    black_myth_related: true,
    black_myth_notes:
      "One of the 27 Shanxi sites on the official Black Myth: Wukong list. Its glazed-tile Flying Rainbow Tower (飞虹塔) inspired pagoda scenes in the game.",
    image: {
      url: "/images/guangsheng-temple.jpg",
      alt: "The Flying Rainbow Tower and halls of Guangsheng Temple in Hongdong County, Linfen",
      credit: "Artsxiang",
      source: "https://commons.wikimedia.org/wiki/File:%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG",
      license: "CC BY-SA 3.0",
    },
    faq: [
      {
        question: "What is Guangsheng Temple known for?",
        answer:
          "Its glazed-tile Flying Rainbow Tower (飞虹塔), a 13-storey pagoda often called the world's tallest of its kind. It was also a filming location for the 1986 television series Journey to the West.",
      },
      {
        question: "Where is it?",
        answer:
          "In Hongdong County (洪洞县), Linfen, within the Huotai Mountain scenic area — a separate county from Linfen city, not within walking distance of other Linfen sites.",
      },
      {
        question: "How much is the ticket?",
        answer:
          "Sources differ: a full-price adult ticket is listed at 55–70 CNY depending on the source. Confirm the current price before visiting.",
      },
      {
        question: "Is it a Black Myth: Wukong site?",
        answer:
          "Yes — it is one of the 27 Shanxi sites on the official Black Myth: Wukong location list.",
      },
    ],
  },
  {
    name_en: "Hukou Waterfall",
    name_zh: "壶口瀑布",
    slug: "hukou-waterfall",
    city: "Ji County (吉县)",
    region: "linfen",
    category: "scenic-area",
    short_description: "The Yellow River's largest waterfall, on the Shanxi–Shaanxi border in Ji County.",
    description:
      "Hukou Waterfall (壶口瀑布) is the largest waterfall on the Yellow River, on the border between Shanxi and Shaanxi. The Shanxi-side entrance is in Ji County (吉县), Linfen. From 1 June 2026 a single ticket is valid on both the Shanxi and Shaanxi sides for two days.",
    latitude: null,
    longitude: null,
    opening_hours: null,
    ticket_price: {
      amount: "80",
      currency: "CNY",
      note: "Shanxi-side adult ticket from 1 Jun 2026; shuttle bus ~16 CNY round-trip; one ticket valid on both sides for 2 days",
    },
    reservation_required: true,
    reservation_method:
      "Real-name ticket purchase via the scenic area's official WeChat account, on-site counters, or online platforms.",
    passport_policy: null,
    foreign_visitor_notes: null,
    official_ticket_url: null,
    official_website: null,
    nearest_railway_station: "Linfen West Station (临汾西站), then several hours by bus/car to Ji County",
    transportation:
      "In Ji County (吉县), several hours from Linfen by long-distance bus or chartered car. Confirm transport and shuttle schedules before travelling.",
    recommended_visit_duration: "2–3 hours",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT_V31,
    verification_status: "verified",
    official_sources: [
      {
        source_name: "Yan'an Culture & Tourism Bureau (延安市文化和旅游局) — Jin–Shaan Hukou joint ticket report",
        source_url: "https://wlj.yanan.gov.cn/xwzx/bdyw/2062728144453951490.html",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 1,
      },
      {
        source_name: "China National Radio 央广网 — '晋陕壶口瀑布景区实现一票通'",
        source_url: "https://www.cnr.cn/sx/gstjsx/20260605/t20260605_527648342.shtml",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 3,
      },
      {
        source_name: "Guangming Net 光明网 — Jin–Shaan Hukou joint ticket report",
        source_url: "https://m.gmw.cn/2026-06/03/content_1304481678.htm",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 3,
      },
    ],
    related_attractions: ["yao-temple"],
    black_myth_related: false,
    black_myth_notes: null,
    image: {
      url: "/images/hukou-waterfall.jpg",
      alt: "Hukou Waterfall, the largest waterfall on the Yellow River, on the Shanxi–Shaanxi border",
      credit: "Fanghong",
      source: "https://commons.wikimedia.org/wiki/File:Hukou_waterfall.jpg",
      license: "CC BY-SA 4.0",
      aspectRatio: "3/4",
    },
    faq: [
      {
        question: "Where is Hukou Waterfall?",
        answer:
          "On the Yellow River at the Shanxi–Shaanxi border. The Shanxi-side entrance is in Ji County (吉县), Linfen, several hours from Linfen city.",
      },
      {
        question: "How much is the ticket?",
        answer:
          "From 1 June 2026 the Shanxi-side adult ticket is 80 CNY, and a shuttle bus is about 16 CNY round-trip. One ticket is valid on both the Shanxi and Shaanxi sides for two days.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Tickets use real-name purchase via the scenic area's official WeChat account, on-site counters, or online platforms.",
      },
      {
        question: "Can I visit in one day from Linfen?",
        answer:
          "It is several hours each way from Linfen, so it is not a quick side trip. Allow a full day or arrange transport and an overnight stay.",
      },
    ],
  },
  {
    name_en: "Yao Temple",
    name_zh: "尧庙",
    slug: "yao-temple",
    city: "Linfen",
    region: "linfen",
    category: "temple",
    short_description: "A temple in central Linfen honouring the legendary ruler Emperor Yao.",
    description:
      "Yao Temple (尧庙) is a temple complex in the Yaodu district of central Linfen, honouring Emperor Yao (尧), a legendary ruler of early China. It is close to the city centre and is often combined with the nearby Huamen (华门) scenic area.",
    latitude: null,
    longitude: null,
    opening_hours: "≈8:00–18:00 (some sources list seasonal hours) — confirm locally",
    ticket_price: {
      amount: "35 (some sources 50)",
      currency: "CNY",
      note: "Full-price adult; sources differ (35–50 CNY) — confirm before visiting",
    },
    reservation_required: null,
    reservation_method: null,
    passport_policy: null,
    foreign_visitor_notes: null,
    official_ticket_url: null,
    official_website: null,
    nearest_railway_station: "Linfen West Station (临汾西站)",
    transportation:
      "In the Yaodu district of central Linfen. Reach it by city bus or a short taxi from central Linfen or Linfen West Station.",
    recommended_visit_duration: "1–1.5 hours",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT_V31,
    verification_status: "pending",
    official_sources: [
      {
        source_name: "Trip.com — Yao Temple (Linfen) tickets & hours",
        source_url: "https://tw.trip.com/travel-guide/attraction/linfen/yao-temple-78499",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 2,
      },
      {
        source_name: "Wing On Travel 永安旅遊 — Yao Temple visit guide",
        source_url: "https://www.wingontravel.com/discovery/scenic-linfen-139/list/scenic-yao-temple-78499",
        source_checked_at: VERIFIED_AT_V31,
        source_level: 3,
      },
    ],
    related_attractions: ["hukou-waterfall"],
    black_myth_related: false,
    black_myth_notes: null,
    image: {
      url: "/images/yao-temple.jpg",
      alt: "A statue of Emperor Yao at Yao Temple in central Linfen",
      credit: "Emdx",
      source: "https://commons.wikimedia.org/wiki/File:J81929_Linfen_20140706-094434.58_36.05346,111.49097_TempleEmpereurYao.jpg",
      license: "CC BY-SA 4.0",
      aspectRatio: "3/4",
    },
    faq: [
      {
        question: "What is Yao Temple?",
        answer:
          "A temple complex in central Linfen honouring Emperor Yao, a legendary early Chinese ruler, often visited together with the nearby Huamen (华门) scenic area.",
      },
      {
        question: "Where is it?",
        answer:
          "In the Yaodu district of central Linfen, easily reached by city bus or a short taxi.",
      },
      {
        question: "How much is the ticket?",
        answer:
          "Sources differ: a full-price adult ticket is listed at 35–50 CNY. Confirm the current price before visiting.",
      },
    ],
  },
  {
    name_en: "Yingxian Wooden Pagoda",
    name_zh: "应县木塔",
    slug: "yingxian-wooden-pagoda",
    city: "Ying County (应县)",
    region: "shuozhou",
    category: "ancient-architecture",
    short_description: "The world's oldest and tallest surviving wooden pagoda, built in 1056 during the Liao dynasty.",
    description:
      "Yingxian Wooden Pagoda (应县木塔), officially the Sakyamuni Pagoda of Fogong Temple (佛宫寺释迦塔), is a Liao-dynasty timber pagoda in Ying County, Shuozhou, in northern Shanxi. Built in 1056, it is the oldest and tallest surviving wooden pagoda in the world. The octagonal pagoda stands about 67 metres tall and has five visible storeys with additional intermediate mezzanine levels, built almost entirely of timber on an intricate system of bracket sets (斗拱). It is one of the 27 Shanxi sites on the official Black Myth: Wukong location list.",
    latitude: 39.5653,
    longitude: 113.1819,
    opening_hours: null,
    ticket_price: {
      amount: "50",
      currency: "CNY",
      note: "Full-price adult; 25 CNY half-price — confirm before visiting",
    },
    reservation_required: null,
    reservation_method: null,
    passport_policy: null,
    foreign_visitor_notes: null,
    official_ticket_url: null,
    official_website: null,
    nearest_railway_station: "Yingxian West Station (high-speed rail)",
    transportation:
      "High-speed rail from Datong South to Yingxian West Station (~20–30 min), then bus 3 (~5 CNY) or a short taxi (~10 min) to the pagoda.",
    recommended_visit_duration: "1–2 hours (estimate)",
    best_time_to_visit: null,
    accessibility: null,
    last_verified: VERIFIED_AT_V42,
    verification_status: "pending",
    official_sources: [
      {
        source_name: "Shanxi Provincial Cultural Relics Bureau — 'Follow Wukong through Shanxi' location list",
        source_url: "http://wwj.shanxi.gov.cn/gzdt/szdt/202408/t20240821_9637797.shtml",
        source_checked_at: VERIFIED_AT_V42,
        source_level: 1,
      },
      {
        source_name: "People's Daily client / Shanxi Evening News — report on the 27 locations",
        source_url: "https://www.peopleapp.com/column/30046461572-500005723821",
        source_checked_at: VERIFIED_AT_V42,
        source_level: 3,
      },
      {
        source_name: "Wikidata — geographic coordinates",
        source_url: "https://www.wikidata.org",
        source_checked_at: VERIFIED_AT_V42,
        source_level: 3,
      },
      {
        source_name: "太原本地宝 (ty.bendibao.com) — ticket info",
        source_url: "http://ty.bendibao.com",
        source_checked_at: VERIFIED_AT_V42,
        source_level: 3,
      },
    ],
    related_attractions: [],
    black_myth_related: true,
    black_myth_notes:
      "One of the 27 Shanxi sites on the official Black Myth: Wukong list. The game's wooden-pagoda scenes reference this Liao-dynasty pagoda, the world's oldest and tallest surviving wooden pagoda.",
    image: {
      url: "/images/yingxian-wooden-pagoda.jpg",
      alt: "The Yingxian Wooden Pagoda (Sakyamuni Pagoda of Fogong Temple), a Liao-dynasty timber pagoda in Ying County, Shuozhou",
      credit: "Charlie fong",
      source: "https://commons.wikimedia.org/wiki/File:Pagoda_of_Fogong_Temple_at_Dust.jpg",
      license: "CC BY-SA 4.0",
    },
    faq: [
      {
        question: "What is the Yingxian Wooden Pagoda?",
        answer:
          "It is the oldest and tallest surviving wooden pagoda in the world. Officially the Sakyamuni Pagoda of Fogong Temple (佛宫寺释迦塔), it was built in 1056 during the Liao dynasty and stands about 67 metres tall.",
      },
      {
        question: "Where is it?",
        answer:
          "In Ying County (应县), Shuozhou, in northern Shanxi. It is most easily reached as a day trip from Datong.",
      },
      {
        question: "How do I get there?",
        answer:
          "Take high-speed rail from Datong South to Yingxian West Station (about 20–30 minutes), then bus 3 (about 5 CNY) or a short taxi (about 10 minutes) to the pagoda.",
      },
      {
        question: "How much is the ticket?",
        answer:
          "A full-price adult ticket is 50 CNY and a half-price ticket is 25 CNY. Confirm the current price before visiting.",
      },
      {
        question: "Is it a Black Myth: Wukong site?",
        answer:
          "Yes — it is one of the 27 Shanxi sites on the official Black Myth: Wukong location list, referenced by the game's wooden-pagoda scenes.",
      },
    ],
  },
];
