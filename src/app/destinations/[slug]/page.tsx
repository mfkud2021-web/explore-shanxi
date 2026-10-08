import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDestinationBySlug,
  getDestinationSlugs,
  getAttractionsBySlugs,
} from "@/lib/data-access";
import { getRegion } from "@/data/regions";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbList, touristDestination } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { SourceBlock } from "@/components/ui/SourceBlock";
import { formatDate, formatVerified } from "@/lib/format";

export function generateStaticParams() {
  return getDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestinationBySlug(slug);
  if (!d) return {};
  return buildMetadata({
    title: `${d.name_en} Travel Guide`,
    description: d.summary,
    path: `/destinations/${d.slug}`,
  });
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const region = getRegion(destination.prefecture);
  const attractions = getAttractionsBySlugs(destination.major_attractions);

  return (
    <>
      <JsonLd data={touristDestination(destination)} />
      <JsonLd
        data={breadcrumbList([
          { name: "Destinations", path: "/destinations" },
          { name: destination.name_en, path: `/destinations/${destination.slug}` },
        ])}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Breadcrumb
          items={[
            { name: "Destinations", path: "/destinations" },
            { name: destination.name_en, path: `/destinations/${destination.slug}` },
          ]}
        />

        <header className="mt-6">
          <div className="flex items-center gap-3">
            <VerificationBadge status={destination.verification_status} />
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {destination.name_en}{" "}
            <span lang="zh" className="text-2xl font-normal text-subtle sm:text-3xl">
              {destination.name_zh}
            </span>
          </h1>
          <p className="mt-3 text-lg text-muted">{destination.tagline}</p>
        </header>

        {destination.quick_answer ? (
          <section className="mt-10 rounded-xl border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Quick answer
            </h2>
            <p className="mt-2 font-medium text-foreground">
              {destination.quick_answer.question}
            </p>
            <p className="mt-2 text-muted">{destination.quick_answer.answer}</p>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold">Overview</h2>
          <p className="mt-3 leading-relaxed text-foreground">{destination.summary}</p>
        </section>

        {destination.key_facts.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-serif text-2xl font-semibold">Key facts</h2>
            <dl className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface">
              {destination.key_facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-4 px-5 py-3.5"
                >
                  <dt className="text-muted">{f.label}</dt>
                  <dd className="text-right font-medium">
                    {f.value}
                    {!f.verified ? (
                      <span className="ml-2 text-xs italic text-pending">unverified</span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold">Plan your visit</h2>
          <dl className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface">
            <div className="flex items-baseline justify-between gap-4 px-5 py-4">
              <dt className="text-muted">Recommended stay</dt>
              <dd className="font-medium">{formatVerified(destination.recommended_stay)}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 px-5 py-4">
              <dt className="text-muted">Prefecture</dt>
              <dd className="font-medium">{region ? `${region.name_en} (${region.name_zh})` : destination.prefecture}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 px-5 py-4">
              <dt className="text-muted">Transport</dt>
              <dd className="font-medium">{formatVerified(destination.transport_hint)}</dd>
            </div>
          </dl>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold">Major attractions</h2>
          {attractions.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {attractions.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/attractions/${a.slug}`}
                    className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent"
                  >
                    <span>
                      <span className="font-medium text-foreground">{a.name_en}</span>{" "}
                      <span lang="zh" className="text-subtle">
                        {a.name_zh}
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
            <p className="mt-3 text-muted">Attraction guides coming soon.</p>
          )}
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold">Sources &amp; verification</h2>
          <div className="mt-4 rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted">Last verified</span>
              <span className="font-medium">{formatDate(destination.last_verified)}</span>
            </div>
            <div className="mt-4">
              <SourceBlock sources={destination.sources} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
