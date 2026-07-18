import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Space from "./pages/Space";
import Experience from "./pages/Experience";
import Location from "./pages/Location";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Credits from "./pages/Credits";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="space" element={<Space />} />
        <Route path="experience" element={<Experience />} />
        <Route path="location" element={<Location />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="team" element={<Team />} />
        <Route path="credits" element={<Credits />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
