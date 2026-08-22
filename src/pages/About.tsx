import Hero from "../components/Hero";
import Prose from "../components/Prose";
import Content from "../content/About.mdx";
import img from "../assets/gallery/mattillu-approach.jpg";

export default function About() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="The Mattillu, the mud house at the heart of Vrindavan"
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
