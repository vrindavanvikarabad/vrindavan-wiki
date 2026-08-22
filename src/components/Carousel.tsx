import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Slide = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  slides: Slide[];
  /**
   * Height of the slide frame. Keep it taller on small screens: the frame is
   * as wide as the viewport there, so a wide ratio leaves very little height.
   */
  aspectClass?: string;
  autoplay?: boolean;
  showThumbs?: boolean;
};

export default function Carousel({
  slides,
  aspectClass = "aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10]",
  autoplay = true,
  showThumbs = true,
}: Props) {
  const autoplayPlugin = autoplay
    ? [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 30 },
    autoplayPlugin,
  );
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onThumbClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const i = emblaApi.selectedScrollSnap();
      setSelectedIndex(i);
      thumbsApi?.scrollTo(i);
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, thumbsApi]);

  return (
    <div className="not-prose">
      <div className="group relative overflow-hidden rounded-lg shadow-md">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((s) => (
              <div key={s.src + s.alt} className="min-w-0 flex-[0_0_100%]">
                <figure
                  className={`relative overflow-hidden bg-cream-100 ${aspectClass}`}
                >
                  {/* Blurred fill behind the photo, so portrait and landscape
                      frames both sit in the same slot without letterbox bars
                      — and without cropping the photo itself. */}
                  <img
                    src={s.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover blur-2xl"
                  />
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="relative h-full w-full object-contain"
                  />
                  {s.caption && (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-6 pb-5 pt-16 text-sm font-medium text-cream-50 sm:text-base">
                      {s.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / next — fade in on hover (still tappable on touch) */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-forest-800 shadow-lg backdrop-blur transition-all hover:bg-white sm:left-4 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M12.95 15.95a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 10l4.536 4.536a1 1 0 010 1.414z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-forest-800 shadow-lg backdrop-blur transition-all hover:bg-white sm:right-4 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.05 4.05a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 10 7.05 5.464a1 1 0 010-1.414z" />
          </svg>
        </button>

        {/* Slide counter */}
        <div className="absolute right-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur sm:right-4 sm:top-4">
          {selectedIndex + 1} / {slides.length}
        </div>
      </div>

      {/* Thumbnails */}
      {showThumbs && (
        <div className="mt-3 overflow-hidden" ref={thumbsRef}>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={"thumb" + s.src}
                type="button"
                onClick={() => onThumbClick(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`relative min-w-0 flex-[0_0_18%] overflow-hidden rounded-md transition-opacity sm:flex-[0_0_12%] ${
                  i === selectedIndex
                    ? "opacity-100 ring-2 ring-clay-500"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={s.src}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
