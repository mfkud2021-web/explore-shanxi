import type { VerificationStatus } from "@/types";

export const NOT_VERIFIED = "Not verified yet";

export function formatVerified(value: string | null | undefined): string {
  if (value === null || value === undefined || value === "") return NOT_VERIFIED;
  return value;
}

export function formatDate(iso: string | null | undefined): string {
  if (!iso) return NOT_VERIFIED;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const VERIFICATION_LABELS: Record<VerificationStatus, string> = {
  verified: "Verified",
  unverified: "Not verified",
  pending: "Pending verification",
  outdated: "Outdated — may have changed",
};

export const SOURCE_LEVEL_LABELS: Record<number, string> = {
  1: "Official / Government",
  2: "Major travel platform",
  3: "Trusted travel media",
  4: "Traveller experience",
};

export const CATEGORY_LABELS: Record<string, string> = {
  "ancient-architecture": "Ancient Architecture",
  temple: "Temple",
  museum: "Museum",
  unesco: "UNESCO World Heritage",
  "historic-city": "Historic City",
  "scenic-area": "Scenic Area",
  "buddhist-site": "Buddhist Site",
  "black-myth": "Black Myth",
};
