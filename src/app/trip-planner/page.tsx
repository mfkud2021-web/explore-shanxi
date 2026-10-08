import type { Metadata } from "next";
import { RoutePlanner } from "@/components/tools/RoutePlanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shanxi Trip Planner",
  description:
    "Plan a Shanxi route between Beijing, Datong, Taiyuan, Pingyao and Xi'an. Get a sample itinerary based on your days and interests.",
  path: "/trip-planner",
});

export default function TripPlannerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Shanxi Trip Planner
        </h1>
        <p className="mt-3 text-lg text-muted">
          Build a sample route through Shanxi based on where you are starting and
          ending, and how long you have.
        </p>
      </header>

      <div className="mt-10">
        <RoutePlanner />
      </div>
    </div>
  );
}
