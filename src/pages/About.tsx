import Hero from "../components/Hero";
import Prose from "../components/Prose";
import Content from "../content/About.mdx";
import img from "../assets/ananthagiri-monsoon.jpg";

export default function About() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Ananthagiri Hills on a quiet monsoon day"
        eyebrow="The story"
        title="About Vrindavan"
        subtitle="A collective effort, shaped by people from different walks of life with a shared purpose."
        height="short"
        align="start"
      />
      <Prose>
        <Content />
      </Prose>
    </>
  );
}
