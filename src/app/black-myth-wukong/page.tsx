import type { Metadata } from "next";
import Link from "next/link";
import { getBlackMythLocations, getAttractionBySlug } from "@/lib/data-access";
import { buildMetadata } from "@/lib/seo";
import { faqPage } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import { BlackMythCard } from "@/components/black-myth/BlackMythCard";

export const metadata: Metadata = buildMetadata({
  title: "Black Myth: Wukong Locations in Shanxi",
  description:
    "Which Black Myth: Wukong locations in Shanxi can you actually visit? A verified guide to the game's real-world sites in Datong, Xinzhou, Taiyuan and Linfen.",
  path: "/black-myth-wukong",
});

const BLACK_MYTH_FAQS = [
  {
    question: "How many Black Myth: Wukong locations are in Shanxi?",
    answer:
      "Shanxi's provincial cultural relics authority has published an official list of 27 Shanxi sites featured in the game. This guide covers the subset we have verified in detail; each entry links to a full attraction page where one exists.",
  },
  {
    question: "Can I actually visit these sites?",
    answer:
      "Most can be visited. Each card below shows whether the site can be visited, how to get there, and current ticket information. Sites are spread across several counties, so check transport before planning a day around them.",
  },
  {
    question: "Which locations are easiest to reach on a standard Shanxi route?",
    answer:
      "The Yungang Grottoes and Hanging Temple are near Datong; Shuanglin Temple is next to Pingyao; and Xiaoxitian and Guangsheng Temple are in the Linfen area. Others, such as Foguang and Nanchan temples (Xinzhou/Wutai county) and Yuhuang Temple (Jincheng), need a dedicated detour.",
  },
];

export default function BlackMythPage() {
  const locations = getBlackMythLocations();
  const verifiedCount = locations.filter(
    (loc) => loc.connection_status === "verified",
  ).length;

  return (
    <>
      <JsonLd data={faqPage(BLACK_MYTH_FAQS)} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Black Myth: Wukong
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Black Myth: Wukong Locations in Shanxi
          </h1>
          <p className="mt-3 text-lg text-muted">
            Black Myth: Wukong drew many of its in-game locations from real places in
            China. Shanxi&apos;s official cultural relics authority has published a list
            of 27 Shanxi sites featured in the game. This guide maps the locations we
            have verified to the actual places you can visit, with each connection
            clearly marked.
          </p>
          <div className="mt-5 rounded-xl border border-border bg-surface p-5 text-sm text-muted">
            Game-location relationships are marked as{" "}
            <span className="font-medium text-verified">verified</span>,{" "}
            <span className="font-medium text-pending">unverified</span> or{" "}
            <span className="font-medium text-outdated">rumored</span>. We never assert a
            connection without a reliable source. This guide currently covers{" "}
            <span className="font-medium text-foreground">{locations.length}</span> of
            the 27 sites ({verifiedCount} verified).
          </div>
        </header>

        {locations.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {locations.map((loc) => {
              const related = loc.related_attraction_slug
                ? getAttractionBySlug(loc.related_attraction_slug)
                : null;
              return (
                <BlackMythCard
                  key={loc.slug}
                  location={loc}
                  image={related?.image ?? loc.image ?? null}
                />
              );
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-border bg-surface p-10 text-center">
            <p className="font-medium text-foreground">Locations pending verification</p>
            <p className="mt-2 text-sm text-muted">
              The verified list of Black Myth: Wukong locations in Shanxi is being
              compiled. Check back soon.
            </p>
          </div>
        )}

        <p className="mt-6 text-xs text-subtle">
          Visit durations are rough estimates (marked “≈”), not verified figures.
        </p>

        <div className="mt-12 max-w-3xl">
          <FaqSection faqs={BLACK_MYTH_FAQS} />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-accent-soft p-6">
          <h2 className="font-serif text-xl font-semibold">Plan your Shanxi trip</h2>
          <p className="mt-2 text-sm text-muted">
            Many of these sites lie on one route through Datong, Taiyuan, Pingyao and
            Linfen. Build an itinerary around the locations you want to visit.
          </p>
          <Link
            href="/trip-planner"
            className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent-hover"
          >
            Open the trip planner →
          </Link>
        </div>
      </div>
    </>
  );
}
