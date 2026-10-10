import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import type { NextRequest } from "next/server";
import { POST } from "./route";

function makeRequest(body: unknown) {
  const raw = typeof body === "string" ? body : JSON.stringify(body);
  return new Request("http://localhost/api/inquiries", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: raw,
  }) as unknown as NextRequest;
}

const VALID = {
  date: "2099-12-01",
  origin: "Datong South Station",
  stops: "Yungang Grottoes, Hanging Temple",
  passengers: "2",
  contact: "traveler@example.com",
  consent: "yes",
};

beforeEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.stubEnv("RESEND_API_KEY", "test-key");
  vi.stubEnv("INQUIRY_FROM_EMAIL", "Explore Shanxi <inquiries@example.com>");
  vi.stubEnv("INQUIRY_TO_EMAIL", "operator@example.com");
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("POST /api/inquiries", () => {
  it("returns 503 when the email service is not configured", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    vi.stubEnv("INQUIRY_FROM_EMAIL", "");
    vi.stubEnv("INQUIRY_TO_EMAIL", "");
    const res = await POST(makeRequest(VALID));
    expect(res.status).toBe(503);
    const body = await res.json();
    expect(body.error).toContain("not configured");
  });

  it("returns 201 with a reference on a valid submission", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ id: "email-id" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest(VALID));
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.reference).toMatch(/^[A-Z0-9]{8}$/);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns 400 when consent is missing", async () => {
    const res = await POST(makeRequest({ ...VALID, consent: undefined }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for a past date", async () => {
    const res = await POST(makeRequest({ ...VALID, date: "2020-01-01" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for a passenger count out of range", async () => {
    const res = await POST(makeRequest({ ...VALID, passengers: "99" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 when required fields are empty", async () => {
    const res = await POST(makeRequest({ ...VALID, origin: "", stops: "" }));
    expect(res.status).toBe(400);
  });

  it("returns 200 with a fake reference when the honeypot is triggered", async () => {
    const res = await POST(makeRequest({ ...VALID, website: "http://spam.example" }));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.reference).toBe("RECEIVED");
  });

  it("returns 413 for an oversized body", async () => {
    const oversizedReq = {
      headers: { get: (name: string) => (name === "content-length" ? "13000" : null) },
      text: async () => "x".repeat(13_000),
    } as unknown as NextRequest;
    const res = await POST(oversizedReq);
    expect(res.status).toBe(413);
  });

  it("returns 502 when the email provider fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("", { status: 500 })));
    const res = await POST(makeRequest(VALID));
    expect(res.status).toBe(502);
  });

  it("escapes HTML in the email body to prevent XSS", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ id: "email-id" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await POST(makeRequest({ ...VALID, notes: '<script>alert("x")</script>' }));

    const [, init] = fetchMock.mock.calls[0] as [string, { body: string }];
    const sent = JSON.parse(init.body);
    expect(sent.html).toContain("&lt;script&gt;");
    expect(sent.html).not.toContain("<script>");
  });

  it("does not echo raw input back in error responses", async () => {
    const res = await POST(makeRequest({ ...VALID, passengers: "999" }));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(JSON.stringify(body)).not.toContain("999");
    expect(JSON.stringify(body)).not.toContain("traveler@example.com");
  });
});
