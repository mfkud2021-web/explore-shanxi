import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/types";
import { formatVerified } from "@/lib/format";
import { ImageCredit } from "@/components/ui/ImageCredit";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-[4/3] overflow-hidden bg-accent-soft">
        <Image
          src={destination.hero_image.url}
          alt={destination.hero_image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-5 pt-2">
        <ImageCredit
          credit={destination.hero_image.credit}
          source={destination.hero_image.source}
          license={destination.hero_image.license}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 pt-3">
        <h3 className="font-serif text-xl font-semibold leading-snug">
          {destination.name_en}{" "}
          <span lang="zh" className="text-base font-normal text-subtle">
            {destination.name_zh}
          </span>
        </h3>
        <p className="mt-2 text-sm text-muted">{destination.tagline}</p>

        <dl className="mt-4 space-y-1.5 text-sm">
          <div className="flex items-baseline justify-between gap-3">
            <dt className="shrink-0 text-subtle">Recommended stay</dt>
            <dd className="text-right">{formatVerified(destination.recommended_stay)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-3">
            <dt className="shrink-0 text-subtle">Transport</dt>
            <dd className="text-right">{formatVerified(destination.transport_hint)}</dd>
          </div>
        </dl>

        <div className="mt-5 pt-2">
          <Link
            href={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
          >
            Explore
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
