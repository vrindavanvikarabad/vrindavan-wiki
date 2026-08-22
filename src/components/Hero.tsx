import { useEffect, useState, type ReactNode } from "react";

/**
 * A hero background frame. A full-bleed hero is much narrower than the
 * photograph on a phone, so anything off-centre — the bird on the left of the
 * banner, the sun low on one side — is cropped away unless the slide says
 * where its subject sits. `position` takes a Tailwind object-position class.
 */
type HeroImage = string | { src: string; position: string };

type Props = {
  image: HeroImage;
  imageAlt?: string;
  /** Optional extra images to cross-fade through, after the first. */
  images?: HeroImage[];
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  height?: "tall" | "short";
  align?: "center" | "start";
  /**
   * How much the photograph is darkened behind the text. "soft" keeps the
   * photo bright and leans on the text shadow for legibility.
   */
  scrim?: "soft" | "default";
  children?: ReactNode;
};

// Kept light so the photographs stay bright; the text below carries its own
// shadow, which does the legibility work a heavy overlay used to do.
const scrims = {
  soft: "bg-gradient-to-b from-black/25 via-black/5 to-black/45",
  default: "bg-gradient-to-b from-black/35 via-black/15 to-black/60",
};

// Applied to hero copy so white text stays readable over a bright sky.
const textShadow = "[text-shadow:0_1px_2px_rgb(0_0_0/0.35),0_2px_18px_rgb(0_0_0/0.45)]";

export default function Hero({
  image,
  imageAlt = "",
  images,
  eyebrow,
  title,
  subtitle,
  height = "tall",
  align = "center",
  scrim = "default",
  children,
}: Props) {
  // Shorter on phones: the frame is narrow there, so a very tall hero would
  // crop a landscape photograph down to a thin vertical strip.
  const heightClass =
    height === "tall"
      ? "min-h-[68vh] sm:min-h-[78vh] lg:min-h-[85vh]"
      : "min-h-[46vh] sm:min-h-[52vh] lg:min-h-[55vh]";
  const alignClass =
    align === "center" ? "items-center text-center" : "items-end text-left";

  // Full set of background images (the primary one first).
  const slides = [image, ...(images ?? [])].map((s) =>
    typeof s === "string" ? { src: s, position: "object-center" } : s,
  );
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
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={i === 0 ? imageAlt : ""}
          className={`absolute inset-0 h-full w-full object-cover ${slide.position} transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
        />
      ))}
      <div className={`absolute inset-0 ${scrims[scrim]}`} />
      <div
        className={`relative mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 ${
          align === "center" ? "" : "pb-16 sm:pb-20"
        }`}
      >
        <div className="animate-fade-up">
          {eyebrow && (
            <p
              className={`mb-5 text-xs font-medium uppercase tracking-[0.3em] text-cream-100 ${textShadow}`}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-serif font-light text-white leading-[1.05] tracking-tight ${textShadow} ${
              height === "tall"
                ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                : "text-4xl sm:text-5xl md:text-6xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 max-w-2xl text-lg text-cream-50 sm:text-xl mx-auto ${textShadow}`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
