import { destinations } from "@/data/destinations";
import { attractions } from "@/data/attractions";
import { transportRoutes } from "@/data/transport-routes";
import { blackMythLocations } from "@/data/black-myth";
import { travelEssentials } from "@/data/travel-essentials";

export function getAllDestinations() {
  return destinations;
}

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationSlugs() {
  return destinations.map((d) => d.slug);
}

export function getAllAttractions() {
  return attractions;
}

export function getAttractionBySlug(slug: string) {
  return attractions.find((a) => a.slug === slug);
}

export function getAttractionSlugs() {
  return attractions.map((a) => a.slug);
}

export function getAttractionsBySlugs(slugs: string[]) {
  return attractions.filter((a) => slugs.includes(a.slug));
}

export function getAllTransportRoutes() {
  return transportRoutes;
}

export function getTransportRouteBySlug(slug: string) {
  return transportRoutes.find((r) => r.slug === slug);
}

export function getTransportRouteSlugs() {
  return transportRoutes.map((r) => r.slug);
}

export function getBlackMythLocations() {
  return blackMythLocations;
}

export function getAllTravelEssentials() {
  return travelEssentials;
}

export function getTravelEssentialBySlug(slug: string) {
  return travelEssentials.find((e) => e.slug === slug);
}

export function getTravelEssentialSlugs() {
  return travelEssentials.map((e) => e.slug);
}
