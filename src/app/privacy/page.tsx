import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description:
    "What personal data Explore Shanxi does and does not collect, and how any future inquiry service would handle it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-6 px-4 py-12">
      <h1 className="font-serif text-4xl font-bold">Privacy Notice</h1>
      <p className="text-sm text-muted">Last updated: 15 October 2026.</p>

      <section>
        <h2 className="font-serif text-xl font-semibold">What this site is</h2>
        <p className="mt-2 leading-relaxed text-muted">
          Explore Shanxi is an independent travel information website. It publishes
          guides and reference data about travelling in Shanxi, China.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold">Personal data we collect</h2>
        <p className="mt-2 leading-relaxed text-muted">
          At present this site does not operate a contact form, booking system, user
          accounts or newsletter, and it does not collect personal data from
          visitors. The transport inquiry form is not currently enabled, so anything
          you might enter there would not be sent or stored.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold">Cookies and tracking</h2>
        <p className="mt-2 leading-relaxed text-muted">
          This site does not use advertising, analytics or third-party tracking
          cookies, and it does not build advertising profiles of visitors.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold">Hosting</h2>
        <p className="mt-2 leading-relaxed text-muted">
          The site is served by a third-party hosting provider, which may keep
          standard server logs such as IP addresses and the pages requested. These
          logs are managed by the hosting provider, not by Explore Shanxi.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold">If an inquiry service is added</h2>
        <p className="mt-2 leading-relaxed text-muted">
          If a contact or transport inquiry service is enabled in the future, this
          notice will be updated to explain what is collected, how it is delivered,
          how long it is kept and any relevant data transfer arrangements before the
          service goes live.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold">About this notice</h2>
        <p className="mt-2 leading-relaxed text-muted">
          This notice is a factual description of how the site currently operates,
          not legal advice. Data protection obligations may vary depending on where
          visitors are located, and have not yet been confirmed for this site.
        </p>
      </section>
    </article>
  );
}
