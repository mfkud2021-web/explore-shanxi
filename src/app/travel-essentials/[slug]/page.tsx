import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getTravelEssentialBySlug,
  getTravelEssentialSlugs,
} from "@/lib/data-access";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbList } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { SourceBlock } from "@/components/ui/SourceBlock";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return getTravelEssentialSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getTravelEssentialBySlug(slug);
  if (!g) return {};
  return buildMetadata({
    title: g.title,
    description: g.description,
    path: `/travel-essentials/${g.slug}`,
  });
}

export default async function TravelEssentialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getTravelEssentialBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Travel Essentials", path: "/travel-essentials" },
          { name: guide.title, path: `/travel-essentials/${guide.slug}` },
        ])}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Breadcrumb
          items={[
            { name: "Travel Essentials", path: "/travel-essentials" },
            { name: guide.title, path: `/travel-essentials/${guide.slug}` },
          ]}
        />

        <header className="mt-6">
          <VerificationBadge status={guide.verification_status} />
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight">
            {guide.title}
          </h1>
          <p className="mt-3 text-lg text-muted">{guide.description}</p>
        </header>

        {guide.sections.length > 0 ? (
          <div className="mt-10 space-y-8">
            {guide.sections.map((s, i) => (
              <section key={i}>
                <h2 className="font-serif text-2xl font-semibold">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-foreground">{s.body}</p>
              </section>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-border bg-surface p-8 text-center">
            <p className="font-medium text-foreground">Content pending verification</p>
            <p className="mt-2 text-sm text-muted">
              This guide is being compiled from official sources and will be published
              once verified.
            </p>
          </div>
        )}

        <section className="mt-12">
          <h2 className="font-serif text-xl font-semibold">Sources &amp; verification</h2>
          <div className="mt-4 rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted">Last verified</span>
              <span className="font-medium">{formatDate(guide.last_verified)}</span>
            </div>
            <div className="mt-4">
              <SourceBlock sources={guide.sources} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
