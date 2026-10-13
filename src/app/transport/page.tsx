import type { Metadata } from "next";
import Link from "next/link";
import {
  getIntercityTransportRoutes,
  getLastMileTransportRoutes,
} from "@/lib/data-access";
import { TransportFinder } from "@/components/tools/TransportFinder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shanxi Transport Guide",
  description:
    "How to travel between Beijing, Datong, Taiyuan, Pingyao and Xi'an, and how to reach each site from the nearest railway station — stations, shuttles, taxis and the return journey.",
  path: "/transport",
});

export default function TransportPage() {
  const intercity = getIntercityTransportRoutes();
  const lastMile = getLastMileTransportRoutes();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Shanxi Transport Guide
        </h1>
        <p className="mt-3 text-lg text-muted">
          Find the recommended way to travel between Shanxi&apos;s main cities and
          Beijing or Xi&apos;an, and how to reach each site from the nearest railway
          station.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold">Transport finder</h2>
        <p className="mt-2 text-sm text-muted">
          City-to-city travel by rail. For the last leg from a station to a specific
          site, see the station guides below.
        </p>
        <div className="mt-4">
          <TransportFinder />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold">Popular routes</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {intercity.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/transport/${r.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent"
              >
                <span className="font-medium text-foreground">
                  {r.from} → {r.to}
                </span>
                <span className="text-accent" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold">
          Getting from the station to each site
        </h2>
        <p className="mt-2 text-sm text-muted">
          The last leg of the journey — how to reach the site from the station, and how
          to get back. Times and fares are marked where we have a reliable source.
        </p>
        <ul className="mt-4 space-y-3">
          {lastMile.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/transport/${r.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent"
              >
                <span className="min-w-0">
                  <span className="block font-medium text-foreground">
                    {r.to}
                    {r.to_zh ? (
                      <span lang="zh" className="ml-2 text-sm font-normal text-subtle">
                        {r.to_zh}
                      </span>
                    ) : null}
                  </span>
                  <span className="block text-sm text-muted">from {r.from}</span>
                </span>
                <span className="shrink-0 text-accent" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold">Planning a longer route</h2>
        <p className="mt-3 leading-relaxed text-muted">
          Some journeys have no single verified direct service listed here, so we
          describe them using the verified legs you would actually take. For example,
          there is no direct Datong → Pingyao route in our data: travel from Datong to
          Taiyuan by{" "}
          <Link href="/transport/datong-to-taiyuan" className="text-accent underline underline-offset-2 hover:text-accent-hover">
            high-speed rail
          </Link>{" "}
          (about 1 hour 25 minutes to 2 hours), then from Taiyuan to Pingyao by{" "}
          <Link href="/transport/taiyuan-to-pingyao" className="text-accent underline underline-offset-2 hover:text-accent-hover">
            high-speed rail
          </Link>{" "}
          (about 30–40 minutes). This is a straightforward corridor with no
          backtracking, and Pingyao sits on the same line that continues toward
          Xi&apos;an.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          For journeys that are not well served by rail — such as reaching the Hanging
          Temple, Xiaoxitian or Hukou Waterfall — see our{" "}
          <Link href="/private-driver" className="text-accent underline underline-offset-2 hover:text-accent-hover">
            private driver inquiries
          </Link>{" "}
          page to ask about local transport options.
        </p>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-serif text-2xl font-semibold">
          Practical tips for getting around Shanxi
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
          <div>
            <h3 className="font-medium text-foreground">Use a China-friendly map</h3>
            <p className="mt-1">
              Amap (高德地图) is the most reliable map app in China — Google Maps data is
              often outdated or offset. Search using the Chinese place names shown on
              this site, and download the app before you arrive if possible.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Ride-hailing and taxis</h3>
            <p className="mt-1">
              DiDi (滴滴) and Amap both hail taxis and private cars. Many apps require a
              Chinese phone number or a linked Alipay/WeChat account, and not every
              foreign card or account is accepted — check before you rely on it, and
              keep a backup (cash, official taxi, or asking your hotel to call one).
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">
              Show the driver the Chinese name
            </h3>
            <p className="mt-1">
              Every site on this site lists its Chinese name (for example 云冈石窟 for the
              Yungang Grottoes). Show it to the driver or type it into the map rather
              than relying on a spoken English name.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">
              High-speed and conventional stations are different
            </h3>
            <p className="mt-1">
              Several Shanxi cities have two stations — a high-speed (高铁) station and a
              conventional (普通) station, often far apart. Datong South (大同南站) and
              Pingyao Gucheng (平遥古城站) are high-speed stations; check which station your
              ticket names before you travel.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">
              Confirm your return before you set out
            </h3>
            <p className="mt-1">
              Buses and shuttles to outlying sites such as Xiaoxitian can stop early in
              the afternoon, and there may be no rail fallback. Confirm the last return
              service when you arrive, not when you are ready to leave.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">
              Allow time for security checks
            </h3>
            <p className="mt-1">
              High-speed rail requires a security check and passport inspection before
              boarding. Arrive at the station 30–45 minutes early, and allow extra time
              to collect paper tickets or pass through checks with a passport.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
