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

// Sources for the last-mile (station → site) routes below.
const VERIFIED_AT_V44 = "2026-10-13";

const DATONG_GOV: Source = {
  source_name: "Datong Municipal Government (dt.gov.cn) — Datong South → Yungang shuttle opening",
  source_url: "http://www.dt.gov.cn/dtszf/lnzcfuxmd/202505/21cbfa7671ef48ba8fe5ff5999e268b8.shtml",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 1,
};

const DATONG_EVENING_NEWS: Source = {
  source_name: "Datong Evening News (大同晚报) — Datong South → Yungang shuttle report",
  source_url: "http://epaper.dtnews.cn/dtwb/html/2025-05/02/content_54_258314.htm",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 1,
};

const BENDIBAO_TY: Source = {
  source_name: "太原本地宝 (ty.bendibao.com) — transport guides",
  source_url: "http://ty.bendibao.com",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 3,
};

const SXGOV_WUTAI: Source = {
  source_name: "黄河新闻网 (sxgov.cn) — Taiyuan/Xinzhou ⇋ Wutai round-trip package",
  source_url: "https://www.sxgov.cn/yaowen/content/2026-07/26/content_13661650.htm",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 1,
};

const XZRBW_WUTAI: Source = {
  source_name: "忻州日报 (xzrbw.com) — new Wutaishan high-speed rail station construction",
  source_url: "https://www.xzrbw.com/info/2152/464605.htm",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 1,
};

const LINFEN_TOURISM: Source = {
  source_name: "临汾市文化和旅游局 — 2026 临汾旅游直通车 (Linfen tourism shuttle)",
  source_url: "https://www.toutiao.com/article/7631489545434890792/",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 1,
};

const LINFEN_BENDIBAO: Source = {
  source_name: "临汾本地宝 (linfen.bendibao.com) — Xiaoxitian transport",
  source_url: "http://m.linfen.bendibao.com/jingdian/xiaoxitian/traffic/",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 3,
};

const QUNAR_LINFEN: Source = {
  source_name: "去哪儿 (Qunar) — Linfen Xiaoxitian day-tour listing",
  source_url: "https://piao.qunar.com/daytrip/detail_3634332.html",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 2,
};

