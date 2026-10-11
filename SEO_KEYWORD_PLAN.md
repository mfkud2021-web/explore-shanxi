# SEO Keyword Plan — Explore Shanxi (V4.0)

Date: 2026-10-11

## Method

- Keywords come from real Google SERP results, official Shanxi tourism sources,
  and content already verified in this project.
- Search volume, keyword difficulty and ranking are **not** listed because they
  cannot be reliably measured here — inventing them would mislead. Use Google
  Search Console after launch for real impressions/clicks (see
  `SEO_MEASUREMENT_PLAN.md`).
- Intent is split into three types:
  - **Informational** — "what is X / can I visit X"
  - **Itinerary** — "how many days / how to plan a route"
  - **Transport** — "how to get from A to B"

## Keyword map

| # | Keyword cluster | Intent | Target page(s) | Primary user question | Source |
|---|---|---|---|---|---|
| 1 | Shanxi travel itinerary; 5-day Shanxi itinerary; Datong Pingyao route | Itinerary | `/trip-planner`, `/travel-essentials/first-time-in-shanxi` | How do I plan a 5-day route through Datong, Taiyuan and Pingyao without backtracking? | Trip.com/Tripadvisor itinerary posts; project transport data |
| 2 | Datong and Pingyao; things to do in Datong/Pingyao | Informational | `/destinations/datong`, `/destinations/pingyao` | What are the must-see sights in Datong and Pingyao, and how long for each? | Project destination data; UNESCO sources |
| 3 | Beijing to Datong travel; Beijing Datong high-speed rail | Transport | `/transport/beijing-to-datong` | Which station in Beijing, how long, and how to reach the Yungang Grottoes from Datong? | 12306; project `beijing-to-datong` route |
| 4 | Hanging Temple transport; how to get to Xuankong Temple | Transport | `/attractions/hanging-temple`, `/transport` | Is the Hanging Temple a day trip from Datong, and how do I get there? | Project attraction data; `byhs.net.cn` |
| 5 | Mount Wutai travel; how to visit Wutai Mountain | Transport/Itinerary | `/destinations/wutai-mountain`, `/attractions/wutai-mountain` | Which station is nearest, how long to allow, do private cars need a reservation? | Project attraction/destination data; `wts.sxxz.gov.cn` |
| 6 | Black Myth Wukong Shanxi locations; filming locations | Informational | `/black-myth-wukong` | Which in-game sites are real places in Shanxi and can I actually visit them? | `eshanxi.gov.cn` "Follow Wukong Tour Shanxi"; Shanxi Cultural Relics Bureau list |
| 7 | Xiaoxitian Temple; Xiaoxitian Black Myth | Informational/Transport | `/attractions/xiaoxitian-temple` | What is Xiaoxitian, is it worth the trip from Linfen, and how do I get there? | Project attraction data; official 27-site list |
| 8 | Private transport in Shanxi; Shanxi private driver | Transport | `/private-driver`, `/contact` | Can I arrange a local driver for multi-stop routes like Datong → Pingyao? | Project pages (information-only, no booking) |

## Content mapping & de-duplication

- **Do not** create separate pages for the same intent. Example: "Beijing to
  Datong" already maps to one route page — do not add a second article.
- Enhance existing pages rather than adding new ones:
  1. `trip-planner` → add a static "sample 5-day itinerary" prose section (theme 1).
  2. `transport` routes → add a short FAQ to each route page (theme 3, 4).
  3. Datong destination → add "Yungang + Hanging Temple in one day?" FAQ (theme 4).
  4. `black-myth-wukong` → add intro prose + FAQ (theme 6).
- Multi-stop journeys that have no single verified route (e.g. Datong → Pingyao)
  are described as "via Taiyuan" using the two verified legs, not as a fabricated
  direct route.

## Real user questions to answer (from SERP research)

- "Is a Beijing → Datong → Pingyao day-by-day route realistic in 5 days?"
- "Do I need to book Yungang Grottoes in advance and can I use a foreign passport?"
- "Can I do the Hanging Temple and Yungang Grottoes in one day?"
- "Is Xiaoxitian worth the long bus ride from Linfen?"
- "Which Black Myth Wukong locations can foreigners actually visit?"

## Sources (verified during research)

- Shanxi Culture & Tourism — "Follow Wukong Tour Shanxi" (official routes):
  http://www.eshanxi.gov.cn/travel/updates/202601/t20260121_10044085.shtml
- Shanxi Provincial Cultural Relics Bureau — 27 Shanxi Black Myth sites:
  http://wwj.shanxi.gov.cn/gzdt/szdt/202408/t20240821_9637797.shtml
- China Railway 12306 (official timetable): https://kyfw.12306.cn
- Hengshan Scenic Area (Hanging Temple): https://www.byhs.net.cn
- Wutai Mountain government: http://wts.sxxz.gov.cn/
- Trip.com / Trip Moments (traveler itineraries and day-tour structure only —
  used for intent, not for factual prices or schedules).

## Notes

- No hreflang is added (single-language site; inventing alternate-language URLs
  would be wrong).
- No ranking or index-time promises are made. Search performance data comes only
  from Google Search Console after verification.
