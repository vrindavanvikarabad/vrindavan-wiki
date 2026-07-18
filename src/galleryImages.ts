// Single source of truth for every photo used across the site's carousels
// and gallery. Import from here rather than importing image files directly
// in pages, so photos are managed in one place.

import mattilluFront from "./assets/gallery/mattillu-front.jpg";
import mattilluGarden from "./assets/gallery/mattillu-garden.jpg";
import mattilluSide from "./assets/gallery/mattillu-side.jpg";
import mattilluEvening from "./assets/gallery/mattillu-evening.jpg";
import mattilluApproach from "./assets/gallery/mattillu-approach.jpg";
import amphiSeating from "./assets/gallery/amphitheatre-seating.jpg";
import amphiWall from "./assets/gallery/amphitheatre-wall.jpg";
import amphiWide from "./assets/gallery/amphitheatre-wide.jpg";
import zenBuddha from "./assets/gallery/zen-buddha.jpg";
import zenGarden from "./assets/gallery/zen-garden.jpg";
import zenBambooStatue from "./assets/gallery/zen-bamboo-statue.jpg";
import tropicalBamboo from "./assets/gallery/tropical-bamboo.jpg";
import tropicalBed from "./assets/gallery/tropical-bed.jpg";
import pond from "./assets/gallery/pond.jpg";
import playSwings from "./assets/gallery/play-swings.jpg";
import playSeesaw from "./assets/gallery/play-seesaw.jpg";
import stoneMonolith from "./assets/gallery/stone-monolith.jpg";
import pavedGarden from "./assets/gallery/paved-garden.jpg";
import pavedCircle from "./assets/gallery/paved-circle.jpg";
import floweringFeature from "./assets/gallery/flowering-feature.jpg";
import steppingPath from "./assets/gallery/stepping-path.jpg";
import fruit1 from "./assets/gallery/fruit-1.jpg";
import fruit2 from "./assets/gallery/fruit-2.jpg";
import plantPride from "./assets/gallery/plant-pride.jpg";

export type GalleryCategory =
  | "mattillu"
  | "amphitheatre"
  | "zen"
  | "tropical"
  | "pond"
  | "play"
  | "stone"
  | "garden"
  | "plants";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  // Mattillu
  {
    src: mattilluFront,
    alt: "The Mattillu mud house, front view",
    caption: "The Mattillu — the two-storey mud house at the heart of Vrindavan",
    category: "mattillu",
  },
  {
    src: mattilluGarden,
    alt: "The Mattillu seen across the garden",
    caption: "The Mattillu, with its terracotta jali brickwork, across the garden",
    category: "mattillu",
  },
  {
    src: mattilluSide,
    alt: "The Mattillu from the pathway",
    caption: "The Mattillu from the approach path",
    category: "mattillu",
  },
  {
    src: mattilluEvening,
    alt: "The Mattillu under an evening sky",
    caption: "The Mattillu under a monsoon sky",
    category: "mattillu",
  },
  {
    src: mattilluApproach,
    alt: "Approaching the Mattillu",
    caption: "Approaching the Mattillu through the grounds",
    category: "mattillu",
  },

  // Amphitheatre
  {
    src: amphiSeating,
    alt: "Amphitheatre tiered seating",
    caption: "The open amphitheatre, with tiered stone seating",
    category: "amphitheatre",
  },
  {
    src: amphiWall,
    alt: "Amphitheatre stone wall",
    caption: "The amphitheatre's curved stone wall",
    category: "amphitheatre",
  },
  {
    src: amphiWide,
    alt: "Amphitheatre and grounds",
    caption: "The amphitheatre set into the landscape",
    category: "amphitheatre",
  },

  // Zen garden
  {
    src: zenBuddha,
    alt: "Stone Buddha in the zen garden",
    caption: "A stone Buddha among bamboo in the zen garden",
    category: "zen",
  },
  {
    src: zenGarden,
    alt: "The zen garden",
    caption: "The zen garden — gravel, stepping stones, and quiet corners",
    category: "zen",
  },
  {
    src: zenBambooStatue,
    alt: "Bamboo and statue in the zen garden",
    caption: "Bamboo and stone in the zen garden",
    category: "zen",
  },

  // Tropical garden
  {
    src: tropicalBamboo,
    alt: "Bamboo grove in the tropical garden",
    caption: "The bamboo grove in the tropical garden",
    category: "tropical",
  },
  {
    src: tropicalBed,
    alt: "Tropical planting bed",
    caption: "Tropical planting — banana, canna, and large-leaf species",
    category: "tropical",
  },

  // Pond
  {
    src: pond,
    alt: "The pond",
    caption: "The pond, from which the soil for the Mattillu was drawn",
    category: "pond",
  },

  // Play area
  {
    src: playSwings,
    alt: "Children's swings",
    caption: "Open play area for children",
    category: "play",
  },
  {
    src: playSeesaw,
    alt: "Children's see-saw",
    caption: "Room to run and play, away from screens",
    category: "play",
  },

  // Stone
  {
    src: stoneMonolith,
    alt: "Standing stone in a garden bed",
    caption: "A standing stone set among the plantings",
    category: "stone",
  },

  // Gardens / grounds
  {
    src: pavedGarden,
    alt: "Paved garden with lawn",
    caption: "Paved pathways threading through the lawns",
    category: "garden",
  },
  {
    src: pavedCircle,
    alt: "Circular paved feature",
    caption: "A circular gathering spot among the greens",
    category: "garden",
  },
  {
    src: floweringFeature,
    alt: "Flowering garden feature",
    caption: "Flowering beds around a stone feature",
    category: "garden",
  },
  {
    src: steppingPath,
    alt: "Stepping-stone path",
    caption: "A stepping-stone path through the gravel garden",
    category: "garden",
  },

  // Plants / fruit
  {
    src: plantPride,
    alt: "Broad-leaved plant in the gardens",
    caption: "One of over a hundred native species on the land",
    category: "plants",
  },
  {
    src: fruit1,
    alt: "Fruit tree in the orchard",
    caption: "Fruit ripening in the orchard",
    category: "plants",
  },
  {
    src: fruit2,
    alt: "Fruit tree close-up",
    caption: "Young fruit on one of the orchard trees",
    category: "plants",
  },
];

// Helper: get all images in one or more categories, in list order.
export function imagesByCategory(
  ...categories: GalleryCategory[]
): GalleryImage[] {
  return galleryImages.filter((img) => categories.includes(img.category));
}
