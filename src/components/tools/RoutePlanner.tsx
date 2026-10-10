"use client";

import { useState, type FormEvent } from "react";
import { buildRoute } from "@/lib/route-planner";
import type { Interest, RoutePlan, RoutePlannerInput } from "@/types";

const ORIGINS: { id: RoutePlannerInput["origin"]; label: string }[] = [
  { id: "beijing", label: "Beijing" },
  { id: "shanghai", label: "Shanghai" },
  { id: "xian", label: "Xi'an" },
  { id: "other", label: "Other" },
];

const DAYS: RoutePlannerInput["days"][] = [3, 5, 7, 10];

const NEXT: { id: RoutePlannerInput["next"]; label: string }[] = [
  { id: "xian", label: "Xi'an" },
  { id: "beijing", label: "Beijing" },
  { id: "other", label: "Other" },
];

const INTERESTS: { id: Interest; label: string }[] = [
  { id: "ancient-architecture", label: "Ancient Architecture" },
  { id: "black-myth", label: "Black Myth" },
  { id: "history", label: "History" },
  { id: "food", label: "Food" },
  { id: "photography", label: "Photography" },
  { id: "unesco", label: "UNESCO" },
];

export function RoutePlanner() {
  const [origin, setOrigin] = useState<RoutePlannerInput["origin"]>("beijing");
  const [days, setDays] = useState<RoutePlannerInput["days"]>(5);
  const [next, setNext] = useState<RoutePlannerInput["next"]>("xian");
  const [interests, setInterests] = useState<Interest[]>([]);
  const [plan, setPlan] = useState<RoutePlan | null>(null);

  function toggleInterest(id: Interest) {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPlan(buildRoute({ origin, days, next, interests }));
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <fieldset>
            <legend className="text-sm font-semibold text-foreground">
              Where are you coming from?
            </legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {ORIGINS.map((o) => (
                <label
                  key={o.id}
                  className={`flex cursor-pointer items-center justify-center rounded-md border px-3 py-2 text-sm ${
                    origin === o.id
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border text-muted hover:border-subtle"
                  }`}
                >
                  <input
                    type="radio"
                    name="origin"
                    value={o.id}
                    checked={origin === o.id}
                    onChange={() => setOrigin(o.id)}
                    className="sr-only"
                  />
                  {o.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-foreground">
              Where are you going next?
            </legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {NEXT.map((n) => (
                <label
                  key={n.id}
                  className={`flex cursor-pointer items-center justify-center rounded-md border px-3 py-2 text-sm ${
                    next === n.id
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border text-muted hover:border-subtle"
                  }`}
                >
                  <input
                    type="radio"
                    name="next"
                    value={n.id}
                    checked={next === n.id}
                    onChange={() => setNext(n.id)}
                    className="sr-only"
                  />
                  {n.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold text-foreground">How many days?</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {DAYS.map((d) => (
              <label
                key={d}
                className={`flex cursor-pointer items-center rounded-md border px-4 py-2 text-sm ${
                  days === d
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border text-muted hover:border-subtle"
                }`}
              >
                <input
                  type="radio"
                  name="days"
                  value={d}
                  checked={days === d}
                  onChange={() => setDays(d)}
                  className="sr-only"
                />
                {d === 10 ? "10+" : d}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-foreground">Interests</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {INTERESTS.map((i) => (
              <label
                key={i.id}
                className={`flex cursor-pointer items-center rounded-md border px-3 py-1.5 text-sm ${
                  interests.includes(i.id)
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border text-muted hover:border-subtle"
                }`}
              >
                <input
                  type="checkbox"
                  checked={interests.includes(i.id)}
                  onChange={() => toggleInterest(i.id)}
                  className="sr-only"
                />
                {i.label}
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover"
        >
          Build My Route
        </button>
      </form>

      {plan ? (
        <div className="mt-8 border-t border-border pt-6">
          <h3 className="font-serif text-lg font-semibold">Suggested route</h3>
          {plan.stops.length === 0 ? (
            <p className="mt-3 text-sm text-muted">
              Not enough days for a multi-stop route. Consider a shorter trip or more
              days.
            </p>
          ) : (
            <ol className="mt-4 space-y-3">
              {plan.stops.map((stop) => (
                <li key={stop.city} className="flex gap-3 text-sm">
                  <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                    {stop.days} {stop.days === 1 ? "day" : "days"}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{stop.city}</p>
                    {stop.highlights.length ? (
                      <p className="text-subtle">{stop.highlights.join(" · ")}</p>
                    ) : (
                      <p className="text-subtle">
                        Specific attractions not yet listed for this stop.
                      </p>
                    )}
                    {stop.note ? (
                      <p className="mt-1 text-xs text-accent">{stop.note}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          )}
          {plan.contextNote ? (
            <p className="mt-4 text-xs text-subtle">{plan.contextNote}</p>
          ) : null}
          <p className="mt-4 text-xs text-subtle">{plan.disclaimer}</p>
        </div>
      ) : null}
    </div>
  );
}
