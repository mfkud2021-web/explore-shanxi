import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbList } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: "About Explore Shanxi",
  description:
    "What Explore Shanxi is, how we verify travel information, and what we do and do not claim to be.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "About", path: "/about" },
        ])}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Breadcrumb items={[{ name: "About", path: "/about" }]} />

        <header className="mt-6">
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight">
            About Explore Shanxi
          </h1>
          <p className="mt-3 text-lg text-muted">
            An independent travel information website for overseas visitors to Shanxi,
            China.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="font-serif text-2xl font-semibold">What this site is</h2>
            <p className="mt-3 leading-relaxed text-foreground">
              Explore Shanxi publishes practical, independently compiled information
              for planning a trip to Shanxi — destinations, attractions, tickets,
              reservations, transport, and the Black Myth: Wukong sites you can
              actually visit.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold">
              What this site is not
            </h2>
            <p className="mt-3 leading-relaxed text-foreground">
              We are a travel information website, not a travel agency, transport
              operator, booking platform or ticket seller. We do not employ drivers,
              sell tours, collect payments or guarantee reservations. Any transport
              request is passed on as an inquiry to a separately qualified provider.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold">
              How we verify information
            </h2>
            <p className="mt-3 leading-relaxed text-foreground">
              Every fact is marked{" "}
              <span className="font-medium text-verified">verified</span>,{" "}
              <span className="font-medium text-pending">pending</span> or{" "}
              <span className="font-medium text-outdated">outdated</span>, and each
              figure is attributed to a source — official or government channels,
              major travel platforms, or trusted media.
            </p>
            <p className="mt-3 leading-relaxed text-foreground">
              Where we cannot confirm a value, we show it as &ldquo;Not verified
              yet&rdquo; rather than guessing. We do not invent ticket prices, opening
              hours, transport times or service qualifications.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold">Our promise</h2>
            <ul className="mt-4 space-y-2 text-foreground">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-accent">·</span>
                <span>No fabricated prices, schedules or routes.</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-accent">·</span>
                <span>No fake reviews, drivers or certifications.</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-accent">·</span>
                <span>
                  When information changes or is missing, we say so plainly.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold">Contact</h2>
            <p className="mt-3 leading-relaxed text-foreground">
              To ask a transport or route question, use the{" "}
              <Link href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover">
                contact form
              </Link>
              . For how we handle what you submit, read the{" "}
              <Link href="/privacy" className="text-accent underline underline-offset-2 hover:text-accent-hover">
                privacy notice
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-accent underline underline-offset-2 hover:text-accent-hover">
                service terms
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
