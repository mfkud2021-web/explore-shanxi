import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTransportRouteBySlug, getTransportRouteSlugs } from "@/lib/data-access";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { VerifiedValue } from "@/components/ui/VerifiedValue";
import { SourceBlock } from "@/components/ui/SourceBlock";
import { FaqSection } from "@/components/ui/FaqSection";
import { LastMileRoute } from "@/components/transport/LastMileRoute";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return getTransportRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getTransportRouteBySlug(slug);
  if (!r) return {};
  const description =
    r.route_type === "last-mile"
      ? `Step-by-step guide for getting from ${r.from} to ${r.to}, including public transport, taxis and the return journey.`
      : `Recommended transport, stations and what to check when travelling from ${r.from} to ${r.to}.`;
  return buildMetadata({
    title: `${r.from} to ${r.to} — How to Travel`,
    description,
    path: `/transport/${r.slug}`,
  });
}

export default async function TransportRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getTransportRouteBySlug(slug);
  if (!route) notFound();

  const isLastMile = route.route_type === "last-mile";

  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Transport", path: "/transport" },
          { name: `${route.from} to ${route.to}`, path: `/transport/${route.slug}` },
        ])}
      />
      {route.faq && route.faq.length > 0 ? <JsonLd data={faqPage(route.faq)} /> : null}

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Breadcrumb
          items={[
            { name: "Transport", path: "/transport" },
            { name: `${route.from} to ${route.to}`, path: `/transport/${route.slug}` },
          ]}
        />

        <header className="mt-6">
          <VerificationBadge status={route.verification_status} />
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight">
            <span className="block" lang="en">
              From {route.from} to {route.to}
            </span>
            {route.from_zh || route.to_zh ? (
              <span
                className="mt-2 block text-xl font-normal text-subtle"
                lang="zh"
                translate="no"
              >
                {route.from_zh}
                {route.from_zh && route.to_zh ? " → " : ""}
                {route.to_zh}
              </span>
            ) : null}
          </h1>
          <div className="mt-4 rounded-lg border border-border bg-surface px-4 py-3 text-sm">
            <p className="text-muted">
              <span className="font-semibold text-foreground">
                Confirm before you travel.
              </span>{" "}
              {isLastMile
                ? "Bus times, fares, operating hours and departure frequencies can change, and some figures come from dated announcements — confirm each before you set out."
                : "Train schedules, fares and frequencies can change — check 12306 for current trains and tickets before you travel."}
            </p>
            {route.verification_status === "verified" ? (
              <p className="mt-1 text-subtle">
                <span className="font-medium">Verified</span> means the route and its
                stations are confirmed — it does not guarantee that every fare, time or
                frequency is current.
              </p>
            ) : null}
          </div>
        </header>

        {isLastMile ? (
          <div className="mt-10 space-y-10">
            <LastMileRoute route={route} />

            <section>
              <h2 className="font-serif text-xl font-semibold">Sources</h2>
              <div className="mt-3 rounded-xl border border-border bg-surface p-5">
                <SourceBlock sources={route.sources} />
              </div>
              {route.last_verified ? (
                <p className="mt-3 text-sm text-subtle">
                  Last verified {formatDate(route.last_verified)}.
                </p>
              ) : null}
            </section>

            {route.faq && route.faq.length > 0 ? (
              <FaqSection faqs={route.faq} />
            ) : null}
          </div>
        ) : (
          <>
            <dl className="mt-10 divide-y divide-border rounded-xl border border-border bg-surface text-sm">
              <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                <dt className="text-muted">Recommended transport</dt>
                <dd className="font-medium">
                  <VerifiedValue value={route.recommended_transport} />
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                <dt className="text-muted">Approximate duration</dt>
                <dd className="font-medium">
                  <VerifiedValue value={route.approximate_duration} />
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                <dt className="text-muted">Departure station</dt>
                <dd className="font-medium">
                  <VerifiedValue value={route.departure_station} />
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                <dt className="text-muted">Arrival station</dt>
                <dd className="font-medium">
                  <VerifiedValue value={route.arrival_station} />
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                <dt className="text-muted">Frequency</dt>
                <dd className="font-medium">
                  <VerifiedValue value={route.frequency} />
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                <dt className="text-muted">Last verified</dt>
                <dd className="font-medium">
                  <VerifiedValue value={formatDate(route.last_verified)} />
                </dd>
              </div>
              <div className="px-5 py-4">
                <dt className="text-muted">Notes</dt>
                <dd className="mt-1.5 space-y-1 text-foreground">
                  {route.notes.length > 0 ? (
                    route.notes.map((n, i) => <p key={i}>{n}</p>)
                  ) : (
                    <VerifiedValue value={null} />
                  )}
                </dd>
              </div>
              <div className="px-5 py-4">
                <dt className="text-muted">Sources</dt>
                <dd className="mt-1.5">
                  <SourceBlock sources={route.sources} />
                </dd>
              </div>
            </dl>

            {route.faq && route.faq.length > 0 ? (
              <div className="mt-12">
                <FaqSection faqs={route.faq} />
              </div>
            ) : null}
          </>
        )}
      </div>
    </>
  );
}
