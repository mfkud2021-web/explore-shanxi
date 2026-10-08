import type { Metadata } from "next";
import Link from "next/link";
import { attractions } from "@/data/attractions";
import { buildMetadata } from "@/lib/seo";
import { CATEGORY_LABELS } from "@/lib/format";

export const metadata: Metadata = buildMetadata({
  title: "Attractions in Shanxi",
  description:
    "Practical guides to Shanxi's main attractions, including the Yungang Grottoes, Hanging Temple, Jinci Temple and Pingyao Ancient City.",
  path: "/attractions",
});

export default function AttractionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Attractions
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Verified travel information for Shanxi&apos;s main sights — tickets,
          reservations, passports and how to get there.
        </p>
      </header>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {attractions.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/attractions/${a.slug}`}
              className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                {CATEGORY_LABELS[a.category] ?? a.category}
              </span>
              <h2 className="mt-2 font-serif text-xl font-semibold">
                {a.name_en}{" "}
                <span lang="zh" className="text-base font-normal text-subtle">
                  {a.name_zh}
                </span>
              </h2>
              <p className="mt-2 text-sm text-muted">{a.short_description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
