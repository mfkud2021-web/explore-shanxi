import { NextRequest, NextResponse } from "next/server";

const MAX_BODY = 12_000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 600;
const limits: Record<string, number> = { date: 10, origin: 150, stops: 1200, passengers: 2, luggage: 200, contact: 200, notes: 1500 };
const clean = (v: unknown, max: number) => typeof v === "string" ? v.trim().slice(0, max) : "";
const safe = (v: string) => v.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c));

function clientIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

async function rateLimited(request: NextRequest): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return false;
  const key = `inquiry-rate:${clientIp(request)}`;
  try {
    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, String(RATE_LIMIT_WINDOW_SECONDS)],
      ]),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return false;
    const results = (await res.json()) as { result?: number }[];
    const count = Number(results[0]?.result ?? 0);
    return count > RATE_LIMIT_MAX;
  } catch {
    return false;
  }
}

async function verifyTurnstile(token: string, ip: string, secret: string): Promise<boolean> {
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const isProduction = process.env.NODE_ENV === "production";

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({ error: "Inquiry service is not configured yet. Please try again later." }, { status: 503 });

  // In production, anti-abuse controls must be configured before accepting submissions.
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  const antiAbuseConfigured = Boolean(turnstileSecret && upstashUrl && upstashToken);
  if (isProduction && !antiAbuseConfigured) {
    return NextResponse.json({ error: "Inquiry service is not fully configured. Please try again later." }, { status: 503 });
  }

  if (Number(request.headers.get("content-length") || 0) > MAX_BODY) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  let payload: Record<string, unknown>;
  try { const raw = await request.text(); if (raw.length > MAX_BODY) throw Error(); payload = JSON.parse(raw); if (!payload || typeof payload !== "object" || Array.isArray(payload)) throw Error(); }
  catch { return NextResponse.json({ error: "Invalid inquiry." }, { status: 400 }); }

  // A hidden honeypot discourages basic bots without sending them real results.
  if (payload.website) return NextResponse.json({ reference: "RECEIVED" });

  // Persistent IP-based rate limiting (Upstash Redis). Fails open on store errors.
  if (upstashUrl && upstashToken && (await rateLimited(request))) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  // Cloudflare Turnstile challenge when configured.
  if (turnstileSecret) {
    const captchaToken = typeof payload["cf-turnstile-response"] === "string" ? payload["cf-turnstile-response"] : "";
    if (!captchaToken) return NextResponse.json({ error: "Please complete the security check." }, { status: 400 });
    const ok = await verifyTurnstile(captchaToken, clientIp(request), turnstileSecret);
    if (!ok) return NextResponse.json({ error: "Security check failed. Please try again." }, { status: 403 });
  }

  const values = Object.fromEntries(Object.entries(limits).map(([key, max]) => [key, clean(payload[key], max)]));
  const { date, origin, stops, passengers, contact } = values;
  if (payload.consent !== "yes" || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || date < new Date().toISOString().slice(0,10) || !origin || !stops || !contact || !/^\d{1,2}$/.test(passengers) || +passengers < 1 || +passengers > 50) return NextResponse.json({ error: "Please check your date, route, passenger count and contact information." }, { status: 400 });

  const reference = crypto.randomUUID().slice(0, 8).toUpperCase();
  const html = `<h2>Explore Shanxi inquiry ${reference}</h2><table>${Object.entries(values).map(([k,v]) => `<tr><th align="left">${safe(k)}</th><td>${safe(v)}</td></tr>`).join("")}</table><p>This is an inquiry, not a confirmed booking.</p>`;
  try {
    const result = await fetch("https://api.resend.com/emails", { method: "POST", headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], subject: `Explore Shanxi inquiry ${reference}`, html }), signal: AbortSignal.timeout(10000) });
    if (!result.ok) { console.error("Inquiry email provider failed", result.status); throw Error(); }
    return NextResponse.json({ reference }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch { return NextResponse.json({ error: "Unable to deliver your inquiry right now. Please try again later." }, { status: 502 }); }
}
