import type { ReactNode } from "react";

type Props = {
  title?: string;
  variant?: "info" | "quote" | "tip";
  children: ReactNode;
};

const STYLES = {
  info: {
    border: "border-forest-200",
    bg: "bg-forest-50",
    title: "text-forest-700",
    body: "text-forest-900",
  },
  quote: {
    border: "border-clay-400",
    bg: "bg-cream-100",
    title: "text-clay-600",
    body: "text-earth-700 italic font-serif text-xl leading-snug",
  },
  tip: {
    border: "border-clay-300",
    bg: "bg-cream-100",
    title: "text-clay-600",
    body: "text-earth-700",
  },
};

export default function Callout({ title, variant = "info", children }: Props) {
  const s = STYLES[variant];
  return (
    <aside
      className={`my-10 rounded-sm border-l-2 ${s.border} ${s.bg} px-6 py-5 not-prose`}
    >
      {title && (
        <p
          className={`mb-2 text-xs font-medium uppercase tracking-[0.25em] ${s.title}`}
        >
          {title}
        </p>
      )}
      <div className={s.body}>{children}</div>
    </aside>
  );
}
