import { Link } from "react-router-dom";
import banner from "../assets/vrindavan-banner.jpeg";
import hills from "../assets/ananthagiri-hills.jpg";
import banyan from "../assets/banyan-tree-ananthagiri.jpg";
import monsoon from "../assets/ananthagiri-monsoon.jpg";
import trekking from "../assets/ananthagiri-trekking.jpg";
import temple from "../assets/padmanabha-temple.jpg";
import mattilluGarden from "../assets/gallery/mattillu-garden.jpg";
import zenBuddha from "../assets/gallery/zen-buddha.jpg";
import amphiSeating from "../assets/gallery/amphitheatre-seating.jpg";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SectionTitle from "../components/SectionTitle";
import PullQuote from "../components/PullQuote";
import FeatureCard from "../components/FeatureCard";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero
        image={banner}
        imageAlt="Sacred tree at Project Vrindavan with Anantagiri Hills behind"
        images={[mattilluGarden, zenBuddha, amphiSeating, hills]}
        eyebrow="Anantagiri Hills · Telangana"
        title={<>A place for silence,<br />learning, and focus.</>}
        subtitle="Three and a half acres at the foothills of Anantagiri, where the Muchukunda is said to take its sacred birth — about seventy kilometres from Hyderabad."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTA to="/about">About Vrindavan</CTA>
          <CTA to="/experience" variant="ghost">
            What you can do here
          </CTA>
        </div>
      </Hero>

      {/* Intro */}
      <section className="bg-cream-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-500">
            A collective effort
          </p>
          <p className="mt-8 font-serif text-2xl font-light leading-relaxed text-forest-900 sm:text-3xl md:text-4xl">
            Vrindavan is not a resort or a retreat business. It is a 3.5-acre
            piece of land — artistically, aesthetically, and ecologically
            treated — shaped by a small group of partners as a shared space
            for silence, learning, and meaningful work.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-earth-100 bg-cream-100 py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <Stats
            items={[
              { value: "3.5", label: "Acres" },
              { value: "1000+", label: "Plants" },
              { value: "100+", label: "Native species" },
              { value: "70 km", label: "From Hyderabad" },
            ]}
          />
        </div>
      </section>

      {/* Image-and-text — The Land & lineage */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="order-2 md:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-500">
                The location
              </p>
              <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-forest-800 sm:text-4xl md:text-5xl">
                Between Shiva and Vishnu.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-earth-700">
                Vrindavan sits at the foothills of Anantagiri, between two
                ancient temples — the swayambhu Anantha Padmanabhaswamy
                (Vishnu) and Bugga Ramalingeshwara Swamy (Shiva). It is here,
                between them, that the Muchukunda — the river later known as
                the Musi — is believed to take its sacred birth.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-earth-700">
                The land was treated as per Vastu, with devotional processes
                during construction. Over a thousand plants of more than a
                hundred native species — from simsupa and bilva to rudraksha,
                avocado and cacao — were planted to retain and multiply the
                natural energy of the place.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={hills}
                alt="View from Ananthagiri Hills across the surrounding plains"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote — full width */}
      <section className="bg-forest-900 py-24 text-cream-100 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-400">
            Our vision
          </p>
          <p className="mt-8 font-serif text-3xl font-light leading-snug text-cream-50 sm:text-4xl md:text-5xl">
            <span className="text-clay-400">&ldquo;</span>To create a space that
            nurtures silence, focus, and learning — in any form that benefits
            humanity.<span className="text-clay-400">&rdquo;</span>
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionTitle
            eyebrow="What we value"
            title="Three principles."
            intro="Most decisions at Vrindavan — from the way the buildings are made to the workshops we host — come back to these three."
          />

          <div className="mt-20 grid gap-y-12 gap-x-10 md:grid-cols-3">
            <Pillar
              number="01"
              title="Consciousness over comfort"
              body="Most retreats trade silence for indulgence. Here, comfort coexists with awareness — about food, water, electricity, and what it takes to keep the place going."
            />
            <Pillar
              number="02"
              title="Silence over noise"
              body="No loud music or piped speakers. The campus is a no-pollution, vehicle-free zone, so birdsong and wind do most of the talking."
            />
            <Pillar
              number="03"
              title="Return, not escape"
              body="Vrindavan isn't a way to escape reality. It's a way to return to focus, awareness, and a simpler rhythm."
            />
          </div>
        </div>
      </section>

      {/* Image and text — alternating: the garden */}
      <section className="bg-cream-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <img
                src={banyan}
                alt="Large banyan tree in the forest near the Padmanabha temple"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-sm"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-500">
                The garden
              </p>
              <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-forest-800 sm:text-4xl md:text-5xl">
                A living botanical archive.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-earth-700">
                More than a thousand plants grow on the property, of over a
                hundred native species — from sacred and heritage trees like
                banyan, peepal, bilva, neem and rudraksha to rare fruit and
                spice varieties: Miyazaki mango, jamun, avocado, cacao,
                vanilla, cinnamon, cardamom.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-earth-700">
                It isn't ornamental landscaping. It is, in effect, an archive
                of the trees that once filled traditional Indian homes,
                temples, and kitchens — and a quiet introduction to botany
                for any child who walks through it.
              </p>
              <Link
                to="/space"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-clay-600 hover:text-clay-500"
              >
                Explore the space
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7.05 4.05a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 10 7.05 5.464a1 1 0 010-1.414z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who comes here */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionTitle
            eyebrow="Who comes here"
            title="Two kinds of guests, often the same kind of need."
            intro="Whether it is a small team trying to think clearly, or a family wanting time together without a screen between them."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div className="rounded-sm border border-earth-100 bg-cream-100 p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-500">
                For teams
              </p>
              <h3 className="mt-4 font-serif text-2xl font-light text-forest-800 sm:text-3xl">
                Not the typical offsite.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-earth-700">
                Most corporate retreats are designed to entertain. This one is
                designed to let people think. Startups and small teams use
                Vrindavan for deep-work offsites, strategy days, and the kind
                of conversation that doesn't happen in a hotel boardroom.
              </p>
            </div>
            <div className="rounded-sm border border-earth-100 bg-cream-100 p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-500">
                For families
              </p>
              <h3 className="mt-4 font-serif text-2xl font-light text-forest-800 sm:text-3xl">
                Three generations, one place.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-earth-700">
                Unlike a resort — where there is rarely anything real to do
                with parents or grandparents — Vrindavan is built for time
                spent together. Children play freely in open ground; elders
                walk the gardens; everyone meets again at the meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <PullQuote>
            Under clear night skies and surrounded by silence, one can
            rediscover the calm that modern life often blurs.
          </PullQuote>
        </div>
      </section>

      {/* Explore — feature cards */}
      <section className="bg-cream-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionTitle
            eyebrow="Explore Vrindavan"
            title="Where to start."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              to="/about"
              eyebrow="The story"
              title="About Vrindavan"
              description="The origin of the place, the people behind it, and the values it runs on."
              image={monsoon}
              imageAlt="Anantagiri Hills on a misty monsoon day"
            />
            <FeatureCard
              to="/space"
              eyebrow="The land"
              title="The space"
              description="Mattillu, amphitheatre, residences, zen and tropical gardens, pond, and walking track."
              image={banyan}
              imageAlt="Banyan tree near the Padmanabha temple"
            />
            <FeatureCard
              to="/experience"
              eyebrow="What you can do"
              title="Experience"
              description="Workshops, retreats, team offsites — and one, two, and three-day itineraries to plan around."
              image={trekking}
              imageAlt="Forest trekking trail in Anantagiri"
            />
            <FeatureCard
              to="/location"
              eyebrow="Around us"
              title="Location"
              description="Temples, forest trails, viewpoints, and the source of the Muchukunda river."
              image={temple}
              imageAlt="Anantha Padmanabha Swamy temple at Anantagiri"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden">
        <img
          src={monsoon}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-900/85" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-400">
            Be part of it
          </p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-cream-50 sm:text-5xl md:text-6xl">
            Visit, conduct a workshop, or share the place with others.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream-100/80">
            Vrindavan grows through participation rather than promotion. If
            the place speaks to you, the most useful thing you can do is bring
            your work, your friends, or your time here.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTA to="/experience">Plan a visit</CTA>
            <CTA to="/about" variant="ghost">
              About us
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border-t border-earth-100 pt-8">
      <p className="font-serif text-sm font-medium tracking-widest text-clay-500">
        {number}
      </p>
      <h3 className="mt-4 font-serif text-2xl font-light leading-snug text-forest-800 sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-earth-500">{body}</p>
    </div>
  );
}
