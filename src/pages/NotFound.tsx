import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40 pb-32 text-center sm:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-500">
        Lost in the silence
      </p>
      <h1 className="mt-6 font-serif text-7xl font-light text-forest-800 sm:text-8xl">
        404
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-earth-500">
        This page wandered off the trail. Perhaps it's resting under a tree
        somewhere.
      </p>
      <Link
        to="/"
        className="mt-10 inline-block rounded-full bg-forest-700 px-6 py-3 text-sm font-medium tracking-wide text-cream-50 hover:bg-forest-800"
      >
        Return home
      </Link>
    </div>
  );
}
