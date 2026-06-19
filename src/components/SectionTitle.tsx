import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "start";
};

export default function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "center",
}: Props) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-clay-500">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-light leading-tight text-forest-800 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-earth-500">{intro}</p>
      )}
    </header>
  );
}
