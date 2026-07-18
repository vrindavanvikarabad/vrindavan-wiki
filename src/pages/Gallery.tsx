import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import { galleryImages } from "../galleryImages";

export default function Gallery() {
  return (
    <>
      <Hero
        image={galleryImages[0].src}
        imageAlt="The Mattillu at Vrindavan"
        eyebrow="In pictures"
        title="Gallery"
        subtitle="The Mattillu, the amphitheatre, the gardens, and the grounds — as they are today."
        height="short"
        align="start"
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <Carousel slides={galleryImages} aspectClass="aspect-[16/10]" />

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((img) => (
            <figure key={img.src} className="break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full rounded-md"
              />
              <figcaption className="mt-1.5 text-xs text-earth-500">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
