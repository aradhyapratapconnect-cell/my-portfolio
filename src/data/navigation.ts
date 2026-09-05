import type { NavItem } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "My Journey" },
  { id: "it", label: "Class 10 IT" },
  { id: "portfolio", label: "Portfolio" },
  { id: "interests", label: "My Interests" },
  { id: "contact", label: "Contact" },
  { id: "github", label: "GitHub" },
];

/** Sub-sections inside the Portfolio section. */
export const PORTFOLIO_TABS: NavItem[] = [
  { id: "projects", label: "My Projects" },
  { id: "skills", label: "Skills" },
  { id: "github", label: "GitHub" },
];

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);