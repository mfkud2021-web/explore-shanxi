import type { Metadata } from "next";
import Link from "next/link";
import { RoutePlanner } from "@/components/tools/RoutePlanner";
import { buildMetadata } from "@/lib/seo";
import { faqPage } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "Shanxi Trip Planner",
  description:
    "Plan a Shanxi route between Beijing, Datong, Taiyuan, Pingyao and Xi'an. Get a sample itinerary based on your days and interests.",
  path: "/trip-planner",
});

const SAMPLE_DAYS = [
  {
    day: "Day 1 — Arrive in Datong",
    text: "Take the high-speed rail from Beijing (about 2 hours, departing Beijing North or Qinghe) to Datong South. In the afternoon visit the Yungang Grottoes (allow 3–4 hours).",
  },
  {
    day: "Day 2 — Hanging Temple day trip",
    text: "Travel to the Hanging Temple in Hunyuan County (about 1 hour 20 minutes by car from Datong) and allow 1.5–3 hours on site. Return to Datong for the night.",
  },
  {
    day: "Day 3 — Datong to Taiyuan",
    text: "Take the high-speed rail from Datong South to Taiyuan South (about 1 hour 25 minutes to 2 hours). Spend the afternoon at Jinci Temple or the Shanxi Museum.",
  },
  {
    day: "Day 4 — Taiyuan to Pingyao",
    text: "Take the high-speed rail from Taiyuan South to Pingyao Gucheng (about 30–40 minutes). Explore Pingyao Ancient City; the 125 CNY combo ticket is valid for 3 days.",
  },
  {
    day: "Day 5 — Pingyao and depart",
    text: "Use the morning for any remaining sights in Pingyao, then continue south by high-speed rail toward Xi'an (about 2.5–3 hours) or return to Taiyuan.",
  },
];

const TRIP_PLANNER_FAQS = [
  {
    question: "Is a 5-day Beijing → Datong → Pingyao route realistic?",
    answer:
      "Yes. The cities line up north to south on the high-speed rail corridor, so there is no backtracking: Beijing → Datong → Taiyuan → Pingyao, with Xi'an as the natural southern exit. The sample itinerary above follows this route using verified rail legs.",
  },
  {
    question: "Should I start in Datong or Taiyuan?",
    answer:
      "Datong if you arrive from Beijing by high-speed rail (trains leave from Beijing North or Qinghe). Taiyuan is the main hub if you fly in — Taiyuan Wusu International Airport serves the province, and Taiyuan South connects the main cities.",
  },
  {
    question: "Can I add Linfen or Wutai Mountain?",
    answer:
      "Linfen sits on the Taiyuan–Xi'an line south of Pingyao, so it can be added as a stop. Wutai Mountain is a separate detour — its nearest high-speed rail station is Xinzhou West, then a bus of about 1.5–2 hours — so it needs extra days of its own.",
  },
];

export default function TripPlannerPage() {
  return (
    <>
      <JsonLd data={faqPage(TRIP_PLANNER_FAQS)} />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <header>
          <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Shanxi Trip Planner
          </h1>
          <p className="mt-3 text-lg text-muted">
            Build a sample route through Shanxi based on where you are starting and
            ending, and how long you have.
          </p>
        </header>

        <div className="mt-10">
          <RoutePlanner />
        </div>

        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold">Sample 5-day itinerary</h2>
          <p className="mt-3 leading-relaxed text-muted">
            A practical first-timer route using verified rail links between Beijing,
            Datong, Taiyuan and Pingyao. It runs north to south with no backtracking.
            Times and ticket rules below are drawn from the{" "}
            <Link
              href="/transport"
              className="text-accent underline underline-offset-2 hover:text-accent-hover"
            >
              transport guide
            </Link>{" "}
            and each attraction page.
          </p>
          <ol className="mt-6 space-y-4">
            {SAMPLE_DAYS.map((d) => (
              <li
                key={d.day}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <h3 className="font-medium text-foreground">{d.day}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-subtle">
            This is a starting point, not a fixed plan — major sights use real-name
            reservations, so confirm tickets and opening hours on each attraction page
            before you travel. The planner above gives a personalised version for your
            own start, end and interests.
          </p>
        </section>

        <div className="mt-12">
          <FaqSection faqs={TRIP_PLANNER_FAQS} />
        </div>
      </div>
    </>
  );
}
