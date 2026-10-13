import type { BlackMythLocation, Source } from "@/types";

const VERIFIED_AT = "2026-10-07";

// Shanxi's official tourism authority published the 27 Shanxi sites that appear
// as locations in Black Myth: Wukong. This is the authoritative Level 1 source.
const OFFICIAL_LIST: Source = {
  source_name:
    "Shanxi Provincial Cultural Relics Bureau — 'Follow Wukong through Shanxi' location list",
  source_url: "http://wwj.shanxi.gov.cn/gzdt/szdt/202408/t20240821_9637797.shtml",
  source_checked_at: VERIFIED_AT,
  source_level: 1,
};

const MEDIA_REPORT: Source = {
  source_name: "People's Daily client / Shanxi Evening News — report on the 27 locations",
  source_url: "https://www.peopleapp.com/column/30046461572-500005723821",
  source_checked_at: VERIFIED_AT,
  source_level: 3,
};

// Sources for the ticket, transport and coordinate facts below.
const WIKIDATA: Source = {
  source_name: "Wikidata — geographic coordinates",
  source_url: "https://www.wikidata.org",
  source_checked_at: VERIFIED_AT,
  source_level: 3,
};

const BENDIBAO: Source = {
  source_name: "太原本地宝 (ty.bendibao.com) — ticket & opening info",
  source_url: "http://ty.bendibao.com",
  source_checked_at: VERIFIED_AT,
  source_level: 3,
};

const TRIPCOM: Source = {
  source_name: "Trip.com — ticket & transport info",
  source_url: "https://www.trip.com",
  source_checked_at: VERIFIED_AT,
  source_level: 2,
};

const JINCHENG_GOV: Source = {
  source_name: "Jincheng Municipal Government (jcgov.gov.cn)",
  source_url: "https://jcgov.gov.cn",
  source_checked_at: VERIFIED_AT,
  source_level: 1,
};

