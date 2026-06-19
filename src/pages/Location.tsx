import Hero from "../components/Hero";
import Prose from "../components/Prose";
import Content from "../content/Location.mdx";
import img from "../assets/padmanabha-temple.jpg";

export default function Location() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Anantha Padmanabha Swamy temple in Vikarabad"
        eyebrow="Around Anantagiri"
        title="Location"
        subtitle="Temples, forests, viewpoints, and the source of the Muchukunda — most within an hour's reach."
        height="short"
        align="start"
      />
      <Prose>
        <Content />
      </Prose>
    </>
  );
}
