import type { Source } from "./source";
import type { PrefectureId } from "./destination";

export type ConnectionStatus = "verified" | "unverified" | "rumored";

export interface BlackMythLocation {
  slug: string;
  game_location: string;
  real_location_en: string;
  real_location_zh: string;
  city: PrefectureId;
  can_visit: boolean | null;
  connection_status: ConnectionStatus;
  ticket_info: string | null;
  how_to_get_there: string | null;
  related_attraction_slug: string | null;
  latitude: number | null;
  longitude: number | null;
  notes: string | null;
  sources: Source[];
  last_verified: string | null;
}
