import type { ImageAsset } from "./image";
import type { Source } from "./source";
import type { VerificationStatus } from "./verification";
import type { FAQItem, KeyFact, QuickAnswer } from "./shared";

export type PrefectureId =
  | "taiyuan"
  | "datong"
  | "jinzhong"
  | "xinzhou"
  | "linfen"
  | "yuncheng"
  | "jincheng"
  | "changzhi"
  | "lvliang"
  | "shuozhou"
  | "yangquan";

export interface Destination {
  slug: string;
  name_en: string;
  name_zh: string;
  prefecture: PrefectureId;
  tagline: string;
  summary: string;
  recommended_stay: string | null;
  major_attractions: string[];
  transport_hint: string | null;
  hero_image: ImageAsset;
  quick_answer: QuickAnswer | null;
  key_facts: KeyFact[];
  faq: FAQItem[];
  sources: Source[];
  last_verified: string | null;
  verification_status: VerificationStatus;
}
