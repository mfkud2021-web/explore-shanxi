import type { Metadata } from "next";
import { getBlackMythLocations } from "@/lib/data-access";
import { buildMetadata } from "@/lib/seo";
import { BlackMythCard } from "@/components/black-myth/BlackMythCard";

export const metadata: Metadata = buildMetadata({
  title: "Black Myth: Wukong Locations in Shanxi",
  description:
    "Which Black Myth: Wukong locations in Shanxi can you actually visit? A verified guide to the game's real-world sites in Datong, Xinzhou, Taiyuan and Linfen.",
  path: "/black-myth-wukong",
});

export default function BlackMythPage() {
  const locations = getBlackMythLocations();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Black Myth: Wukong
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Black Myth: Wukong Locations in Shanxi
        </h1>
        <p className="mt-3 text-lg text-muted">
          Shanxi provided many of the real-world sites that inspired Black Myth:
          Wukong. This page maps game locations to the actual places you can visit,
          with the connection status of each clearly marked.
        </p>
        <div className="mt-5 rounded-xl border border-border bg-surface p-5 text-sm text-muted">
          Game-location relationships are marked as{" "}
          <span className="font-medium text-verified">verified</span>,{" "}
          <span className="font-medium text-pending">unverified</span> or{" "}
          <span className="font-medium text-outdated">rumored</span>. We never assert a
          connection without a reliable source.
        </div>
      </header>

      {locations.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {locations.map((loc) => (
            <BlackMythCard key={loc.slug} location={loc} />
          ))}
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
    </div>
  );
}
