import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import { isInquiryServiceConfigured } from "@/lib/inquiry";

export const metadata: Metadata = buildMetadata({
  title: "Contact Explore Shanxi",
  description:
    "How to reach Explore Shanxi, and the current status of the transport inquiry service.",
  path: "/contact",
});

export default function ContactPage() {
  const serviceConfigured = isInquiryServiceConfigured();

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-12">
      <h1 className="font-serif text-4xl font-bold">Contact Explore Shanxi</h1>
      <p className="text-muted">
        Explore Shanxi is an independent travel information website. A direct
        contact or transport inquiry service is not available yet.
      </p>

      {serviceConfigured ? (
        <>
          <p className="text-muted">
            Use the form below to send a transport inquiry.
          </p>
          <InquiryForm serviceConfigured={serviceConfigured} />
        </>
      ) : (
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-serif text-xl font-semibold">Inquiry service status</h2>
          <p className="mt-3 leading-relaxed text-muted">
            The inquiry form is not configured yet, so submissions are not currently
            delivered. Please check back later. In the meantime, you can find
            transport guidance on the{" "}
            <Link
              href="/transport"
              className="text-accent underline underline-offset-2 hover:text-accent-hover"
            >
              transport pages
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}
