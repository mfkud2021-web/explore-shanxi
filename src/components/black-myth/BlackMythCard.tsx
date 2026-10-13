import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlackMythLocation, ImageAsset } from "@/types";
import { formatDate } from "@/lib/format";
import { getRegion } from "@/data/regions";
import { VerifiedValue } from "@/components/ui/VerifiedValue";
import { SourceBlock } from "@/components/ui/SourceBlock";
import { ImageCredit } from "@/components/ui/ImageCredit";

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

function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="shrink-0 text-sm text-muted">{label}</dt>
      <dd className="min-w-0 text-right text-sm font-medium text-foreground">{children}</dd>
    </div>
  );
}

export function BlackMythCard({
  location,
  image,
}: {
  location: BlackMythLocation;
  image?: ImageAsset | null;
}) {
  const visit =
    location.can_visit === null
      ? null
      : location.can_visit
        ? "Yes"
        : "No";
  const cityName = getRegion(location.city)?.name_en ?? location.city;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      {image ? (
        <figure>
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-accent-soft">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-5 pt-2">
            <ImageCredit
              credit={image.credit}
              source={image.source}
              license={image.license}
            />
          </figcaption>
        </figure>
      ) : (
        <div className="flex aspect-[3/2] w-full items-center justify-center border-b border-border bg-accent-soft px-6 text-center">
          <span className="text-sm text-subtle">Photo pending verification</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <span
          className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${CONNECTION_STYLES[location.connection_status]}`}
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
          In-game inspiration: {location.game_location}
        </p>

        <dl className="mt-4 space-y-1.5">
          <MetaRow label="City">{cityName}</MetaRow>
          <MetaRow label="Ticket">
            {location.ticket_info ?? <span className="italic text-pending">Not verified</span>}
          </MetaRow>
        </dl>

        <details className="group mt-4 border-t border-border pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-accent hover:text-accent-hover">
            <span>More travel details</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-open:rotate-180"
            >
              ▾
            </span>
          </summary>
          <dl className="mt-4 space-y-4">
            {location.notes ? (
              <div>
                <dt className="text-sm text-muted">About the site</dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground">
                  {location.notes}
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="text-sm text-muted">Can tourists visit?</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                <VerifiedValue value={visit} />
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Ticket</dt>
              <dd className="mt-1 text-sm text-foreground">
                <VerifiedValue value={location.ticket_info} />
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">How to get there</dt>
              <dd className="mt-1 text-sm text-foreground">
                <VerifiedValue value={location.how_to_get_there} />
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Last verified</dt>
              <dd className="mt-1 text-sm text-foreground">
                <VerifiedValue value={formatDate(location.last_verified)} />
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Sources</dt>
              <dd className="mt-1">
                <SourceBlock sources={location.sources} />
              </dd>
            </div>
          </dl>
        </details>
      </div>

      {location.related_attraction_slug ? (
        <div className="mt-auto border-t border-border p-5">
          <Link
            href={`/attractions/${location.related_attraction_slug}`}
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            View full attraction guide →
          </Link>
        </div>
      ) : null}
    </article>
  );
}
