import type { EssentialGuide, Source } from "@/types";

const VERIFIED_AT = "2026-10-07";

const NIA: Source = {
  source_name: "National Immigration Administration (China)",
  source_url: "https://en.nia.gov.cn",
  source_checked_at: VERIFIED_AT,
  source_level: 1,
};

const TRIPCOM: Source = {
  source_name: "Trip.com (train & attraction booking)",
  source_url: "https://www.trip.com",
  source_checked_at: VERIFIED_AT,
  source_level: 2,
};

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

const TRAVEL_CHINA: Source = {
  source_name: "Travel China Guide — official tourism resources",
  source_url: "https://www.travelchina.org.cn",
  source_checked_at: VERIFIED_AT,
  source_level: 1,
};

const SHANGHAI_GOV: Source = {
  source_name: "Shanghai Municipal Government — banking & payments guide",
  source_url: "https://english.shanghai.gov.cn",
  source_checked_at: VERIFIED_AT,
  source_level: 1,
};

export const travelEssentials: EssentialGuide[] = [
  {
    slug: "tickets-and-reservations",
    title: "Tickets & Reservations",
    description:
      "How tickets and reservations work for Shanxi attractions, and what foreign visitors need to know.",
    sections: [
      {
        heading: "Most major sites now use real-name online reservations",
        body:
          "Many of Shanxi's headline attractions require or strongly recommend advance real-name reservation through their official WeChat mini-program. Yungang Grottoes stopped on-site ticket sales entirely on Jan 1, 2025; Wutai Mountain, Jinci Temple, the Shanxi Museum and Pingyao's combo ticket all use reservation systems. Always assume you need to book before turning up.",
      },
      {
        heading: "Booking as a foreign visitor",
        body:
          "The official reservation channels are Chinese-language WeChat mini-programs that typically expect a Chinese ID number and mobile number. Foreign visitors usually book through English-language platforms such as Trip.com or Ctrip instead, or ask their hotel to assist. This is the most reliable workaround.",
      },
      {
        heading: "What the reservation asks for",
        body:
          "Real-name booking normally requires a name, an ID or passport number, and an arrival time slot. A passport is accepted as a valid ID at some sites (Pingyao explicitly accepts passports), but not every online system supports passports consistently — confirm the passport option before you rely on it.",
      },
      {
        heading: "Ticket prices at a glance",
        body:
          "Verified adult prices (see each attraction page for the source and season details): Yungang Grottoes 120 CNY peak / 100 off-season; Hanging Temple 115 CNY combined; Jinci Temple 80 / 65; Shanxi Museum free (reservation required); Pingyao 125 CNY combo ticket; Wutai Mountain 135 / 118 entry.",
      },
      {
        heading: "Verify shortly before you travel",
        body:
          "Prices, opening hours and booking rules change, and peak-season or holiday policies differ. Check the official channel or a recent travel-platform listing a few days before your visit.",
      },
    ],
    related: [
      { label: "Passport Guide", href: "/travel-essentials/passport-guide" },
      { label: "Train & Transport", href: "/travel-essentials/train-and-transport" },
      { label: "Tickets index", href: "/tickets" },
    ],
    sources: [TRIPCOM, CTRIP_TRAINS],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "passport-guide",
    title: "Passport Guide",
    description:
      "Using a foreign passport to buy tickets, book accommodation and enter attractions in Shanxi.",
    sections: [
      {
        heading: "Carry your passport everywhere",
        body:
          "Your passport is the standard identity document for foreigners in China. You will need it for hotel check-in, train tickets, attraction entry and any registration or police matter. Carry the physical passport, not a photo, for anything official.",
      },
      {
        heading: "Passport as a ticket ID",
        body:
          "Real-name ticket systems accept passports as a valid ID at many Shanxi sites (Pingyao's ticketing explicitly lists passports). Some online reservation mini-programs are documented for Chinese ID cards only; where that is the case, book through a travel platform or confirm the passport option first.",
      },
      {
        heading: "Hotel registration",
        body:
          "Hotels must register foreign guests with the local police using your passport. Some smaller guesthouses are not licensed to host foreigners, so confirm this when booking — especially in Pingyao's old town, where courtyard guesthouses vary.",
      },
      {
        heading: "Visas and entry",
        body:
          "Many nationalities can use China's 240-hour (10-day) visa-free transit if transiting onward to a third country; some can enter visa-free directly. Entry rules change frequently — always confirm your specific situation with the National Immigration Administration or your local Chinese embassy before booking flights.",
      },
    ],
    related: [
      { label: "Tickets & Reservations", href: "/travel-essentials/tickets-and-reservations" },
      { label: "Train & Transport", href: "/travel-essentials/train-and-transport" },
      { label: "Where to Stay", href: "/travel-essentials/where-to-stay" },
    ],
    sources: [NIA, TRIPCOM],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "train-and-transport",
    title: "Train & Transport",
    description:
      "Getting around Shanxi by high-speed rail, bus and taxi, and how to book travel as a foreigner.",
    sections: [
      {
        heading: "High-speed rail is the backbone",
        body:
          "Shanxi's main cities are linked by high-speed rail: Beijing→Datong ≈2h, Datong→Taiyuan ≈1.5–2h, Taiyuan→Pingyao ≈30–40 min, and Pingyao→Xi'an ≈2.5–3h. A classic route is Beijing → Datong → Taiyuan → Pingyao → Xi'an.",
      },
      {
        heading: "Know the right stations",
        body:
          "Trains run Beijing North/Qinghe → Datong South → Taiyuan South → Pingyao Gucheng → Xi'an North. When going to Pingyao, buy a ticket to 'Pingyao Gucheng' (平遥古城站), not 'Pingyao' (平遥站) — the high-speed station is about 10 minutes by taxi from the old town.",
      },
      {
        heading: "Booking as a foreigner",
        body:
          "Trip.com is the easiest option: English interface, international cards, e-tickets, and no paper voucher exchange. The official 12306 app also accepts passports but payment usually requires Alipay, WeChat Pay or a Chinese bank card. Tickets generally open about 15 days before departure and sell out around holidays.",
      },
      {
        heading: "At the station",
        body:
          "Use the staffed/manual ticket channel with your passport — automated gates may not open for foreign passports. Arrive 30–60 minutes early and bring the same passport you booked with.",
      },
      {
        heading: "Beyond the railway",
        body:
          "For outlying sites such as the Hanging Temple and Wutai Mountain, use long-distance buses, taxis, ride-hailing (DiDi) or a day tour. Private cars are restricted in Wutai Mountain's core area during peak season.",
      },
    ],
    related: [
      { label: "Passport Guide", href: "/travel-essentials/passport-guide" },
      { label: "Payments in China", href: "/travel-essentials/payments-in-china" },
      { label: "Transport routes", href: "/transport" },
    ],
    sources: [RAIL_12306, TRIPCOM, CTRIP_TRAINS],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "payments-in-china",
    title: "Payments in China",
    description:
      "Using Alipay, WeChat Pay and other payment methods in China as a foreign visitor.",
    sections: [
      {
        heading: "Set up Alipay and WeChat Pay before you go",
        body:
          "Both apps let you link an international Visa, Mastercard, American Express or other card with no Chinese bank account needed. Register with a foreign phone number (or email), then verify your identity with your passport. Set this up before arriving if possible.",
      },
      {
        heading: "Fees and limits",
        body:
          "Transactions up to RMB 200 are usually fee-free; amounts over RMB 200 typically carry about a 3% service fee. After passport verification, linked international cards generally allow up to roughly $5,000 per transaction and $50,000 per year.",
      },
      {
        heading: "Carry some cash as backup",
        body:
          "Under current rules physical merchants are required to accept RMB cash, so keep a small amount as a fallback. You can withdraw RMB from ATMs with an international card or exchange currency at banks and airport counters.",
      },
      {
        heading: "Other options",
        body:
          "Alternatives include the e-CNY digital-yuan wallet, the UnionPay Tour Card (prepaid), and overseas e-wallets such as AlipayHK or WeChat Pay HK that work via the Alipay+ QR network.",
      },
      {
        heading: "Everyday spending",
        body:
          "Most shops, restaurants and attractions take Alipay or WeChat Pay scan-to-pay, but many small merchants do not accept foreign cards directly — mobile payment is the default for daily spending.",
      },
    ],
    related: [
      { label: "Internet & Apps", href: "/travel-essentials/internet-and-apps" },
      { label: "First Time in Shanxi", href: "/travel-essentials/first-time-in-shanxi" },
    ],
    sources: [TRAVEL_CHINA, SHANGHAI_GOV],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "internet-and-apps",
    title: "Internet & Apps",
    description:
      "Staying connected and the essential apps for an independent trip in Shanxi.",
    sections: [
      {
        heading: "Google and many apps are blocked",
        body:
          "On local networks, Google (Search, Maps, Gmail), WhatsApp, Instagram, Facebook, X, YouTube and many news sites are blocked by the Great Firewall.",
      },
      {
        heading: "Easiest fix: a travel eSIM",
        body:
          "International travel eSIMs (from providers such as Trip.com, Holafly, Nomad or Airalo) route data through Hong Kong or Singapore, so many blocked apps work without installing a separate VPN. Buy and install the eSIM before you enter China, then activate data roaming on arrival.",
      },
      {
        heading: "Or use a VPN (installed in advance)",
        body:
          "If you prefer a VPN, download and pay for it before you arrive, since app stores and VPN websites are blocked in China. Reliability varies widely; Astrill is the most commonly cited dependable option, while several well-known VPNs do not work reliably.",
      },
      {
        heading: "Local SIM vs eSIM",
        body:
          "A local SIM from China Mobile, China Unicom or China Telecom requires passport real-name registration, but it still sits behind the firewall, so blocked apps will not work without a VPN.",
      },
      {
        heading: "Chinese apps to know",
        body:
          "Useful local alternatives: Amap or Baidu Maps for navigation, DiDi for ride-hailing, WeChat for messaging and payments, Alipay for payments, and a translation app. WeChat is effectively essential because most attraction reservations run through it.",
      },
    ],
    related: [
      { label: "Payments in China", href: "/travel-essentials/payments-in-china" },
      { label: "Passport Guide", href: "/travel-essentials/passport-guide" },
    ],
    sources: [TRIPCOM],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "where-to-stay",
    title: "Where to Stay",
    description:
      "Choosing where to stay in Shanxi's main destinations, from historic guesthouses to city hotels.",
    sections: [
      {
        heading: "Where to base yourself",
        body:
          "Datong for the Yungang Grottoes and Hanging Temple; Taiyuan as the capital and main transport hub; Pingyao inside or near the old town; Wutai Mountain in Taihuai town; and Linfen for southern Shanxi.",
      },
      {
        heading: "Pingyao's historic guesthouses",
        body:
          "Inside the walled city, converted Ming/Qing courtyard houses are the signature stay and put you within walking distance of the attractions. Choose one that is licensed to host foreign guests.",
      },
      {
        heading: "Foreigner registration",
        body:
          "All accommodation must register your passport with the local police. If a small guesthouse cannot register foreigners, you will be turned away, so confirm before booking.",
      },
      {
        heading: "Practical tips",
        body:
          "Book well ahead for Chinese public holidays and summer, when rooms and train tickets sell out. Check how close the hotel is to the high-speed station or the sights you plan to visit.",
      },
    ],
    related: [
      { label: "Train & Transport", href: "/travel-essentials/train-and-transport" },
      { label: "First Time in Shanxi", href: "/travel-essentials/first-time-in-shanxi" },
      { label: "Destinations", href: "/destinations" },
    ],
    sources: [TRIPCOM],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
  {
    slug: "first-time-in-shanxi",
    title: "First Time in Shanxi",
    description:
      "A practical introduction for first-time visitors planning an independent trip to Shanxi.",
    sections: [
      {
        heading: "A classic route",
        body:
          "A natural first trip follows the high-speed rail corridor: Beijing → Datong (Yungang Grottoes, Hanging Temple) → Taiyuan (Jinci Temple, Shanxi Museum) → Pingyao (walled city) → Xi'an. For southern Shanxi's temples and the Black Myth: Wukong sites (Xiaoxitian, Guangsheng), stop at Linfen on the way south.",
      },
      {
        heading: "How long to allow",
        body:
          "A typical first visit is 5–7 days: about 2 days in Datong, 1–2 in Taiyuan, 1–2 in Pingyao, plus 2–3 days if you add Wutai Mountain or southern Shanxi (Linfen).",
      },
      {
        heading: "When to go",
        body:
          "Spring (April–May) and autumn (September–October) have the mildest weather. Avoid the peak Chinese holidays — Golden Week (early October) and Spring Festival — when sites are crowded and tickets sell out early.",
      },
      {
        heading: "What to prepare",
        body:
          "Before you go: set up Alipay and WeChat Pay with an international card, install a travel eSIM or VPN, book trains about 15 days ahead, and confirm your visa or visa-free-transit status. Carry your passport and some RMB cash.",
      },
      {
        heading: "Keep plans flexible",
        body:
          "Reservation rules, ticket prices and opening hours vary by site and change over time. Treat this guide as a starting point and verify the specifics for each site shortly before you travel.",
      },
    ],
    related: [
      { label: "Tickets & Reservations", href: "/travel-essentials/tickets-and-reservations" },
      { label: "Passport Guide", href: "/travel-essentials/passport-guide" },
      { label: "Trip planner", href: "/trip-planner" },
    ],
    sources: [NIA, RAIL_12306, TRIPCOM],
    last_verified: VERIFIED_AT,
    verification_status: "verified",
  },
];
