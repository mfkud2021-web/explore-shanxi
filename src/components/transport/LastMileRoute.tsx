import Link from "next/link";
import type { LastMileStep, TransportRoute } from "@/types";

function StepBlock({ index, step }: { index: number; step: LastMileStep }) {
  return (
    <li className="relative rounded-xl border border-border bg-surface p-5 pl-14">
      <span className="absolute left-4 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
        {index}
      </span>
      <h3 className="font-medium text-foreground">{step.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.detail}</p>
    </li>
  );
}

export function LastMileRoute({ route }: { route: TransportRoute }) {
  return (
    <div className="space-y-8">
      {route.summary ? (
        <p className="leading-relaxed text-foreground">{route.summary}</p>
      ) : null}

      {route.recommended_transport ? (
        <section className="rounded-xl border border-accent/30 bg-accent-soft p-5">
          <h2 className="font-serif text-lg font-semibold">Recommended route</h2>
          <p className="mt-2 text-sm font-medium text-foreground">
            {route.recommended_transport}
          </p>
          {route.approximate_duration ? (
            <p className="mt-1 text-sm text-muted">{route.approximate_duration}</p>
          ) : null}
          {route.frequency ? (
            <p className="mt-1 text-sm text-muted">{route.frequency}</p>
          ) : null}
        </section>
      ) : null}

      {route.steps && route.steps.length > 0 ? (
        <section>
          <h2 className="font-serif text-xl font-semibold">Step by step</h2>
          <ol className="mt-4 space-y-3">
            {route.steps.map((s, i) => (
              <StepBlock key={i} index={i + 1} step={s} />
            ))}
          </ol>
        </section>
      ) : null}

      {route.public_transport ? (
        <section>
          <h2 className="font-serif text-xl font-semibold">Public transport</h2>
          <p className="mt-2 leading-relaxed text-muted">{route.public_transport}</p>
        </section>
      ) : null}

      {route.taxi_backup ? (
        <section>
          <h2 className="font-serif text-xl font-semibold">Taxi / ride-hailing</h2>
          <p className="mt-2 leading-relaxed text-muted">{route.taxi_backup}</p>
        </section>
      ) : null}

      {route.return_journey ? (
        <section>
          <h2 className="font-serif text-xl font-semibold">Getting back</h2>
          <p className="mt-2 leading-relaxed text-muted">{route.return_journey}</p>
        </section>
      ) : null}

      {route.tips && route.tips.length > 0 ? (
        <section>
          <h2 className="font-serif text-xl font-semibold">Good to know</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
            {route.tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {route.attraction_slug ? (
        <div className="rounded-xl border border-border bg-accent-soft p-6">
          <p className="text-sm text-muted">
            See the full attraction guide for tickets, opening hours and reservations.
          </p>
          <Link
            href={`/attractions/${route.attraction_slug}`}
            className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-hover"
          >
            View {route.to} →
          </Link>
        </div>
      ) : null}
    </div>
  );
}
