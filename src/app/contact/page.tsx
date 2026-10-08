import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
export const metadata: Metadata = { title: "Contact & Transport Inquiry" };
export default function ContactPage() { return <div className="mx-auto max-w-3xl space-y-6 px-4 py-12"><h1 className="font-serif text-4xl font-bold">Contact Explore Shanxi</h1><p className="text-muted">For a local transport inquiry, prepare an email using the form below.</p><InquiryForm /></div>; }
