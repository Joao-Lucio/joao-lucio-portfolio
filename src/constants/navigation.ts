export interface HeaderNavigationItem {
  key: string;
  href: `#${string}`;
}

export const headerNavigationItems: HeaderNavigationItem[] = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];
