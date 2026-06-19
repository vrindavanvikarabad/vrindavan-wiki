import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Prose({ children }: Props) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20 sm:px-8 sm:py-24">
      <div
        className="
          prose prose-lg max-w-none
          prose-headings:font-serif prose-headings:font-light prose-headings:text-forest-800
          prose-h1:text-5xl prose-h1:leading-tight prose-h1:tracking-tight
          prose-h2:mt-16 prose-h2:text-4xl prose-h2:leading-tight prose-h2:tracking-tight
          prose-h3:mt-10 prose-h3:text-2xl prose-h3:font-normal prose-h3:text-forest-700
          prose-p:text-earth-700 prose-p:leading-relaxed
          prose-a:text-clay-600 prose-a:no-underline hover:prose-a:text-clay-500 prose-a:font-medium
          prose-strong:text-forest-800 prose-strong:font-semibold
          prose-li:text-earth-700 prose-li:leading-relaxed
          prose-img:rounded-sm prose-img:shadow-sm
          prose-hr:border-earth-100
        "
      >
        {children}
      </div>
    </article>
  );
}
