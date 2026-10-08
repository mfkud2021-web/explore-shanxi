import type { Metadata } from "next";
import Link from "next/link";
import { travelEssentials } from "@/data/travel-essentials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Travel Essentials for Shanxi",
  description:
    "Practical guides for independent travel in Shanxi: tickets, passports, transport, payments, internet and where to stay.",
  path: "/travel-essentials",
});

export default function TravelEssentialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Travel Essentials
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Practical guides for independent travel in Shanxi — tickets, passports,
          transport, payments and more.
        </p>
      </header>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
