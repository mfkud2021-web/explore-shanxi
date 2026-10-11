export type Interest =
  | "ancient-architecture"
  | "black-myth"
  | "history"
  | "food"
  | "photography"
  | "unesco";

export interface RoutePlannerInput {
  origin: "beijing" | "shanghai" | "xian" | "other";
  days: 3 | 5 | 7 | 10;
  next: "xian" | "beijing" | "other";
  interests: Interest[];
}

export interface RouteStop {
  city: string;
  days: number;
  highlights: string[];
  note: string | null;
  transport: string | null;
}

export interface RoutePlan {
  stops: RouteStop[];
  total_days: number;
  disclaimer: string;
  contextNote: string | null;
}
