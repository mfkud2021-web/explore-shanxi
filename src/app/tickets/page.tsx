import type { Metadata } from "next";
import { TicketChecker } from "@/components/tools/TicketChecker";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shanxi Ticket & Passport Guide",
  description:
    "Can foreigners buy tickets with a passport in Shanxi? Check reservation and passport rules for major attractions.",
  path: "/tickets",
});

export default function TicketsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Shanxi Ticket &amp; Passport Guide
        </h1>
        <p className="mt-3 text-lg text-muted">
          Check reservation requirements and passport rules for Shanxi&apos;s main
          attractions.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold">
          Ticket &amp; passport checker
        </h2>
        <div className="mt-4">
          <TicketChecker />
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-serif text-xl font-semibold">What you need to know</h2>
        <p className="mt-3 leading-relaxed text-muted">
          A general guide to buying tickets and handling reservations as a foreign
          visitor in Shanxi is being compiled from official sources. Until then, always
          check the official ticket channel for the specific attraction before
          visiting.
        </p>
      </section>
    </div>
  );
}
