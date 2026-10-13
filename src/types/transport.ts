import type { Source } from "./source";
import type { VerificationStatus } from "./verification";
import type { FAQItem } from "./shared";

export type TransportRouteType = "intercity" | "last-mile";

export interface LastMileStep {
  title: string;
  detail: string;
}

export interface ReturnJourney {
  where_to_board: string;
  how_to_return: string;
  booking_requirement: string;
  last_departure: string;
  fallback: string;
  same_day_return: string;
}

export interface TransportRoute {
  slug: string;
  /** "intercity" = city→city rail leg; "last-mile" = station/hub → specific attraction. */
  route_type: TransportRouteType;
  from: string;
  from_zh: string | null;
  to: string;
  to_zh: string | null;
  // Intercity fields
  recommended_transport: string | null;
  approximate_duration: string | null;
  departure_station: string | null;
  arrival_station: string | null;
  frequency: string | null;
  // Last-mile fields
  summary?: string | null;
  steps?: LastMileStep[];
  public_transport?: string | null;
  taxi_backup?: string | null;
  return_journey?: ReturnJourney | null;
  tips?: string[];
  attraction_slug?: string | null;
  // Shared
  notes: string[];
  faq?: FAQItem[];
  sources: Source[];
  last_verified: string | null;
  verification_status: VerificationStatus;
}
