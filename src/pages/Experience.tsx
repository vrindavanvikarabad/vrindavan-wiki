import Hero from "../components/Hero";
import Prose from "../components/Prose";
import Content from "../content/Experience.mdx";
import img from "../assets/gallery/sunset-over-the-grounds.jpg";

export default function Experience() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="The sun setting over the orchard at Vrindavan"
        eyebrow="What you can do"
        title="Experience"
        subtitle="Workshops, retreats, work meetings, and quiet days — open to anyone whose intent fits the place."
        height="short"
        align="start"
      />
      <Prose>
        <Content />
      </Prose>
    </>
  );
}
