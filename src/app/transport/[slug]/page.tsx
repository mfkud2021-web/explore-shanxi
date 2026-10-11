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
  return buildMetadata({
    title: `${r.from} to ${r.to} — How to Travel`,
    description: `Recommended transport, stations and what to check when travelling from ${r.from} to ${r.to}.`,
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
            {route.from}{" "}
            {route.from_zh ? (
              <span lang="zh" className="text-2xl font-normal text-subtle">
                {route.from_zh}
              </span>
            ) : null}{" "}
            → {route.to}{" "}
            {route.to_zh ? (
              <span lang="zh" className="text-2xl font-normal text-subtle">
                {route.to_zh}
              </span>
            ) : null}
          </h1>
        </header>

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
      </div>
    </>
  );
}
