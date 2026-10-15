import { attractions } from "../data/attractions";

export interface RedirectRule {
  source: string;
  destination: string;
  permanent: boolean;
}

export function ticketRedirectRules(): RedirectRule[] {
  return attractions.map((attraction) => ({
    source: `/tickets/${attraction.slug}`,
    destination: `/attractions/${attraction.slug}`,
    permanent: true,
  }));
}
