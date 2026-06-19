import type { ReactNode } from "react";

type Props = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  height?: "tall" | "short";
  align?: "center" | "start";
  children?: ReactNode;
};

export default function Hero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  height = "tall",
  align = "center",
  children,
}: Props) {
  const heightClass = height === "tall" ? "min-h-[85vh]" : "min-h-[55vh]";
  const alignClass =
    align === "center" ? "items-center text-center" : "items-end text-left";

  return (
    <section className={`relative w-full ${heightClass} flex ${alignClass} overflow-hidden`}>
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div
        className={`relative mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 ${
          align === "center" ? "" : "pb-16 sm:pb-20"
        }`}
      >
        <div className="animate-fade-up">
          {eyebrow && (
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-cream-200">
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-serif font-light text-white leading-[1.05] tracking-tight ${
              height === "tall"
                ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                : "text-4xl sm:text-5xl md:text-6xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-cream-100/90 sm:text-xl mx-auto">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
