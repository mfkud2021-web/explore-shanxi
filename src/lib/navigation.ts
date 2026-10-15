export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Destinations", href: "/destinations" },
  { label: "Attractions", href: "/attractions" },
  { label: "Trip Planner", href: "/trip-planner" },
  { label: "Local Transport", href: "/private-driver" },
  { label: "Tickets", href: "/tickets" },
  { label: "Transport", href: "/transport" },
  { label: "Black Myth", href: "/black-myth-wukong" },
  { label: "Travel Essentials", href: "/travel-essentials" },
];
