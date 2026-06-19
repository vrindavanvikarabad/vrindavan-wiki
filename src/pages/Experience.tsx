import Hero from "../components/Hero";
import Prose from "../components/Prose";
import Content from "../content/Experience.mdx";
import img from "../assets/ananthagiri-trekking.jpg";

export default function Experience() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Forest trail in the Ananthagiri trekking area"
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
