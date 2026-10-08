import type { Source } from "./source";
import type { VerificationStatus } from "./verification";

export interface TransportRoute {
  slug: string;
  from: string;
  from_zh: string | null;
  to: string;
  to_zh: string | null;
  recommended_transport: string | null;
  approximate_duration: string | null;
  departure_station: string | null;
  arrival_station: string | null;
  frequency: string | null;
  notes: string[];
  sources: Source[];
  last_verified: string | null;
  verification_status: VerificationStatus;
}
