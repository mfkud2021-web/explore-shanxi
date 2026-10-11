import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { attractions } from "@/data/attractions";
import { travelEssentials } from "@/data/travel-essentials";
import { DestinationCard } from "@/components/destination/DestinationCard";
import { RoutePlanner } from "@/components/tools/RoutePlanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { ImageCredit } from "@/components/ui/ImageCredit";
import { CATEGORY_LABELS } from "@/lib/format";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} — ${siteConfig.tagline}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

const heroImage = attractions.find((a) => a.slug === "yungang-grottoes")?.image;

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        }}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Shanxi · China
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Explore Shanxi, China
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Plan an independent trip through China&apos;s best-preserved ancient
                architecture — from the Yungang Grottoes to the temples of southern
                Shanxi.
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
              <p className="mt-6 max-w-xl text-sm text-subtle">
                Every price, schedule and route is marked verified or pending — we
                never invent travel data. Need local transport?{" "}
                <Link
                  href="/private-driver"
                  className="text-accent underline underline-offset-2 hover:text-accent-hover"
                >
                  Ask about a private driver
                </Link>
                .
              </p>
            </div>
            {heroImage ? (
              <figure className="hidden md:block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={heroImage.url}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2">
                  <ImageCredit
                    credit={heroImage.credit}
                    source={heroImage.source}
                    license={heroImage.license}
                  />
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Popular attractions
              </h2>
              <p className="mt-2 max-w-2xl text-muted">
                Shanxi&apos;s most significant ancient sites — cave temples, cliffside
                monasteries, a UNESCO walled city and the temples of southern Shanxi.
              </p>
            </div>
            <Link
              href="/attractions"
              className="hidden shrink-0 text-sm font-medium text-accent hover:text-accent-hover sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attractions.map((a) => (
              <article
                key={a.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-accent-soft">
                  <Image
                    src={a.image.url}
                    alt={a.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    {CATEGORY_LABELS[a.category] ?? a.category}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-semibold leading-snug">
                    <Link
                      href={`/attractions/${a.slug}`}
                      className="hover:text-accent"
                    >
                      {a.name_en}{" "}
                      <span lang="zh" className="text-sm font-normal text-subtle">
                        {a.name_zh}
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted">{a.short_description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
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

      <section className="border-b border-border bg-accent-soft">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight">
                Black Myth: Wukong in Shanxi
              </h2>
              <p className="mt-2 max-w-2xl text-muted">
                Shanxi provided many of the real-world sites behind the game. See
                which ones you can actually visit — each connection is marked
                verified, unverified or rumored.
              </p>
            </div>
            <Link
              href="/black-myth-wukong"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover"
            >
              Explore locations →
            </Link>
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
