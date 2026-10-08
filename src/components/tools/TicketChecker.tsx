"use client";

import { useState } from "react";
import { attractions } from "@/data/attractions";
import { formatDate } from "@/lib/format";
import { VerifiedValue } from "@/components/ui/VerifiedValue";
import { SourceBlock } from "@/components/ui/SourceBlock";

export function TicketChecker() {
  const [slug, setSlug] = useState(attractions[0]?.slug ?? "");
  const a = attractions.find((x) => x.slug === slug);

  const reservation =
    a && a.reservation_required !== null
      ? a.reservation_required
        ? "Required"
        : "Not required"
      : null;

  const ticket = a?.ticket_price
    ? `${a.ticket_price.amount} ${a.ticket_price.currency}${
        a.ticket_price.note ? ` (${a.ticket_price.note})` : ""
      }`
    : null;

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <label
        htmlFor="ticket-checker-attraction"
        className="text-sm font-semibold text-foreground"
      >
        Select an attraction
      </label>
      <select
        id="ticket-checker-attraction"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
      >
        {attractions.map((x) => (
          <option key={x.slug} value={x.slug}>
            {x.name_en} ({x.name_zh})
          </option>
        ))}
      </select>

      {a ? (
        <dl className="mt-6 divide-y divide-border text-sm">
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-muted">Reservation required</dt>
            <dd className="font-medium">
              <VerifiedValue value={reservation} />
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-muted">Passport policy</dt>
            <dd className="font-medium">
              <VerifiedValue value={a.passport_policy} />
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-muted">Official booking method</dt>
            <dd className="font-medium">
              <VerifiedValue value={a.reservation_method} />
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-muted">Ticket</dt>
            <dd className="font-medium">
              <VerifiedValue value={ticket} />
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-muted">Last verified</dt>
            <dd className="font-medium">
              <VerifiedValue value={formatDate(a.last_verified)} />
            </dd>
          </div>
          <div className="py-3">
            <dt className="text-muted">Official source</dt>
            <dd className="mt-1.5">
              <SourceBlock sources={a.official_sources} />
            </dd>
          </div>
        </dl>
      ) : null}
    </div>
  );
}
