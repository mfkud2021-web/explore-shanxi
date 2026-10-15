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

const DATONG_SHUTTLE_NETWORK: Source = {
  source_name: "Datong Municipal Government (dt.gov.cn) — scenic shuttle network now 29 lines across 11 Shanxi landmarks",
  source_url: "https://www.dt.gov.cn/dtszf/bmdt/202605/7ce05661f9f4485a8962318384d61a85.shtml",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 1,
};

const SHUOZHOU_YINGXIAN_REPLY: Source = {
  source_name: "Yingxian Transportation Bureau reply via Shuozhou gov info disclosure (shuozhou.gov.cn) — shuttle buses arranged to match high-speed trains",
  source_url: "http://szxxgk.shuozhou.gov.cn/bjsj/202409/t20240927_696585.shtml",
  source_checked_at: VERIFIED_AT_V44,
  source_level: 1,
};

const VERIFIED_AT_V5 = "2026-10-15";

const HENGSHAN_TRANSPORT: Source = {
  source_name: "Hengshan Scenic Area Management Center (byhs.net.cn) — transport guide & scenic shuttle fare",
  source_url: "https://www.byhs.net.cn/Travel_Guide/12.html",
  source_checked_at: VERIFIED_AT_V5,
  source_level: 1,
};

const HENGSHAN_CLIMBING: Source = {
  source_name: "Hengshan Scenic Area Management Center (byhs.net.cn) — Hanging Temple climbing-ticket reservation notice (2,475/day)",
  source_url: "https://www.byhs.net.cn/culture_detial/314.html",
  source_checked_at: VERIFIED_AT_V5,
  source_level: 1,
};

const HUNYUAN_GOV_NEW_RULE: Source = {
  source_name: "Hunyuan County Government (hunyuan.gov.cn) — climbing-ticket quota split effective 2 Oct 2026",
  source_url: "https://www.hunyuan.gov.cn/hyxrmzfz/bmdtn/202609/f65b022f2e9a4bb18187c095433594a0.shtml",
  source_checked_at: VERIFIED_AT_V5,
  source_level: 1,
};

const SXGOV_CLIMBING: Source = {
  source_name: "黄河新闻网 (sxgov.cn) — Hanging Temple climbing-ticket online reservation adjustment",
  source_url: "https://www.sxgov.cn/yaowen/content/2026-09/24/content_13692099.htm",
  source_checked_at: VERIFIED_AT_V5,
  source_level: 1,
};

