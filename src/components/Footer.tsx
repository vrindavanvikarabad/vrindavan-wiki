import { Link } from "react-router-dom";
import { navItems } from "../navItems";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-earth-100 bg-forest-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl font-light tracking-wide text-cream-50">
              Vrindavan
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-clay-400">
              Anantagiri Hills
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-100/80">
              A 3.5-acre sanctuary for silence, learning, and inner connection —
              shaped by a community of seekers, makers, and quiet thinkers.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-clay-400">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-cream-100/80 transition-colors hover:text-cream-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-clay-400">
              Visit
            </h3>
            <address className="mt-5 not-italic text-sm leading-relaxed text-cream-100/80">
              Anantagiri Palle Village
              <br />
              Vikarabad District, Telangana
              <br />
              ~70 km from Hyderabad
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream-100/10 pt-8 text-xs text-cream-100/50 sm:flex-row sm:items-center">
          <p>&copy; {year} Project Vrindavan</p>
          <div className="flex items-center gap-4">
            <Link
              to="/credits"
              className="text-cream-100/70 hover:text-cream-50"
            >
              Image credits
            </Link>
            <span className="italic">A collective effort, not a commercial venture.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
