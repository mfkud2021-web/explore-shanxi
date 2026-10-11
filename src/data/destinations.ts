import type { Destination } from "@/types";

const VERIFIED_AT = "2026-10-07";

export const destinations: Destination[] = [
  {
    slug: "datong",
    name_en: "Datong",
    name_zh: "大同",
    prefecture: "datong",
    tagline: "Ancient capital of the Northern Wei, gateway to the Yungang Grottoes",
    summary:
      "Datong is a city in northern Shanxi and a former imperial capital. It is the main base for visiting the UNESCO-listed Yungang Grottoes and the Hanging Temple, two of China's most significant surviving ancient monuments.",
    recommended_stay: "2–3 days",
    major_attractions: ["yungang-grottoes", "hanging-temple"],
    transport_hint: "High-speed rail from Beijing and Taiyuan",
    hero_image: {
      url: "/images/datong.jpg",
      alt: "A scene in Datong, Shanxi province",
      credit: null,
      source: null,
      license: null,
    },
    quick_answer: {
      question: "Is Datong worth visiting?",
      answer:
        "Datong is the main gateway to the Yungang Grottoes and the Hanging Temple, two of China's most important ancient sites, and is well connected to Beijing and Taiyuan by high-speed rail.",
    },
    key_facts: [
      { label: "UNESCO site", value: "Yungang Grottoes (inscribed 2001)", verified: true },
      { label: "Airport", value: "Datong Yungang International Airport", verified: true },
      { label: "High-speed rail from Beijing", value: "≈1h 45m to Datong South Station", verified: true },
    ],
    faq: [
      {
        question: "What are Datong's main sights?",
        answer:
          "The UNESCO-listed Yungang Grottoes, a 5th-century Buddhist cave-temple complex, and the Hanging Temple, a temple built into a cliff face in Hunyuan County.",
      },
      {
        question: "How do I get to Datong?",
        answer:
          "High-speed rail from Beijing (about 1h45m to Datong South Station) and from Taiyuan; Datong Yungang International Airport also serves the city.",
      },
      {
        question: "How long should I stay?",
        answer: "2–3 days is recommended to cover the Yungang Grottoes and the Hanging Temple.",
      },
      {
        question: "Do I need to book tickets in advance?",
        answer:
          "Both major sights use real-name reservations — see each attraction page for current ticket and booking rules.",
      },
    ],
    sources: [
      {
        source_name: "Datong Municipal Government (dt.gov.cn)",
        source_url: "https://www.dt.gov.cn",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "UNESCO World Heritage Centre",
        source_url: "https://whc.unesco.org",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
    ],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "taiyuan",
    name_en: "Taiyuan",
    name_zh: "太原",
    prefecture: "taiyuan",
    tagline: "Shanxi's provincial capital and main transport hub",
    summary:
      "Taiyuan is the capital of Shanxi province and the usual entry point for a Shanxi trip. It is home to Jinci Temple and the Shanxi Museum, and its railway station connects the province's main cities.",
    recommended_stay: "1–2 days",
    major_attractions: ["jinci-temple", "shanxi-museum"],
    transport_hint: "Main rail and air hub for Shanxi",
    hero_image: {
      url: "/images/taiyuan.jpg",
      alt: "A scene in Taiyuan, Shanxi province",
      credit: null,
      source: null,
      license: null,
    },
    quick_answer: {
      question: "Where should I start a Shanxi trip?",
      answer:
        "Taiyuan is the provincial capital and main transport hub, making it the most common starting point for a trip across Shanxi.",
    },
    key_facts: [
      { label: "Role", value: "Capital of Shanxi province", verified: true },
      { label: "Airport", value: "Taiyuan Wusu International Airport (TYN)", verified: true },
      { label: "High-speed rail from Beijing", value: "≈2.5–3h to Taiyuan South Station", verified: true },
    ],
    faq: [
      {
        question: "What is there to see in Taiyuan?",
        answer:
          "Jinci Temple, an ancient temple complex on the outskirts of the city, and the Shanxi Museum, which covers the region's history and archaeology.",
      },
      {
        question: "How do I get to Taiyuan?",
        answer:
          "Fly into Taiyuan Wusu International Airport (TYN), or take high-speed rail from Beijing (about 2.5–3h to Taiyuan South Station).",
      },
      {
        question: "How long should I stay?",
        answer: "1–2 days is usually enough for Jinci Temple and the Shanxi Museum.",
      },
    ],
    sources: [
      {
        source_name: "Shanxi Provincial Government (shanxi.gov.cn)",
        source_url: "https://www.shanxi.gov.cn",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
    ],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "pingyao",
    name_en: "Pingyao",
    name_zh: "平遥",
    prefecture: "jinzhong",
    tagline: "UNESCO-listed walled city from the Ming and Qing dynasties",
    summary:
      "Pingyao is a remarkably well-preserved walled city in central Shanxi, listed as a UNESCO World Heritage Site. Its old town retains Ming and Qing dynasty streets, residences and former banking houses.",
    recommended_stay: "1–2 days",
    major_attractions: ["pingyao-ancient-city"],
    transport_hint: "High-speed rail station serving the old town",
    hero_image: {
      url: "/images/pingyao.jpg",
      alt: "A historic scene in Pingyao",
      credit: null,
      source: null,
      license: null,
    },
    quick_answer: {
      question: "Why visit Pingyao?",
      answer:
        "Pingyao is one of China's best-preserved walled cities and a UNESCO World Heritage Site, with Ming and Qing dynasty streets and former banking houses surviving largely intact.",
    },
    key_facts: [
      { label: "UNESCO site", value: "Walled city, inscribed 1997", verified: true },
      { label: "Rail station", value: "Pingyao Gucheng Station (high-speed rail)", verified: true },
      { label: "Combo ticket", value: "125 CNY for 22 attractions (3 days)", verified: true },
    ],
    faq: [
      {
        question: "Do I need a ticket to visit Pingyao?",
        answer:
          "Entering the walled-city streets is free; the 125 CNY combo ticket covers 22 attractions and is valid for 3 days.",
      },
      {
        question: "How do I get to Pingyao?",
        answer:
          "Take high-speed rail to Pingyao Gucheng Station (平遥古城站) — not Pingyao Station — then a short taxi or bus to the old town.",
      },
      {
        question: "How long should I stay?",
        answer: "1–2 days; the combo ticket is valid for 3 days.",
      },
    ],
    sources: [
      {
        source_name: "UNESCO World Heritage Centre",
        source_url: "https://whc.unesco.org",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Shanxi Provincial Government (shanxi.gov.cn)",
        source_url: "https://www.shanxi.gov.cn",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
    ],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "wutai-mountain",
    name_en: "Wutai Mountain",
    name_zh: "五台山",
    prefecture: "xinzhou",
    tagline: "One of China's Four Sacred Buddhist Mountains",
    summary:
      "Wutai Mountain, in Xinzhou, is one of the Four Sacred Mountains of Chinese Buddhism and a UNESCO World Heritage Site. It is a large scenic and pilgrimage area with many temples spread across its peaks.",
    recommended_stay: "2–3 days",
    major_attractions: ["wutai-mountain"],
    transport_hint: "Reached overland from Taiyuan or Xinzhou",
    hero_image: {
      url: "/images/wutai-mountain.jpg",
      alt: "The White Pagoda (大白塔) at Wutai Mountain, Xinzhou",
      credit: null,
      source: null,
      license: null,
    },
    quick_answer: {
      question: "What is Wutai Mountain?",
      answer:
        "Wutai Mountain is one of the Four Sacred Mountains of Chinese Buddhism and a UNESCO World Heritage Site, with numerous temples across a large pilgrimage and scenic area in Xinzhou.",
    },
    key_facts: [
      { label: "UNESCO site", value: "Inscribed 2009 (cultural landscape)", verified: true },
      { label: "Nearest HSR station", value: "Xinzhou West Station", verified: true },
      { label: "Entry ticket", value: "≈135 CNY (peak season)", verified: true },
    ],
    faq: [
      {
        question: "How do I get to Wutai Mountain?",
        answer:
          "Travel overland from Taiyuan or Xinzhou. The nearest high-speed rail station is Xinzhou West, then a bus of about 1.5–2h.",
      },
      {
        question: "Do I need to reserve in advance?",
        answer:
          "Yes — real-name reservation is required (book 1–5 days ahead), and private vehicles also need a reservation.",
      },
      {
        question: "How long should I stay?",
        answer: "2–3 days for the full area, or 1 day for the core temples.",
      },
    ],
    sources: [
      {
        source_name: "UNESCO World Heritage Centre",
        source_url: "https://whc.unesco.org",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
      {
        source_name: "Xinzhou Daily (xzrbw.com)",
        source_url: "https://www.xzrbw.com",
        source_checked_at: VERIFIED_AT,
        source_level: 3,
      },
    ],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "linfen",
    name_en: "Linfen",
    name_zh: "临汾",
    prefecture: "linfen",
    tagline: "Southern Shanxi's base for ancient architecture and temples",
    summary:
      "Linfen, in southern Shanxi, is a base for exploring the region's ancient temples, pagodas and other historic architecture. It lies on the high-speed rail corridor between Taiyuan and Xi'an.",
    recommended_stay: "2–3 days",
    major_attractions: [],
    transport_hint: "High-speed rail on the Taiyuan–Xi'an line",
    hero_image: {
      url: "/images/linfen.jpg",
      alt: "A scene in Linfen, southern Shanxi",
      credit: null,
      source: null,
      license: null,
    },
    quick_answer: {
      question: "Why visit Linfen?",
      answer:
        "Linfen is a convenient base for southern Shanxi's ancient temples and historic architecture, on the high-speed rail line between Taiyuan and Xi'an.",
    },
    key_facts: [
      { label: "Rail station", value: "Linfen West Station (high-speed rail)", verified: true },
      { label: "Rail line", value: "On the Taiyuan–Xi'an high-speed rail corridor", verified: true },
      { label: "Region", value: "Southern Shanxi", verified: true },
      { label: "Black Myth site", value: "Xiaoxitian (Xi County) — see the Black Myth guide", verified: true },
    ],
    faq: [
      {
        question: "How do I get to Linfen?",
        answer:
          "High-speed rail on the Taiyuan–Xi'an line; the main station is Linfen West Station.",
      },
      {
        question: "What is there to see nearby?",
        answer:
          "Linfen is a base for southern Shanxi's ancient temples. The Black Myth: Wukong site Xiaoxitian (Xi County) is in the Linfen area — see the Black Myth guide.",
      },
      {
        question: "How long should I stay?",
        answer: "2–3 days.",
      },
    ],
    sources: [
      {
        source_name: "Shanxi Provincial Government (shanxi.gov.cn)",
        source_url: "https://www.shanxi.gov.cn",
        source_checked_at: VERIFIED_AT,
        source_level: 1,
      },
    ],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
];
