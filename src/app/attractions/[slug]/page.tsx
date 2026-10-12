import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAttractionBySlug,
  getAttractionSlugs,
  getAttractionsBySlugs,
} from "@/lib/data-access";
import { getRegion } from "@/data/regions";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbList, touristAttraction, faqPage } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { ImageCredit } from "@/components/ui/ImageCredit";
import { FaqSection } from "@/components/ui/FaqSection";
import { AttractionInfoCard } from "@/components/attraction/AttractionInfoCard";
import { VerifiedValue } from "@/components/ui/VerifiedValue";
import { CATEGORY_LABELS } from "@/lib/format";

export function generateStaticParams() {
  return getAttractionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getAttractionBySlug(slug);
  if (!a) return {};
  return buildMetadata({
    title: `${a.name_en} — Tickets, Reservations & How to Visit`,
    description: a.short_description,
    path: `/attractions/${a.slug}`,
  });
}

export default async function AttractionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attraction = getAttractionBySlug(slug);
  if (!attraction) notFound();

  const related = getAttractionsBySlugs(attraction.related_attractions);

  const region = getRegion(attraction.region);
  const locationText =
    region && region.name_en !== attraction.city
      ? `${attraction.city} · ${region.name_en}`
      : attraction.city;

  const [aspectW, aspectH] = (attraction.image.aspectRatio ?? "3/2")
    .split("/")
    .map((n) => Number(n));
  const isPortrait = !Number.isNaN(aspectH) && aspectH > aspectW;

  return (
    <>
      <JsonLd data={touristAttraction(attraction)} />
      <JsonLd
        data={breadcrumbList([
          { name: "Attractions", path: "/attractions" },
          { name: attraction.name_en, path: `/attractions/${attraction.slug}` },
        ])}
      />
      {attraction.faq.length > 0 ? <JsonLd data={faqPage(attraction.faq)} /> : null}

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <Breadcrumb
          items={[
            { name: "Attractions", path: "/attractions" },
            { name: attraction.name_en, path: `/attractions/${attraction.slug}` },
          ]}
        />

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {CATEGORY_LABELS[attraction.category] ?? attraction.category}
            </span>
            <VerificationBadge status={attraction.verification_status} />
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {attraction.name_en}{" "}
            <span lang="zh" className="text-2xl font-normal text-subtle sm:text-3xl">
              {attraction.name_zh}
            </span>
          </h1>
          <p className="mt-2 text-sm font-medium text-muted">{locationText}</p>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            {attraction.short_description}
          </p>
        </header>

        <figure className="mt-8">
          <div
            className={`relative w-full overflow-hidden rounded-xl border border-border ${
              isPortrait ? "mx-auto max-w-md" : ""
            }`}
            style={{ aspectRatio: `${aspectW} / ${aspectH}` }}
          >
            <Image
              src={attraction.image.url}
              alt={attraction.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2">
            <ImageCredit
              credit={attraction.image.credit}
              source={attraction.image.source}
              license={attraction.image.license}
            />
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <section>
              <h2 className="font-serif text-2xl font-semibold">Overview</h2>
              <p className="mt-3 leading-relaxed text-foreground">
                {attraction.description}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold">How to get there</h2>
              <p className="mt-3 leading-relaxed text-foreground">
                <VerifiedValue value={attraction.transportation} />
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold">Best time to visit</h2>
              <p className="mt-3 leading-relaxed text-foreground">
                <VerifiedValue value={attraction.best_time_to_visit} />
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold">
                Notes for foreign visitors
              </h2>
              <p className="mt-3 leading-relaxed text-foreground">
                <VerifiedValue value={attraction.foreign_visitor_notes} />
              </p>
            </section>

            {attraction.black_myth_related ? (
              <section className="rounded-xl border border-border bg-surface p-6">
                <h2 className="font-serif text-xl font-semibold">
                  Black Myth: Wukong
                </h2>
                <p className="mt-2 leading-relaxed text-foreground">
                  <VerifiedValue value={attraction.black_myth_notes} />
                </p>
                <Link
                  href="/black-myth-wukong"
                  className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent-hover"
                >
                  See all Black Myth locations →
                </Link>
              </section>
            ) : null}

            <section>
              <h2 className="font-serif text-2xl font-semibold">Related attractions</h2>
              {related.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/attractions/${r.slug}`}
                        className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-accent"
                      >
                        <span>
                          {r.name_en}{" "}
                          <span lang="zh" className="text-subtle">
                            {r.name_zh}
                          </span>
                        </span>
                        <span className="text-accent" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-muted">No related attractions listed.</p>
              )}
            </section>

            <FaqSection faqs={attraction.faq} />

            <div className="rounded-xl border border-border bg-accent-soft p-6">
              <h2 className="font-serif text-xl font-semibold">
                Plan your Shanxi route
              </h2>
              <p className="mt-2 text-sm text-muted">
                Build a sample itinerary through Shanxi&apos;s ancient sites.
              </p>
              <Link
                href="/trip-planner"
                className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent-hover"
              >
                Open the trip planner →
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-20">
              <AttractionInfoCard attraction={attraction} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
