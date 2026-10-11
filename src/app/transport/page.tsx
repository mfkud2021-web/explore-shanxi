import type { Metadata } from "next";
import Link from "next/link";
import { transportRoutes } from "@/data/transport-routes";
import { TransportFinder } from "@/components/tools/TransportFinder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shanxi Transport Guide",
  description:
    "How to travel between Beijing, Datong, Taiyuan, Pingyao and Xi'an — recommended transport, stations and what to check on 12306.",
  path: "/transport",
});

export default function TransportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Shanxi Transport Guide
        </h1>
        <p className="mt-3 text-lg text-muted">
          Find the recommended way to travel between Shanxi&apos;s main cities and
          Beijing or Xi&apos;an.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold">Transport finder</h2>
        <div className="mt-4">
          <TransportFinder />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold">Popular routes</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {transportRoutes.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/transport/${r.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent"
              >
                <span className="font-medium text-foreground">
                  {r.from} → {r.to}
                </span>
                <span className="text-accent" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold">Planning a longer route</h2>
        <p className="mt-3 leading-relaxed text-muted">
          Some journeys have no single verified direct service listed here, so we
          describe them using the verified legs you would actually take. For example,
          there is no direct Datong → Pingyao route in our data: travel from Datong to
          Taiyuan by{" "}
          <Link href="/transport/datong-to-taiyuan" className="text-accent underline underline-offset-2 hover:text-accent-hover">
            high-speed rail
          </Link>{" "}
          (about 1 hour 25 minutes to 2 hours), then from Taiyuan to Pingyao by{" "}
          <Link href="/transport/taiyuan-to-pingyao" className="text-accent underline underline-offset-2 hover:text-accent-hover">
            high-speed rail
          </Link>{" "}
          (about 30–40 minutes). This is a straightforward corridor with no
          backtracking, and Pingyao sits on the same line that continues toward
          Xi&apos;an.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          For journeys that are not well served by rail — such as reaching the Hanging
          Temple, Xiaoxitian or Hukou Waterfall — see our{" "}
          <Link href="/private-driver" className="text-accent underline underline-offset-2 hover:text-accent-hover">
            private driver inquiries
          </Link>{" "}
          page to ask about local transport options.
        </p>
      </section>
    </div>
  );
}
