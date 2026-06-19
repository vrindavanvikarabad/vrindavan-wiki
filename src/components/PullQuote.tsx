import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  attribution?: string;
};

export default function PullQuote({ children, attribution }: Props) {
  return (
    <figure className="my-12 border-l-2 border-clay-400 pl-6 sm:pl-8 not-prose">
      <blockquote className="font-serif text-2xl font-light leading-snug text-forest-800 sm:text-3xl md:text-4xl">
        <span className="text-clay-500">&ldquo;</span>
        {children}
        <span className="text-clay-500">&rdquo;</span>
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-earth-500">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
