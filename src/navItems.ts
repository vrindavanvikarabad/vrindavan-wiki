export type NavItem = {
  to: string;
  label: string;
};

export const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/space", label: "The Space" },
  { to: "/experience", label: "Experience" },
  { to: "/location", label: "Location" },
];
