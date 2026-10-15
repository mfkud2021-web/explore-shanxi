import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import { isInquiryServiceConfigured } from "@/lib/inquiry";

export const metadata: Metadata = buildMetadata({
  title: "Local Transport & Private Drivers in Shanxi",
  description:
    "Local transport around Datong, Pingyao, Taiyuan and Mount Wutai, and the current status of private transport assistance on this site.",
  path: "/private-driver",
});

export default function PrivateDriverPage() {
  const serviceConfigured = isInquiryServiceConfigured();

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-12 sm:px-6">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Explore Shanxi · Local transport
        </p>
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">
          Local transport &amp; private drivers
        </h1>
        <p className="max-w-3xl text-lg text-muted">
          Explore Shanxi is currently an independent travel information resource.
          Local travel assistance and private transport arrangements are not yet
          available through this website.
        </p>
      </header>

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 className="font-serif text-xl font-semibold">Current status</h2>
        <p className="mt-3 leading-relaxed text-muted">
          We do not currently arrange drivers, vehicles or transfers, and we do not
          take bookings or payments. The transport information on this site is
          guidance only, and any transport you arrange is with a third-party
          provider, not with this website.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Datong day trips", "Route guides for Yungang Grottoes, Hanging Temple and connections around Datong."],
          ["Taiyuan & Pingyao", "Rail connections and multi-stop itineraries between Taiyuan and Pingyao."],
          ["Mount Wutai", "Transport options and realistic travel times for reaching Mount Wutai."],
        ].map(([title, desc]) => (
          <article key={title} className="rounded-xl border border-border bg-surface p-5">
            <h2 className="font-serif text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm text-muted">{desc}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl bg-accent-soft p-5">
        <h2 className="font-semibold">Where to find transport information</h2>
        <p className="mt-2 text-sm">
          For verified routes, stations, fares and travel times, see the{" "}
          <Link href="/transport" className="underline">
            transport guides
          </Link>
          . Each route is marked verified or pending, and we link to the sources we
          used.
        </p>
      </section>

      {serviceConfigured ? (
        <div id="inquiry">
          <InquiryForm serviceConfigured={serviceConfigured} />
        </div>
      ) : (
        <section
          id="inquiry"
          className="rounded-xl border border-border bg-surface p-6"
        >
          <h2 className="font-serif text-xl font-semibold">
            Requesting local transport
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            A transport inquiry service is not available yet. When it becomes
            available, this page will let you request information about local
            transport options. In the meantime, please use the public transport and
            taxi guidance on the transport pages.
          </p>
        </section>
      )}

      <p className="text-sm text-muted">
        We are an independent travel information website, not a travel agency or
        transport operator.{" "}
        <Link className="underline" href="/terms">
          Read service terms
        </Link>
        .
      </p>
    </div>
  );
}