export const transportRoutes: TransportRoute[] = [
  {
    slug: "beijing-to-datong",
    route_type: "intercity",
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
    route_type: "intercity",
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
    route_type: "intercity",
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
    route_type: "intercity",
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
  {
    slug: "datong-south-to-yungang-grottoes",
    route_type: "last-mile",
    from: "Datong South Station",
    from_zh: "大同南站",
    to: "Yungang Grottoes",
    to_zh: "云冈石窟",
    recommended_transport: "Direct tourist shuttle (景区直通车), then walk to the gate",
    approximate_duration: "≈40 min by shuttle; ≈25–30 min by taxi",
    departure_station: null,
    arrival_station: null,
    frequency: "Shuttle roughly every 20 min during operating hours (announced 9:00–16:40)",
    summary:
      "The grottoes are about 16 km west of central Datong. A dedicated shuttle now runs from Datong South Station straight to the gate, which is the easiest option for a first-time visitor.",
    steps: [
      {
        title: "Exit toward the shuttle stop",
        detail:
          "After leaving Datong South (大同南站), turn left and walk about 50 m to the dedicated tourist-shuttle parking area. Look for staff with signs or '大同景区直通车' (Datong scenic shuttle) signage.",
      },
      {
        title: "Ride the direct shuttle to the gate",
        detail:
          "The one-stop shuttle takes about 40 minutes to the Yungang gate and costs about 10 CNY per person (seat only). It is bookable via the '大同景区直通车' WeChat mini-program or at the stop.",
      },
      {
        title: "Enter with your reservation",
        detail:
          "Yungang uses real-name reservation only (on-site ticket sales stopped 1 Jan 2025). Book in advance via the WeChat mini-programs '云冈石窟文旅' or '云冈研究院', then show your reservation at the gate.",
      },
    ],
    public_transport:
      "The direct tourist shuttle (景区直通车) from Datong South Station runs about every 20 minutes (announced hours 9:00–16:40) and reaches the gate in about 40 minutes for about 10 CNY. City bus 603 (tourist line) also connects central Datong to the grottoes in about 40–50 minutes; its fare is not consistently documented (about 2–10 CNY).",
    taxi_backup:
      "A taxi or ride-hail from Datong South Station takes about 25–30 minutes and typically costs about 35–50 CNY. Show the driver the Chinese name 云冈石窟.",
    return_journey:
      "The shuttle returns from the grottoes to Datong South, calling at Datong Ancient City and Datong Museum on the way. If you miss the last shuttle, take city bus 603 back toward Datong or a taxi (about 35–50 CNY). Check the last shuttle time before you enter — it runs earlier than the grottoes' closing time.",
    tips: [
      "Confirm the shuttle's current hours before you go — the 9:00–16:40 schedule is from its May 2025 opening announcement and may have changed.",
      "Yungang is reservation-only: there are no on-site ticket sales since 1 Jan 2025.",
      "Allow 3–4 hours on site (2–3 hours for a highlights route).",
      "The last shuttle back is earlier than the attraction closes — plan to finish before the final return trip.",
    ],
    attraction_slug: "yungang-grottoes",
    notes: [],
    faq: [
      {
        question: "Is there a direct shuttle from Datong South Station to the grottoes?",
        answer:
          "Yes — a dedicated tourist shuttle (景区直通车) opened in May 2025 and runs from the station straight to the gate (about 40 minutes, about 10 CNY). Confirm the current schedule before you travel.",
      },
      {
        question: "Do I need to book the grottoes in advance?",
        answer:
          "Yes. On-site ticket sales stopped on 1 Jan 2025; book a real-name reservation via the WeChat mini-programs '云冈石窟文旅' or '云冈研究院'.",
      },
    ],
    sources: [DATONG_GOV, DATONG_EVENING_NEWS, BENDIBAO_TY],
    last_verified: VERIFIED_AT_V44,
    verification_status: "verified",
  },
  {
    slug: "yingxian-west-to-wooden-pagoda",
    route_type: "last-mile",
    from: "Yingxian West Station",
    from_zh: "应县西站",
    to: "Yingxian Wooden Pagoda",
    to_zh: "应县木塔",
    recommended_transport: "Station shuttle (接驳车) to the pagoda gate",
    approximate_duration: "≈20–25 min by shuttle; ≈20–30 min by taxi",
    departure_station: null,
    arrival_station: null,
    frequency: "Shuttle runs to match high-speed train arrivals (no fixed timetable)",
    summary:
      "The pagoda is in Ying County town, about 20 km from Yingxian West high-speed rail station. A shuttle links the station to the pagoda gate; there is no passenger rail into the county town itself.",
    steps: [
      {
        title: "Find the shuttle at the station",
        detail:
          "At Yingxian West (应县西站), look for the shuttle / 接驳车 to the pagoda. It generally runs to match train arrivals rather than on a fixed timetable, so follow the crowd or ask station staff.",
      },
      {
        title: "Ride about 20–25 minutes to the gate",
        detail:
          "The shuttle costs about 5 CNY and drops you at (or near) the pagoda gate / Muta pedestrian-street entrance.",
      },
      {
        title: "Enter the pagoda site",
        detail:
          "Buy a ticket (about 50 CNY full / 25 CNY half-price) at the gate or via the scenic area's official channel, then walk to the pagoda.",
      },
    ],
    public_transport:
      "A shuttle / 接驳 bus runs from Yingxian West Station to the pagoda (about 5 CNY, 20–25 minutes), generally timed to high-speed train arrivals. The exact bus line number is not reliably documented — confirm it at the station. There is no passenger rail into Ying County town, so the last leg is always by road.",
    taxi_backup:
      "A taxi or shared car from the station to the pagoda costs roughly 10–15 CNY per person (shared) and takes about 20–30 minutes. Show the driver 应县木塔.",
    return_journey:
      "Catch the shuttle back from the Muta pedestrian-street entrance (across the road) or near Ying County bus station (about 5 CNY). Leave at least an hour before your train — the shuttle follows train times, so a taxi is the safer fallback if you are short on time.",
    tips: [
      "The station is about 20 km from the pagoda — do not plan on walking.",
      "Shuttle and bus details come from travel guides and are not confirmed against an official operator. Allow buffer time and confirm the line at the station.",
      "The pagoda visit itself is roughly 1–2 hours.",
    ],
    attraction_slug: "yingxian-wooden-pagoda",
    notes: [],
    sources: [BENDIBAO_TY],
    last_verified: VERIFIED_AT_V44,
    verification_status: "pending",
  },
  {
    slug: "pingyao-gucheng-to-ancient-city",
    route_type: "last-mile",
    from: "Pingyao Gucheng Station",
    from_zh: "平遥古城站",
    to: "Pingyao Ancient City",
    to_zh: "平遥古城",
    recommended_transport: "Bus 108 or a short taxi to the old town",
    approximate_duration: "≈15–20 min by taxi; ≈20–40 min by bus",
    departure_station: null,
    arrival_station: null,
    frequency: "Bus 108 runs frequently (north and south lines)",
    summary:
      "Two stations serve Pingyao. The high-speed station (平遥古城站) is about 10 km outside the old town; the conventional station (平遥站) is a short walk from the West Gate. Don't confuse them — most high-speed trains stop at Pingyao Gucheng.",
    steps: [
      {
        title: "Confirm which station you arrive at",
        detail:
          "High-speed trains stop at Pingyao Gucheng (平遥古城站), about 10 km from the old town. Conventional trains stop at Pingyao (平遥站), about 700 m from the West Gate (凤仪门).",
      },
      {
        title: "From the high-speed station, take bus 108 or a taxi",
        detail:
          "Bus 108 (about 1 CNY) has north and south lines serving different gates — ask the driver which one you need. It takes about 20–40 minutes. A taxi takes about 15–20 minutes.",
      },
      {
        title: "Enter the old town",
        detail:
          "Walking the walled-city streets is free. The 125 CNY combo ticket (valid 3 days) covers the 22 ticketed sights inside.",
      },
    ],
    public_transport:
      "Bus 108 from Pingyao Gucheng Station (about 1 CNY, 20–40 minutes) has separate north and south lines — confirm the direction with the driver. A shuttle / 摆渡 bus is sometimes available (about 10 CNY per trip), but availability varies.",
    taxi_backup:
      "A metered taxi to the old town costs roughly 20–30 CNY (15–20 minutes). Use the blue official taxis and insist on the meter or agree a price first. DiDi is unreliable in Pingyao; Amap (高德地图) ride-hailing is more reliable (about 20–35 CNY). Show the driver 平遥古城.",
    return_journey:
      "Return the same way: taxi or bus 108 back to Pingyao Gucheng Station. Check your train's departure station — high-speed trains leave from Pingyao Gucheng (平遥古城站), not Pingyao (平遥站).",
    tips: [
      "Buy a ticket to 'Pingyao Gucheng' (平遥古城站), not 'Pingyao' (平遥站), if you want the high-speed line.",
      "The high-speed station is about 10 km out — there is no walking option.",
      "DiDi often fails in Pingyao; prefer Amap ride-hailing or an official taxi.",
    ],
    attraction_slug: "pingyao-ancient-city",
    notes: [],
    faq: [
      {
        question: "Which station should I book?",
        answer:
          "High-speed trains stop at Pingyao Gucheng (平遥古城站), about 10 km from the old town; conventional trains stop at Pingyao (平遥站), a short walk from the West Gate. Book to 'Pingyao Gucheng' for the high-speed line.",
      },
    ],
    sources: [RAIL_12306, BENDIBAO_TY],
    last_verified: VERIFIED_AT_V44,
    verification_status: "verified",
  },
  {
    slug: "wutai-stations-to-mount-wutai",
    route_type: "last-mile",
    from: "Xinzhou West Station",
    from_zh: "忻州西站",
    to: "Mount Wutai Scenic Area",
    to_zh: "五台山风景名胜区",
    recommended_transport: "Tourist shuttle from Xinzhou West to the visitor centre",
    approximate_duration: "≈1.5 h by shuttle from Xinzhou West",
    departure_station: null,
    arrival_station: null,
    frequency: "Shuttles roughly 06:00–18:00; round-trip package departs 06:15/07:15",
    summary:
      "No railway reaches the Wutai core (Taihuai town) directly. The nearest practical stations are Xinzhou West (high-speed) and the existing Wutaishan Station near Fanshi (conventional). A new high-speed Wutaishan Station is under construction and not yet open.",
    steps: [
      {
        title: "Choose your station",
        detail:
          "The most common approach is Xinzhou West (忻州西站, high-speed rail). An existing conventional station called Wutaishan (五台山站) sits near Fanshi's Shahe, about 45 km from the core — do not confuse it with the new high-speed Wutaishan Station, which is still under construction and not open as of late 2026.",
      },
      {
        title: "Take a direct shuttle or bus to the visitor centre",
        detail:
          "From Xinzhou West, a tourist shuttle runs to the visitor centre (游客中心) at Taihuai town (about 35 CNY, 1.5 h). A Taiyuan/Xinzhou ⇋ Wutai round-trip package (118 CNY return, excluding entry) also departs Xinzhou West south parking at 06:15 and 07:15.",
      },
      {
        title: "Enter the scenic area",
        detail:
          "Wutai uses real-name reservation (book 1–5 days ahead via the WeChat account '五台山游客服务中心'). Entry is about 135 CNY peak / 118 CNY off-season, valid about 2 days; private cars also need a reservation.",
      },
      {
        title: "Ride the free in-area shuttle to the temples",
        detail:
          "Inside the scenic area there are free shuttle buses. Board right after the ticket gate (检票口) — they depart continuously and run from the visitor centre to the Great White Pagoda (大白塔) at Taihuai town and around the core area.",
      },
    ],
    public_transport:
      "Tourist shuttles (直通车) run to the Wutai visitor centre from Taiyuan Wusu Airport, Wutaishan Airport, Taiyuan South, Xinzhou West and Taiyuan stations, roughly 06:00–18:00 in both directions (book via the '山西文旅行' mini-program). From the existing Wutaishan Station (五台山站, near Fanshi/Shahe), a bus covers the roughly 45 km to the core in about 1 hour (about 25 CNY).",
    taxi_backup:
      "A taxi or chartered car from Xinzhou West to the core is about 80 km and takes about 1.5–2 hours (roughly 200–300 CNY; shared cars about 80–120 CNY per person). Show the driver 五台山游客中心 or 台怀镇.",
    return_journey:
      "The free in-area shuttle also runs back from the core to the visitor centre and gate — board it to return. Outward shuttles leave the visitor centre through the day; the Xinzhou round-trip package departs the core at 16:00 and 17:00. Confirm the last return time — the scenic area is large and the gate is far from the temples, so allow time to get back to the visitor centre.",
    tips: [
      "There is no railway to the core yet — every option involves a road transfer of at least about 1.5 hours.",
      "The new high-speed Wutaishan Station (雄忻高铁) is under construction and reported to open around March 2027; it is not usable in 2026.",
      "Private vehicles are restricted in the core area during peak season — book a reservation if you drive.",
      "Entry requires advance real-name reservation (book 1–5 days ahead).",
    ],
    attraction_slug: "wutai-mountain",
    notes: [],
    faq: [
      {
        question: "Is there a direct train to Mount Wutai?",
        answer:
          "No. No railway reaches the core (Taihuai town) directly. The nearest practical options are Xinzhou West (high-speed, then a shuttle of about 1.5 h) or the existing Wutaishan Station near Fanshi (conventional, about 45 km away). A new high-speed Wutaishan Station is under construction and not open yet.",
      },
      {
        question: "Which station should I use?",
        answer:
          "Xinzhou West (忻州西站) is the most practical for a shuttle connection. Do not confuse the existing conventional 五台山站 with the new high-speed station, which is still under construction.",
      },
      {
        question: "Is there transport inside the scenic area?",
        answer:
          "Yes — free shuttle buses run inside the scenic area from the visitor centre to the Great White Pagoda (大白塔) at Taihuai town and around the core. Board right after the ticket gate; they depart continuously.",
      },
    ],
    sources: [SXGOV_WUTAI, XZRBW_WUTAI],
    last_verified: VERIFIED_AT_V44,
    verification_status: "verified",
  },
  {
    slug: "linfen-to-xiaoxitian",
    route_type: "last-mile",
    from: "Linfen (transport hubs)",
    from_zh: "临汾",
    to: "Xiaoxitian Temple, Xi County",
    to_zh: "隰县小西天",
    recommended_transport: "Linfen tourism shuttle (旅游直通车) to Xiaoxitian",
    approximate_duration: "≈2.5 h each way by road",
    departure_station: null,
    arrival_station: null,
    frequency: "Shuttle: two morning departures (~07:00/07:30); bus: ~07:30–17:00",
    summary:
      "Xiaoxitian (小西天) is in Xi County (隰县), about 2.5–3 hours by road from Linfen city. There is no passenger rail to Xi County, so this is a bus or tour-shuttle journey.",
    steps: [
      {
        title: "Get to the right departure point",
        detail:
          "The main options leave from Linfen's Chengxi bus station (城西客运站). A dedicated Xiaoxitian tourism shuttle (旅游直通车) also picks up at Chengxi, Yaomiao bus station, the railway station and Linfen West Station.",
      },
      {
        title: "Travel to Xi County",
        detail:
          "The Chengxi bus to Xi County takes about 2.5 hours (roughly 07:30–17:00). The direct tourism shuttle runs two morning departures (about 07:00 and 07:30) and returns early afternoon (about 12:00/12:30), with a combined ticket of about 123 CNY (entry + return transport + insurance).",
      },
      {
        title: "Reach the temple gate",
        detail:
          "From Xi County bus station it is about 3 km to the temple on Fenghuang Mountain — a short taxi (about 10 CNY). From the shuttle drop-off, follow the signposted path to the gate.",
      },
    ],
    public_transport:
      "Chengxi bus station (城西客运站) runs buses to Xi County (about 2.5 h) roughly 07:30–17:00; from Xi County bus station a roughly 3 km taxi (about 10 CNY) reaches the temple. A Linfen tourism shuttle (旅游直通车, published 2026 by the Linfen culture & tourism bureau) runs Linfen ⇋ Xiaoxitian with two morning departures and early-afternoon returns — about 123 CNY adult including entry, return transport and insurance.",
    taxi_backup:
      "A chartered car or taxi from Linfen to Xi County takes about 2.5 hours each way; arrange the return in advance (drivers may not wait, and return taxis from Xi County are limited). Show the driver 隰县小西天.",
    return_journey:
      "The tourism shuttle returns around 12:00/12:30 (confirm when booking). If travelling by public bus, confirm the last Xi County → Linfen bus before you set out — it may be earlier than you expect, and there is no rail fallback.",
    tips: [
      "Xi County has no passenger rail — every option is by road (about 2.5 h each way).",
      "The direct shuttle is the most practical option for overseas visitors: pre-book and confirm the return time.",
      "Bus schedules here are not confirmed against an official timetable — allow a full day and confirm return times in advance.",
    ],
    attraction_slug: "xiaoxitian-temple",
    notes: [],
    faq: [
      {
        question: "Is there a direct bus or shuttle from Linfen to Xiaoxitian?",
        answer:
          "Yes — a tourism shuttle (旅游直通车) runs from Linfen to Xiaoxitian with two morning departures and early-afternoon returns (about 123 CNY adult, including entry and return transport). Regular buses also leave from Chengxi bus station (城西客运站).",
      },
      {
        question: "Can I visit Xiaoxitian as a day trip from Linfen?",
        answer:
          "Yes, but it is about 2.5 hours each way by road. The direct shuttle is the most practical option — pre-book and confirm the return time, since there is no rail fallback.",
      },
    ],
    sources: [LINFEN_TOURISM, QUNAR_LINFEN, LINFEN_BENDIBAO],
    last_verified: VERIFIED_AT_V44,
    verification_status: "verified",
  },
];
