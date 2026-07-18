import { useEffect, useState, type ReactNode } from "react";

type Props = {
  image: string;
  imageAlt?: string;
  /** Optional extra images to cross-fade through, after the first. */
  images?: string[];
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
  images,
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

  // Full set of background images (the primary one first).
  const slides = images && images.length > 0 ? [image, ...images] : [image];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
    // slides.length is stable for a given page render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  return (
    <section className={`relative w-full ${heightClass} flex ${alignClass} overflow-hidden`}>
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? imageAlt : ""}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
        />
      ))}
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