const TRIP_HUNYUAN: Source = {
  source_name: "Trip.com travel guide — Datong/Hunyuan transport",
  source_url: "https://tw.trip.com/moments/detail/hunyuan-3026-149999305/",
  source_checked_at: VERIFIED_AT_V5,
  source_level: 3,
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
    frequency: "Shuttle roughly every 20 min during operating hours (announced May 2025: 9:00–16:40 — confirm current hours)",
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
    return_journey: {
      where_to_board:
        "From the grottoes' exit, walk about 5–10 minutes to the return shuttle stop; the shuttle also calls at Datong Ancient City and Datong Museum on the way back to Datong South.",
      how_to_return:
        "The same 景区直通车 shuttle returns to Datong South Station (10 CNY). Alternatively take city bus 603 back toward central Datong, or a taxi (about 35–50 CNY, 25–30 min).",
      booking_requirement:
        "Book via the '大同景区直通车' WeChat mini-program (or '晋游宝') — reserve ahead, as departures adjust to demand and seats are one-per-passenger with no standing room.",
      last_departure:
        "Announced hours are 9:00–16:40 (every ~20 min) from the May 2025 opening notice; the network was still running as of May 2026, but the current last return is not confirmed — it runs earlier than the grottoes' closing time, so confirm before you enter.",
      fallback:
        "If you miss the last shuttle, take city bus 603 back toward Datong or a taxi / ride-hail (about 35–50 CNY) to Datong South or your hotel.",
      same_day_return:
        "Realistic — allow 3–4 hours on site (2–3 for highlights), go in on a morning shuttle and return mid-afternoon, finishing before the last shuttle.",
    },
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
    sources: [DATONG_GOV, DATONG_EVENING_NEWS, DATONG_SHUTTLE_NETWORK, BENDIBAO_TY],
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
    return_journey: {
      where_to_board:
        "Board the return shuttle across the road from the drop-off point near the Muta pedestrian-street entrance; some shuttles transfer you at Ying County bus station (应县汽车站) first.",
      how_to_return:
        "A 5 CNY shuttle returns to Yingxian West Station. It has no fixed timetable — drivers match high-speed train departures, so ask station staff or the driver about the return timing (contact details are often posted on the bus).",
      booking_requirement:
        "No advance booking — board on the spot (5 CNY). Because it follows train times rather than a fixed timetable, confirm the return timing locally.",
      last_departure:
        "Return timings are not confirmed against an official timetable. The Yingxian Transportation Bureau states buses are arranged to match high-speed trains at Yingxian West; one traveller report puts the last return at about 16:30 (unverified) — confirm locally.",
      fallback:
        "If you miss the shuttle, take a taxi or shared car to Yingxian West (about 10–15 CNY, 20–30 min). Show the driver 应县西站.",
      same_day_return:
        "Realistic as a half-day trip — the pagoda visit is 1–2 hours — but leave at least an hour before your train, since the return shuttle follows train times and a taxi is the safer fallback.",
    },
    tips: [
      "The station is about 20 km from the pagoda — do not plan on walking.",
      "Shuttle and bus details come from travel guides and are not confirmed against an official operator. Allow buffer time and confirm the line at the station.",
      "The pagoda visit itself is roughly 1–2 hours.",
    ],
    attraction_slug: "yingxian-wooden-pagoda",
    notes: [],
    sources: [SHUOZHOU_YINGXIAN_REPLY, BENDIBAO_TY],
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
    return_journey: {
      where_to_board:
        "From the old town, catch bus 108 at the gate you arrived at (north and south lines serve different gates) or hail a taxi from any gate.",
      how_to_return:
        "Bus 108 (about 1 CNY) returns to Pingyao Gucheng Station, or take a taxi (about 20–30 CNY, 15–20 min). Use the blue official taxis or Amap ride-hailing (DiDi is unreliable here).",
      booking_requirement:
        "No booking needed — bus 108 runs frequently and you pay on board.",
      last_departure:
        "Bus 108's last departure is roughly 19:30 (third-party timetable, updated 2024 — confirm on the day). Taxis and Amap ride-hail run later if you miss it.",
      fallback:
        "If you miss the last bus, take an official taxi or Amap ride-hail to the station. Check your train's departure station — high-speed trains leave from Pingyao Gucheng (平遥古城站), not Pingyao (平遥站).",
      same_day_return:
        "Very realistic — the old town is compact and the station is only about 10 km away, so a morning arrival and evening return is easy.",
    },
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
    return_journey: {
      where_to_board:
        "From the core, board the free in-area shuttle at Taihuai town to ride back to the visitor centre and ticket gate. The Xinzhou West round-trip package returns from the core area.",
      how_to_return:
        "From the visitor centre, outward shuttles leave through the day back to Xinzhou West (and Taiyuan). The Xinzhou round-trip package departs the core at 16:00 and 17:00.",
      booking_requirement:
        "The round-trip package should be booked in advance (via the '山西文旅行' mini-program). The free in-area shuttle needs no booking.",
      last_departure:
        "The package's 16:00/17:00 return is from its published schedule — confirm the current time when booking. The free in-area shuttle runs continuously, but the area is large; allow time to get back to the visitor centre.",
      fallback:
        "If you miss the last outward shuttle, a taxi or chartered car from the visitor centre / Taihuai town to Xinzhou West is about 80 km (roughly 200–300 CNY; shared cars about 80–120 CNY per person).",
      same_day_return:
        "Feasible as a day trip from Xinzhou West using the round-trip package (about 1.5 h each way), but the mountain is large and deserves more time — staying overnight in Taihuai town is recommended for a fuller visit.",
    },
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
    return_journey: {
      where_to_board:
        "If you took the tourism shuttle, return from the temple's drop-off point. If you took the public bus, board at Xi County bus station (about 3 km from the temple, a ~10 CNY taxi).",
      how_to_return:
        "The tourism shuttle returns to Linfen around 12:00/12:30 (confirm when booking). By public bus, take the Xi County → Linfen bus from Xi County bus station (about 2.5 h).",
      booking_requirement:
        "The direct tourism shuttle should be pre-booked (a combined ~123 CNY ticket covers entry, return transport and insurance). Public buses are paid on board.",
      last_departure:
        "The Xi County → Linfen bus runs roughly 07:30–17:00, but the last departure is not confirmed against an official timetable — confirm it before you set out. There is no rail fallback.",
      fallback:
        "If you miss the bus or shuttle, arrange a taxi or chartered car back to Linfen (about 2.5 h); return taxis from Xi County are limited, so arrange the return in advance.",
      same_day_return:
        "Realistic but a full-day commitment (about 2.5 h each way). The pre-booked shuttle with an early-afternoon return is the most practical option.",
    },
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
  {
    slug: "datong-to-hanging-temple",
    route_type: "last-mile",
    from: "Datong (transport hubs)",
    from_zh: "大同",
    to: "Hanging Temple, Hunyuan County",
    to_zh: "悬空寺",
    recommended_transport:
      "Coach from Datong to Hunyuan County, then a taxi to the Hengshan Visitor Centre and the scenic shuttle to the temple",
    approximate_duration:
      "≈1.5–2h by coach + ≈10–15 min taxi + ≈10–15 min shuttle (one way)",
    departure_station: null,
    arrival_station: null,
    frequency:
      "Coach roughly every 30 min (third-party, unconfirmed); visitor-centre shuttle runs continuously to ~17:30 (official, seasonal)",
    summary:
      "The Hanging Temple sits in Hunyuan County (浑源县), about 60–70 km southeast of Datong. Private cars cannot reach the temple gate — every visitor parks at the Hengshan Visitor Centre (恒山游客中心) and transfers to a scenic shuttle. Without your own car, the journey is a coach to Hunyuan plus a short road transfer to the visitor centre.",
    steps: [
      {
        title: "Leave Datong by coach to Hunyuan County",
        detail:
          "Take a Datong–Hunyuan coach from a Datong bus station — sources differ on which (Datong bus station, Xinnan passenger station or Datong East bus station). The ride is about 1.5–2 hours. Confirm the departure point and fare before you set out, as no current official timetable is published here.",
      },
      {
        title: "Reach the Hengshan Visitor Centre",
        detail:
          "From Hunyuan County town, take a taxi or ride-hail (about 10–15 minutes) to the Hengshan Visitor Centre (恒山游客中心). Private cars cannot continue to the temple gate, so this transfer is required.",
      },
      {
        title: "Ride the scenic shuttle to the temple",
        detail:
          "At the visitor centre, buy the scenic shuttle (摆渡车) — 20 CNY per person for a same-day pass covering unlimited round trips between the visitor centre, the Hanging Temple, Yuemen Bay and Hengzong. The visitor-centre-to-temple leg is about 10–15 minutes.",
      },
      {
        title: "Enter with your reservation",
        detail:
          "Entry costs 15 CNY and the climbing ticket (登临票) 100 CNY — you need both to climb. Climbing is capped at 2,475 tickets per day, so book ahead via the WeChat account '北岳云游' or, for foreign visitors, Trip.com.",
      },
    ],
    public_transport:
      "A Datong–Hunyuan coach (roughly every 30 minutes, about 1.5–2 hours, fare about 15–30 CNY) is the main public option — but these figures come from third-party guides and are not confirmed against an official timetable. Some guides also mention a tourist shuttle from Heyang Gate Square (和阳门广场) in the morning, but its current operation is unconfirmed. From Hunyuan town, a short taxi reaches the Hengshan Visitor Centre, then the official 20 CNY shuttle (same-day pass) covers the final leg.",
    taxi_backup:
      "A taxi or chartered car from Datong to the temple area takes about 1 hour 20 minutes each way. You still cannot drive to the temple gate — the car stops at the Hengshan Visitor Centre, and you take the 20 CNY shuttle for the last leg. Agree the fare in advance; it suits 2–4 people sharing or anyone short on time.",
    return_journey: {
      where_to_board:
        "Return by shuttle from the Hanging Temple to the Hengshan Visitor Centre (the 20 CNY pass covers the return), then a taxi back to Hunyuan County town, then a Hunyuan–Datong coach.",
      how_to_return:
        "Take the shuttle back to the visitor centre, a short taxi to Hunyuan bus station, then the Hunyuan–Datong coach back to Datong.",
      booking_requirement:
        "No booking for the shuttle (buy on the spot). For the coach, buy at the station — but confirm the return departure times locally, as no official timetable is published here.",
      last_departure:
        "The last Hunyuan–Datong coach is not confirmed against an official timetable — confirm the last return when you arrive, not when you are ready to leave. The visitor-centre shuttle to the Hanging Temple runs until about 17:30 (seasonal), so plan to finish before then.",
      fallback:
        "If you miss the last coach, take a taxi or chartered car back to Datong (about 1 hour 20 minutes). Arrange it in advance or ask at the visitor centre.",
      same_day_return:
        "Realistic as a day trip from Datong — allow about 1.5–2 hours each way plus 1.5–3 hours on site. Start early and confirm the last return coach before you set out.",
    },
    tips: [
      "Climbing the temple is capped at 2,475 tickets per day (since 1 April 2026, reduced each year) — reserve in advance via '北岳云游' or, for foreign visitors, Trip.com.",
      "From 2 October 2026 the daily quota is split: 2,000 online (including 100 for Hong Kong/Macau/Taiwan and foreign visitors) and 475 on-site for eligible groups. Foreign visitors should book online via Trip.com.",
      "Not everyone should climb: visitors over 70, over 100 kg, with vertigo or heart conditions are advised against it, and children under 6 are not allowed.",
      "Beware of touts selling 'direct' rides at inflated prices — use the official visitor-centre shuttle.",
      "Show the driver the Chinese names: 恒山游客中心 (visitor centre) and 悬空寺 (Hanging Temple).",
    ],
    attraction_slug: "hanging-temple",
    notes: [],
    faq: [
      {
        question: "Can I reach the Hanging Temple by public transport from Datong?",
        answer:
          "Yes, in two legs: a Datong–Hunyuan coach (about 1.5–2 hours), then a short taxi to the Hengshan Visitor Centre, then the official 20 CNY shuttle to the temple. Bus times and fares are not confirmed against an official timetable, so confirm them before you set out.",
      },
      {
        question: "Why can't a taxi take me straight to the temple gate?",
        answer:
          "Private cars cannot reach the gate. Every visitor transfers at the Hengshan Visitor Centre (恒山游客中心) to the scenic shuttle (20 CNY same-day pass), which covers the last 10–15 minutes to the temple.",
      },
      {
        question: "Do I need to book the climbing ticket in advance?",
        answer:
          "Yes. Climbing is limited to 2,475 tickets per day, and foreign visitors should book online via Trip.com (or the WeChat account '北岳云游'). Entry-only (15 CNY) is separate from the 100 CNY climbing ticket.",
      },
      {
        question: "Can I combine the Hanging Temple with the Yingxian Wooden Pagoda in one day?",
        answer:
          "It is possible but tight. The Hanging Temple is in Hunyuan County and the pagoda is in Ying County, in different directions from Datong. A private car or chartered tour is the most practical way to combine them; by public transport, give each a separate day.",
      },
    ],
    sources: [HENGSHAN_TRANSPORT, HENGSHAN_CLIMBING, HUNYUAN_GOV_NEW_RULE, SXGOV_CLIMBING, TRIP_HUNYUAN],
    last_verified: VERIFIED_AT_V5,
    verification_status: "pending",
  },
];
