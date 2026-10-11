import type { ReactNode } from "react";
import type { Attraction } from "@/types";
import { formatDate } from "@/lib/format";
import { VerifiedValue } from "@/components/ui/VerifiedValue";
import { SourceBlock } from "@/components/ui/SourceBlock";

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 px-5 py-3.5">
      <dt className="shrink-0 text-sm text-muted">{label}</dt>
      <dd className="min-w-0 break-words text-right text-sm font-medium text-foreground">{children}</dd>
    </div>
  );
}

export function AttractionInfoCard({ attraction }: { attraction: Attraction }) {
  const a = attraction;

  const ticket = a.ticket_price
    ? `${a.ticket_price.amount} ${a.ticket_price.currency}${
        a.ticket_price.note ? ` (${a.ticket_price.note})` : ""
      }`
    : null;

  const reservation =
    a.reservation_required === null
      ? null
      : a.reservation_required
        ? "Required"
        : "Not required";

  const reservationValue = reservation
    ? a.reservation_method
      ? `${reservation} — ${a.reservation_method}`
      : reservation
    : null;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Travel info
        </h2>
      </div>
      <dl className="divide-y divide-border">
        <Row label="Open / hours">
          <VerifiedValue value={a.opening_hours} />
        </Row>
        <Row label="Ticket">
          <VerifiedValue value={ticket} />
        </Row>
        <Row label="Reservation">
          <VerifiedValue value={reservationValue} />
        </Row>
        <Row label="Passport">
          <VerifiedValue value={a.passport_policy} />
        </Row>
        <Row label="Recommended visit">
          <VerifiedValue value={a.recommended_visit_duration} />
        </Row>
        <Row label="Nearest station">
          <VerifiedValue value={a.nearest_railway_station} />
        </Row>
        <Row label="Last verified">
          <VerifiedValue value={formatDate(a.last_verified)} />
        </Row>
        <div className="px-5 py-4">
          <dt className="text-sm text-muted">Source</dt>
          <dd className="mt-1.5">
            <SourceBlock sources={a.official_sources} />
          </dd>
        </div>
      </dl>
    </div>
  );
}
