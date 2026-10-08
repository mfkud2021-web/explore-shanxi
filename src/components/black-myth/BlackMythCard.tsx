import type { ReactNode } from "react";
import type { BlackMythLocation } from "@/types";
import { formatDate } from "@/lib/format";
import { VerifiedValue } from "@/components/ui/VerifiedValue";
import { SourceBlock } from "@/components/ui/SourceBlock";

const CONNECTION_LABELS: Record<BlackMythLocation["connection_status"], string> = {
  verified: "Verified connection",
  unverified: "Unverified connection",
  rumored: "Rumored",
};

const CONNECTION_STYLES: Record<BlackMythLocation["connection_status"], string> = {
  verified: "bg-verified-soft text-verified border-verified",
  unverified: "bg-pending-soft text-pending border-pending",
  rumored: "bg-outdated-soft text-outdated border-outdated",
};

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 px-5 py-3">
      <dt className="shrink-0 text-sm text-muted">{label}</dt>
      <dd className="text-right text-sm font-medium text-foreground">{children}</dd>
    </div>
  );
}

export function BlackMythCard({ location }: { location: BlackMythLocation }) {
  const visit =
    location.can_visit === null
      ? null
      : location.can_visit
        ? "Yes"
        : "No";

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="border-b border-border p-5">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${CONNECTION_STYLES[location.connection_status]}`}
        >
          {CONNECTION_LABELS[location.connection_status]}
        </span>
        <h3 className="mt-3 font-serif text-xl font-semibold">
          {location.real_location_en}{" "}
          <span lang="zh" className="text-base font-normal text-subtle">
            {location.real_location_zh}
          </span>
        </h3>
        <p className="mt-1 text-sm text-muted">
          Game location / inspiration: {location.game_location}
        </p>
      </div>
      <dl className="divide-y divide-border">
        <Row label="City">{location.city}</Row>
        <Row label="Can tourists visit?">
          <VerifiedValue value={visit} />
        </Row>
        <Row label="Ticket">
          <VerifiedValue value={location.ticket_info} />
        </Row>
        <Row label="Last verified">
          <VerifiedValue value={formatDate(location.last_verified)} />
        </Row>
        <div className="px-5 py-3">
          <dt className="text-sm text-muted">How to get there</dt>
          <dd className="mt-1 text-sm text-foreground">
            <VerifiedValue value={location.how_to_get_there} />
          </dd>
        </div>
        <div className="px-5 py-3">
          <dt className="text-sm text-muted">Sources</dt>
          <dd className="mt-1">
            <SourceBlock sources={location.sources} />
          </dd>
        </div>
      </dl>
    </article>
  );
}