export const blackMythLocations: BlackMythLocation[] = [
  {
    slug: "yungang-grottoes",
    game_location: "Cave-temple scenes (Chapter 3) — 'two Buddhas seated together' motif",
    real_location_en: "Yungang Grottoes",
    real_location_zh: "云冈石窟",
    city: "datong",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "120 CNY peak / 100 CNY off-season (adult)",
    how_to_get_there: "From Datong: city bus 3 or tourist bus 603 (~40–50 min); taxi ~30–40 min.",
    related_attraction_slug: "yungang-grottoes",
    image: null,
    latitude: 40.1097,
    longitude: 113.1222,
    notes:
      "The game's Buddhist cave-temple scenes draw on Yungang's 5th-century Northern Wei carvings, including the famous 'two Buddhas seated together' (二佛并坐) motif.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT],
    last_verified: VERIFIED_AT,
  },
  {
    slug: "hanging-temple",
    game_location: "Cliffside temple scenes (Chapter 2)",
    real_location_en: "Hanging Temple (Xuankong Temple)",
    real_location_zh: "悬空寺",
    city: "datong",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "115 CNY (entry + climbing)",
    how_to_get_there: "From Datong: bus to Hunyuan County (~1.5h), then a short taxi; or taxi/day tour (~1h 20m).",
    related_attraction_slug: "hanging-temple",
    image: null,
    latitude: 39.72,
    longitude: 113.68,
    notes:
      "The game's precarious cliff-hanging wooden structures are modeled on the Hanging Temple, built into a cliff face in Hunyuan County.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT],
    last_verified: VERIFIED_AT,
  },
  {
    slug: "foguang-temple",
    game_location: "East Hall sutra pillar & Tang-dynasty architecture",
    real_location_en: "Foguang Temple",
    real_location_zh: "佛光寺",
    city: "xinzhou",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "40 CNY (full-price adult); 20 CNY (half-price)",
    how_to_get_there:
      "In Wutai County (五台县), outside the Wutai Mountain core area. From Wutai County, take the Wutai–Fanshi bus to Yanjiazhai village (阎家寨) then walk ~2 km, or take a taxi/chartered car. Closed Mondays.",
    related_attraction_slug: null,
    image: {
      url: "/images/foguang-temple.jpg",
      alt: "The Tang-dynasty East Hall of Foguang Temple in Wutai County, Xinzhou",
      credit: "Angus Cepka",
      source: "https://commons.wikimedia.org/wiki/File:Foguang_Temple_9.JPG",
      license: "CC BY-SA 3.0",
    },
    latitude: 38.8692,
    longitude: 113.3878,
    notes:
      "Near Wutai Mountain. Its East Hall (东大殿) is a Tang-dynasty timber hall (dated 857) — one of China's most important surviving wooden buildings; its sutra pillar and architecture appear in the game.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT, WIKIDATA, BENDIBAO],
    last_verified: VERIFIED_AT,
  },
  {
    slug: "nanchan-temple",
    game_location: "Tang-dynasty timber architecture",
    real_location_en: "Nanchan Temple",
    real_location_zh: "南禅寺",
    city: "xinzhou",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "20 CNY (full-price adult); 10 CNY (half-price)",
    how_to_get_there:
      "In Wutai County (五台县), outside the Wutai Mountain core area. From Wutai County bus station, take a local bus to Guojiazhai village (郭家寨) then walk ~500 m, or take a taxi/chartered car. Closed Mondays.",
    related_attraction_slug: null,
    image: {
      url: "/images/nanchan-temple.jpg",
      alt: "The Tang-dynasty main hall of Nanchan Temple near Wutai Mountain, Xinzhou",
      credit: "Zeus1234",
      source: "https://commons.wikimedia.org/wiki/File:Nanchan_Temple_1.JPG",
      license: "CC BY-SA 3.0",
    },
    latitude: 38.7013,
    longitude: 113.1138,
    notes:
      "In Wutai County; China's oldest surviving timber-framed building (Tang dynasty, 8th century), referenced for the game's Tang-period architecture.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT, WIKIDATA, BENDIBAO],
    last_verified: VERIFIED_AT,
  },
  {
    slug: "shuanglin-temple",
    game_location: "Painted clay sculpture halls (彩塑)",
    real_location_en: "Shuanglin Temple",
    real_location_zh: "双林寺",
    city: "jinzhong",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "≈35 CNY (separate from the Pingyao 125 CNY combo ticket)",
    how_to_get_there:
      "About 6 km from Pingyao Ancient City. Take bus 108 (north line) or a short taxi from Pingyao.",
    related_attraction_slug: null,
    image: {
      url: "/images/shuanglin-temple.jpg",
      alt: "The Mahavira Hall of Shuanglin Temple near Pingyao",
      credit: "Zhangzhugang",
      source: "https://commons.wikimedia.org/wiki/File:Pingyao_Shuanglin_Si_2013.08.26_09-17-59.jpg",
      license: "CC BY-SA 3.0",
    },
    latitude: 37.1708,
    longitude: 112.125,
    notes:
      "Near Pingyao. Famous for more than 2,000 Yuan- and Ming-dynasty painted clay sculptures, often called the 'treasure house of oriental painted sculpture'; the game's statue halls draw on them.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT, WIKIDATA, TRIPCOM],
    last_verified: VERIFIED_AT,
  },
  {
    slug: "xiaoxitian",
    game_location: "'Small Western Paradise' hanging-sculpture hall",
    real_location_en: "Xiaoxitian (Qianfo Temple)",
    real_location_zh: "隰县小西天",
    city: "linfen",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "35 CNY (full-price adult); 18 CNY (half-price)",
    how_to_get_there:
      "In Xi County (隰县), Linfen. Take a long-distance bus from Linfen (城西客运站) to Xi County (~2.5–3 h), then a short taxi (~10 min) to the temple on Fenghuang Mountain; or join a Linfen–Xiaoxitian day-tour bus.",
    related_attraction_slug: "xiaoxitian-temple",
    image: null,
    latitude: 36.7016,
    longitude: 110.9267,
    notes:
      "In Xi County (Linfen), founded 1629; its main hall holds nearly 2,000 hanging sculptures (悬塑). The game's 'Small Western Paradise' chapter shares its name with this site.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT, WIKIDATA, BENDIBAO],
    last_verified: VERIFIED_AT,
  },
  {
    slug: "guangsheng-temple",
    game_location: "Glazed-tile pagoda (飞虹塔) scenes",
    real_location_en: "Guangsheng Temple",
    real_location_zh: "广胜寺",
    city: "linfen",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "≈70 CNY (sources differ 55–70)",
    how_to_get_there:
      "In Hongdong County (洪洞县), Linfen. About 1–1.5h from central Linfen by bus or taxi; confirm local transport.",
    related_attraction_slug: "guangsheng-temple",
    image: null,
    latitude: null,
    longitude: null,
    notes:
      "In Hongdong County, Linfen. Its glazed-tile Flying Rainbow Tower (飞虹塔) — a 13-storey, 47-metre pagoda — is the temple's landmark and appears among the game's pagoda references.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT],
    last_verified: VERIFIED_AT,
  },
  {
    slug: "yuhuang-temple",
    game_location: "Twenty-eight lunar mansions statues ('亢金龙')",
    real_location_en: "Yuhuang Temple",
    real_location_zh: "玉皇庙",
    city: "jincheng",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "Free — real-name reservation required",
    how_to_get_there:
      "In Fucheng Village (府城村), Zezhou County, Jincheng. About 20–30 minutes by car from central Jincheng; bus 19 serves Fucheng village.",
    related_attraction_slug: null,
    image: {
      url: "/images/yuhuang-temple.jpg",
      alt: "The Ming-dynasty first gate of Yuhuang Temple in Fucheng Village, Jincheng",
      credit: "Windmemories",
      source: "https://commons.wikimedia.org/wiki/File:20250906_Yuhuang_Temple_04.jpg",
      license: "CC BY-SA 4.0",
    },
    latitude: 35.5464,
    longitude: 112.9367,
    notes:
      "In Zezhou, Jincheng. Its Yuan-dynasty twenty-eight lunar mansions statues (二十八星宿, 23 survive) inspired the game's 'Kangjinlong' (亢金龙) and related characters.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT, WIKIDATA, JINCHENG_GOV],
    last_verified: VERIFIED_AT,
  },
  {
    slug: "yingxian-wooden-pagoda",
    game_location: "Wooden pagoda scenes",
    real_location_en: "Yingxian Wooden Pagoda (Sakyamuni Pagoda)",
    real_location_zh: "应县木塔",
    city: "shuozhou",
    can_visit: true,
    connection_status: "verified",
    ticket_info: "50 CNY (full-price adult); 25 CNY (half-price)",
    how_to_get_there:
      "In Ying County (应县), Shuozhou. High-speed rail from Datong South to Yingxian West (~20–30 min), then bus 3 (~5 CNY) or a short taxi (~10 min) to the pagoda.",
    related_attraction_slug: "yingxian-wooden-pagoda",
    image: null,
    latitude: 39.5653,
    longitude: 113.1819,
    notes:
      "In Ying County (Shuozhou). The Liao-dynasty pagoda (dated 1056) is the world's tallest and oldest surviving wooden pagoda; the game's pagoda scenes reference it.",
    sources: [OFFICIAL_LIST, MEDIA_REPORT, WIKIDATA, BENDIBAO],
    last_verified: VERIFIED_AT,
  },
];
