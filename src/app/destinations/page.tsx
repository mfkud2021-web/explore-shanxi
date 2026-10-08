import type { Metadata } from "next";
import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/destination/DestinationCard";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Destinations in Shanxi",
  description:
    "Explore Shanxi's main travel destinations: Datong, Taiyuan, Pingyao, Wutai Mountain and Linfen, with practical planning information.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Destinations
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Five places to start a Shanxi trip, from the Yungang Grottoes in the north to
          the temples of southern Shanxi.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <DestinationCard key={d.slug} destination={d} />
        ))}
      </div>
    </div>
  );
}
