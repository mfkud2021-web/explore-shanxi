import Link from "next/link";
import { destinations } from "@/data/destinations";
import { travelEssentials } from "@/data/travel-essentials";
import { DestinationCard } from "@/components/destination/DestinationCard";
import { RoutePlanner } from "@/components/tools/RoutePlanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
        }}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Shanxi · China
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Explore Shanxi, China
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Plan an independent trip with practical, verified local information.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/trip-planner"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover"
            >
              Plan My Trip
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Plan your route
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Tell us where you are starting and ending, and how long you have, to get a
            sample Shanxi itinerary.
          </p>
          <div className="mt-8">
            <RoutePlanner />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Destinations
              </h2>
              <p className="mt-2 max-w-2xl text-muted">
                Five places to start a Shanxi trip, from the Yungang Grottoes in the
                north to the temples of southern Shanxi.
              </p>
            </div>
            <Link
              href="/destinations"
              className="hidden shrink-0 text-sm font-medium text-accent hover:text-accent-hover sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Travel essentials
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Practical guides to tickets, passports, transport, payments and more.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {travelEssentials.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`/travel-essentials/${e.slug}`}
                  className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
                >
                  <span className="font-medium text-foreground">{e.title}</span>
                  <span className="mt-1.5 text-sm text-muted">{e.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
