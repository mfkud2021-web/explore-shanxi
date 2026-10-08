import type { Source } from "./source";
import type { VerificationStatus } from "./verification";

export interface GuideSection {
  heading: string;
  body: string;
}

export interface EssentialGuide {
  slug: string;
  title: string;
  description: string;
  sections: GuideSection[];
  sources: Source[];
  last_verified: string | null;
  verification_status: VerificationStatus;
}
