import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { navItems } from "../navItems";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Pages that have a full-bleed hero — header overlays with transparency
  const overlayRoutes = ["/", "/about", "/space", "/experience", "/location"];
  const hasHero = overlayRoutes.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid when: scrolled, mobile menu open, or page has no hero
  const solid = scrolled || open || !hasHero;

  const wrapClass = solid
    ? "bg-cream-50/95 backdrop-blur border-b border-earth-100"
    : "bg-transparent border-b border-transparent";

  const brandClass = solid ? "text-forest-800" : "text-white";
  const navClass = solid ? "text-earth-700" : "text-cream-100";
  const iconClass = solid ? "text-forest-800" : "text-white";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-2 text-sm tracking-wide transition-colors ${
      isActive
        ? solid
          ? "text-forest-800 font-medium"
          : "text-white font-medium"
        : `${navClass} hover:${solid ? "text-forest-800" : "text-white"}`
    } ${
      isActive
        ? `after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px ${
            solid ? "after:bg-clay-500" : "after:bg-cream-100"
          }`
        : ""
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${wrapClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          to="/"
          className={`flex items-baseline gap-2 transition-colors ${brandClass}`}
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-2xl font-normal tracking-wide">
            Vrindavan
          </span>
          <span
            className={`hidden sm:inline text-[10px] font-medium uppercase tracking-[0.3em] ${
              solid ? "text-clay-500" : "text-cream-200"
            }`}
          >
            Anantagiri
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`md:hidden inline-flex items-center justify-center rounded-md p-2 ${iconClass}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-earth-100 bg-cream-50" aria-label="Mobile">
          <ul className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block rounded-sm px-3 py-3 text-base ${
                      isActive
                        ? "text-forest-800 font-medium"
                        : "text-earth-700 hover:bg-cream-100"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
