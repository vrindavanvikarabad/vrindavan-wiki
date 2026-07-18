import Hero from "../components/Hero";
import img from "../assets/ananthagiri-monsoon.jpg";

type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

// TODO — replace placeholder team data with real names, roles, photos, and bios.
const members: Member[] = [
  {
    name: "Partner name",
    role: "Co-founder",
    bio: "Short one-paragraph bio. Background, why they're part of Vrindavan, and what they bring to the place.",
  },
  {
    name: "Partner name",
    role: "Co-founder",
    bio: "Short one-paragraph bio.",
  },
  {
    name: "Partner name",
    role: "Co-founder",
    bio: "Short one-paragraph bio.",
  },
];

export default function Team() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Anantagiri Hills"
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
        <p className="mt-4 text-lg leading-relaxed text-earth-700">
          Below are the people most directly involved in shaping and running
          Vrindavan today.
        </p>

        <ul className="mt-16 grid gap-12 sm:grid-cols-2">
          {members.map((m, i) => (
            <li key={i} className="border-t border-earth-100 pt-8">
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="mb-6 aspect-square w-32 rounded-full object-cover"
                />
              ) : (
                <div className="mb-6 flex aspect-square w-32 items-center justify-center rounded-full bg-cream-100 font-serif text-3xl text-clay-500">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <h3 className="font-serif text-2xl font-light text-forest-800">
                {m.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-clay-500">
                {m.role}
              </p>
              <p className="mt-4 text-base leading-relaxed text-earth-500">
                {m.bio}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-20 border-t border-earth-100 pt-8 text-sm italic leading-relaxed text-earth-500">
          The team page is currently a placeholder. Names, roles, photos, and
          bios will be filled in shortly.
        </p>
      </article>
    </>
  );
}
