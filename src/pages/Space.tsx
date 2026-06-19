import Hero from "../components/Hero";
import Prose from "../components/Prose";
import Content from "../content/Space.mdx";
import img from "../assets/banyan-tree-ananthagiri.jpg";

export default function Space() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Banyan tree in the forest near the Padmanabha temple, Vikarabad"
        eyebrow="The land and the buildings"
        title="The space"
        subtitle="Three and a half acres of native forest, mud architecture, and open ground."
        height="short"
        align="start"
      />
      <Prose>
        <Content />
      </Prose>
    </>
  );
}
