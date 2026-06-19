import { Link } from "react-router-dom";

type Props = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  description: string;
  to: string;
};

export default function FeatureCard({
  image,
  imageAlt = "",
  eyebrow,
  title,
  description,
  to,
}: Props) {
  return (
    <Link
      to={to}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-500 focus-visible:ring-offset-4 focus-visible:ring-offset-cream-50"
    >
      <div className="overflow-hidden rounded-sm">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      {eyebrow && (
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-clay-500">
          {eyebrow}
        </p>
      )}
      <h3 className="mt-2 font-serif text-2xl font-light text-forest-800 group-hover:text-forest-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-earth-500">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest-700 group-hover:text-clay-600">
        Read more
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7.05 4.05a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 10 7.05 5.464a1 1 0 010-1.414z" />
        </svg>
      </span>
    </Link>
  );
}
