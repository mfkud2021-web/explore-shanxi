"use client";

import { useState, type FormEvent } from "react";
import Script from "next/script";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function InquiryForm({ serviceConfigured = true }: { serviceConfigured?: boolean }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!serviceConfigured || !form.reportValidity() || sending) return;
    setSending(true);
    setStatus("");
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/inquiries", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send inquiry.");
      form.reset();
      setStatus(`Inquiry sent successfully. Reference: ${result.reference}. Please wait for a response; this is not a confirmed booking.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send inquiry. Please try again.");
    } finally { setSending(false); }
  }
  const field = "w-full rounded-lg border border-border bg-white px-3 py-3 text-foreground";
  return <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-5 sm:p-8">
    <h2 className="font-serif text-2xl font-semibold">Request local transport information</h2>
    <p className="text-sm text-muted">This is an inquiry only, not a confirmed booking or fixed-price offer. We may introduce you to an appropriately qualified local provider.</p>
    {!serviceConfigured ? (
      <p className="rounded-lg bg-accent-soft p-3 text-sm text-muted">
        The inquiry service is not configured yet, so submissions are not currently
        being delivered. This form is shown as a preview only — please check back
        later.
      </p>
    ) : null}
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="block text-sm font-medium">Travel date <input className={field} name="date" type="date" required /></label>
      <label className="block text-sm font-medium">Number of passengers <input className={field} name="passengers" type="number" min="1" max="50" defaultValue="2" required /></label>
    </div>
    <label className="block text-sm font-medium">Starting point <input className={field} name="origin" maxLength={150} placeholder="e.g. Datong railway station" required /></label>
    <label className="block text-sm font-medium">Places to visit / destination <textarea className={field} name="stops" maxLength={1200} rows={3} placeholder="e.g. Yungang Grottoes, Hanging Temple" required /></label>
    <label className="block text-sm font-medium">Luggage / accessibility needs (optional) <input className={field} name="luggage" maxLength={200} /></label>
    <label className="block text-sm font-medium">Your email or preferred contact <input className={field} name="contact" maxLength={200} required placeholder="Email / WhatsApp / WeChat" /></label>
    <label className="block text-sm font-medium">Other details (optional) <textarea className={field} name="notes" maxLength={1500} rows={3}/></label>
    <div className="hidden" aria-hidden="true"><label>Website <input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <label className="flex items-start gap-3 text-sm text-muted"><input type="checkbox" name="consent" value="yes" required className="mt-1" /> <span>I have read the <a href="/privacy" className="underline">privacy notice</a> and agree to share the details I choose to send for responding to this inquiry.</span></label>
    {TURNSTILE_SITE_KEY ? (
      <>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
        <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />
      </>
    ) : null}
    <button type="submit" disabled={sending || !serviceConfigured} className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60">{sending ? "Sending…" : serviceConfigured ? "Send inquiry" : "Inquiry service unavailable"}</button>
    {status && <p role="status" className="rounded-lg bg-accent-soft p-3 text-sm">{status}</p>}
  </form>;
}
