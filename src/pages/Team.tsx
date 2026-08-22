import Hero from "../components/Hero";
import img from "../assets/gallery/land-evening-sun.jpg";

export default function Team() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Evening light across the land at Vrindavan"
        eyebrow="The team"
        title="The partners behind Vrindavan"
        subtitle="A small group of people from different walks of life, holding this place in common."
        height="short"
        align="start"
      />
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-lg leading-relaxed text-earth-700">
          Vrindavan is not run by a single owner or a company. It is held by a
          group of partners — friends and like-minded people from different
          professions and backgrounds — who came together around the idea of
          creating a space for silence, learning, and inner connection. Each
          partner contributes time, attention, and expertise; the place is
          shared, not owned.
        </p>
        <p className="mt-12 border-t border-earth-100 pt-8 text-sm italic leading-relaxed text-earth-500">
          Individual names, roles, and bios will be added here as the partners
          are ready to be listed.
        </p>
      </article>
    </>
  );
}
