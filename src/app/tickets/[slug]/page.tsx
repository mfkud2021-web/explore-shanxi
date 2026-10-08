import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAttractionBySlug, getAttractionSlugs } from "@/lib/data-access";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbList } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AttractionInfoCard } from "@/components/attraction/AttractionInfoCard";

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
    title: `${a.name_en} — Tickets & Reservations`,
    description: `Ticket, reservation and passport information for ${a.name_en}.`,
    path: `/tickets/${a.slug}`,
  });
}

export default async function TicketPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attraction = getAttractionBySlug(slug);
  if (!attraction) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Tickets", path: "/tickets" },
          { name: attraction.name_en, path: `/tickets/${attraction.slug}` },
        ])}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Breadcrumb
          items={[
            { name: "Tickets", path: "/tickets" },
            { name: attraction.name_en, path: `/tickets/${attraction.slug}` },
          ]}
        />

        <header className="mt-6">
          <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {attraction.name_en}{" "}
            <span lang="zh" className="text-xl font-normal text-subtle sm:text-2xl">
              {attraction.name_zh}
            </span>
          </h1>
          <p className="mt-2 text-muted">Tickets, reservations and passport policy.</p>
        </header>

        <div className="mt-8">
          <AttractionInfoCard attraction={attraction} />
        </div>

        <p className="mt-8 text-sm text-muted">
          See the full guide and how to get there on the{" "}
          <Link
            href={`/attractions/${attraction.slug}`}
            className="text-accent hover:text-accent-hover"
          >
            {attraction.name_en} attraction page
          </Link>
          .
        </p>
      </div>
    </>
  );
}
