import type { Source } from "./source";
import type { VerificationStatus } from "./verification";

export interface GuideSection {
  heading: string;
  body: string;
}

export interface RelatedGuide {
  label: string;
  href: string;
}

export interface EssentialGuide {
  slug: string;
  title: string;
  description: string;
  sections: GuideSection[];
  related?: RelatedGuide[];
  sources: Source[];
  last_verified: string | null;
  verification_status: VerificationStatus;
}
