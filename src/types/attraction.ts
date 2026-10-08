import type { ImageAsset } from "./image";
import type { Source } from "./source";
import type { VerificationStatus } from "./verification";
import type { FAQItem } from "./shared";
import type { PrefectureId } from "./destination";

export type AttractionCategory =
  | "ancient-architecture"
  | "temple"
  | "museum"
  | "unesco"
  | "historic-city"
  | "scenic-area"
  | "buddhist-site"
  | "black-myth";

export interface TicketPrice {
  amount: string;
  currency: "CNY";
  note: string | null;
}

export interface Attraction {
  name_en: string;
  name_zh: string;
  slug: string;
  city: string;
  region: PrefectureId;
  category: AttractionCategory;
  short_description: string;
  description: string;
  latitude: number | null;
  longitude: number | null;
  opening_hours: string | null;
  ticket_price: TicketPrice | null;
  reservation_required: boolean | null;
  reservation_method: string | null;
  passport_policy: string | null;
  foreign_visitor_notes: string | null;
  official_ticket_url: string | null;
  official_website: string | null;
  nearest_railway_station: string | null;
  transportation: string | null;
  recommended_visit_duration: string | null;
  best_time_to_visit: string | null;
  accessibility: string | null;
  last_verified: string | null;
  verification_status: VerificationStatus;
  official_sources: Source[];
  related_attractions: string[];
  black_myth_related: boolean;
  black_myth_notes: string | null;
  image: ImageAsset;
  faq: FAQItem[];
}
