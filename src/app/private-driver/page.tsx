import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import { isInquiryServiceConfigured } from "@/lib/inquiry";

export const metadata: Metadata = buildMetadata({
  title: "Private Driver & Transport Inquiries in Shanxi",
  description:
    "Plan local transport around Datong, Pingyao, Taiyuan and Mount Wutai. Request information and introductions to qualified local transport providers.",
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
          Explore Shanxi with easier local transport
        </h1>
        <p className="max-w-3xl text-lg text-muted">
          Visiting Yungang Grottoes, Hanging Temple, Pingyao Ancient City or Mount
          Wutai? Tell us your route and travel date. We can help you explore options
          with local providers, subject to availability and qualification checks.
        </p>
        <Link
          className="inline-block rounded-lg bg-accent px-5 py-3 font-semibold text-white"
          href="#inquiry"
        >
          Ask about your route
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Datong day trips", "Yungang Grottoes, Hanging Temple and connections around Datong."],
          ["Taiyuan & Pingyao", "Railway station transfers and multi-stop itinerary questions."],
          ["Mount Wutai", "Explore transport options and realistic travel times before your trip."],
        ].map(([title, desc]) => (
          <article key={title} className="rounded-xl border border-border bg-surface p-5">
            <h2 className="font-serif text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm text-muted">{desc}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl bg-accent-soft p-5">
        <h2 className="font-semibold">How it works</h2>
        <p className="mt-2 text-sm">
          1. Share your proposed route → 2. We review your inquiry → 3. If an
          appropriate provider is available, you can discuss options and a quote. No
          vehicle or driver is reserved by this form. No online payment is collected.
        </p>
      </section>

      <div id="inquiry">
        <InquiryForm serviceConfigured={serviceConfigured} />
      </div>

      <p className="text-sm text-muted">
        We are an independent travel information website, not presenting ourselves as
        a licensed travel agency or transport operator. Any transport service must be
        arranged with a properly qualified provider.{" "}
        <Link className="underline" href="/terms">
          Read service terms
        </Link>
        .
      </p>
    </div>
  );
}
