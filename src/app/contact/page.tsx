import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import { isInquiryServiceConfigured } from "@/lib/inquiry";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Transport Inquiry",
  description:
    "Ask about local transport in Shanxi, including drivers and multi-stop routes around Datong, Pingyao and Taiyuan.",
  path: "/contact",
});

export default function ContactPage() {
  const serviceConfigured = isInquiryServiceConfigured();

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-12">
      <h1 className="font-serif text-4xl font-bold">Contact Explore Shanxi</h1>
      <p className="text-muted">
        For a local transport inquiry, prepare an email using the form below.
      </p>
      <InquiryForm serviceConfigured={serviceConfigured} />
    </div>
  );
}
