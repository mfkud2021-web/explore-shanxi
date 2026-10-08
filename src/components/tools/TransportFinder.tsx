"use client";

import { useState } from "react";
import { transportRoutes } from "@/data/transport-routes";
import { formatDate } from "@/lib/format";
import { VerifiedValue } from "@/components/ui/VerifiedValue";
import { SourceBlock } from "@/components/ui/SourceBlock";

const FROM = [...new Set(transportRoutes.map((r) => r.from))];
const TO = [...new Set(transportRoutes.map((r) => r.to))];

function Field({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3">
      <dt className="text-muted">{label}</dt>
      <dd className="font-medium">
        <VerifiedValue value={value} />
      </dd>
    </div>
  );
}

export function TransportFinder() {
  const [from, setFrom] = useState(FROM[0]);
  const [to, setTo] = useState(TO[0]);
  const route = transportRoutes.find((r) => r.from === from && r.to === to);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="transport-from"
            className="text-sm font-semibold text-foreground"
          >
            From
          </label>
          <select
            id="transport-from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          >
            {FROM.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="transport-to"
            className="text-sm font-semibold text-foreground"
          >
            To
          </label>
          <select
            id="transport-to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          >
            {TO.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {route ? (
        <dl className="mt-6 divide-y divide-border text-sm">
          <Field label="Recommended transport" value={route.recommended_transport} />
          <Field label="Approximate duration" value={route.approximate_duration} />
          <Field label="Departure station" value={route.departure_station} />
          <Field label="Arrival station" value={route.arrival_station} />
          <Field label="Frequency" value={route.frequency} />
          <Field label="Last verified" value={formatDate(route.last_verified)} />
          <div className="py-3">
            <dt className="text-muted">Notes</dt>
            <dd className="mt-1 space-y-1">
              {route.notes.length > 0 ? (
                route.notes.map((n, i) => (
                  <p key={i} className="text-foreground">
                    {n}
                  </p>
                ))
              ) : (
                <VerifiedValue value={null} />
              )}
            </dd>
          </div>
          <div className="py-3">
            <dt className="text-muted">Sources</dt>
            <dd className="mt-1">
              <SourceBlock sources={route.sources} />
            </dd>
          </div>
        </dl>
      ) : (
        <p className="mt-6 text-sm text-muted">
          No route data for {from} → {to} yet.
        </p>
      )}
    </div>
  );
}
