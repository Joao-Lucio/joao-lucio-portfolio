export interface HeaderNavigationItem {
  key: string;
  href: `#${string}`;
}

export const headerNavigationItems: HeaderNavigationItem[] = [
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];
