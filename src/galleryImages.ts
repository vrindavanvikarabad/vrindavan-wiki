// Single source of truth for every photo used across the site's carousels
// and gallery. Import from here rather than importing image files directly
// in pages, so photos are managed in one place.
//
// Every photograph here is the project's own.
//
// Ordering note: a few frames are near-duplicates of each other (the two
// night shots of the Mattillu, the two sunrises over the plains, the two
// fruit close-ups, the two views of the golden gopuram). Within a category
// they are deliberately spaced apart so a slider never shows two of them
// back to back.

import mattilluFront from "./assets/gallery/mattillu-front.jpg";
import mattilluNameplate from "./assets/gallery/mattillu-nameplate.jpg";
import mattilluApproach from "./assets/gallery/mattillu-approach.jpg";
import mattilluTerraceSunrise from "./assets/gallery/mattillu-terrace-sunrise.jpg";
import mattilluAtNight from "./assets/gallery/mattillu-at-night.jpg";
import mattilluGarden from "./assets/gallery/mattillu-garden.jpg";
import mattilluMoonlit from "./assets/gallery/mattillu-moonlit.jpg";
import mattilluSide from "./assets/gallery/mattillu-side.jpg";
import mattilluEvening from "./assets/gallery/mattillu-evening.jpg";
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
import walkingTrack from "./assets/gallery/walking-track.jpg";
import pavedCircle from "./assets/gallery/paved-circle.jpg";
import steppingPath from "./assets/gallery/stepping-path.jpg";
import floweringFeature from "./assets/gallery/flowering-feature.jpg";
import plantPride from "./assets/gallery/plant-pride.jpg";
import badamTree from "./assets/gallery/badam-tree-canopy.jpg";
import fruit1 from "./assets/gallery/fruit-1.jpg";
import yellowBloom from "./assets/gallery/yellow-bloom.jpg";
import fruit2 from "./assets/gallery/fruit-2.jpg";
import sunriseOverPlains from "./assets/gallery/sunrise-over-the-plains.jpg";
import sunsetOverGrounds from "./assets/gallery/sunset-over-the-grounds.jpg";
import moonlitClouds from "./assets/gallery/moonlit-clouds.jpg";
import sunriseRedSun from "./assets/gallery/sunrise-red-sun.jpg";
import dawnDew from "./assets/gallery/dawn-dew.jpg";
import landEveningSun from "./assets/gallery/land-evening-sun.jpg";
import padmanabhaShrines from "./assets/gallery/anantha-padmanabha-shrines.jpg";
import buggaTemple from "./assets/gallery/bugga-ramalingeshwara-temple.jpg";
import padmanabhaGopuram from "./assets/gallery/anantha-padmanabha-gopuram.jpg";

export type GalleryCategory =
  | "mattillu"
  | "amphitheatre"
  | "zen"
  | "tropical"
  | "pond"
  | "play"
  | "stone"
  | "garden"
  | "plants"
  | "sky"
  | "temples";

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
    src: mattilluNameplate,
    alt: "The Mattillu nameplate beside the front door",
    caption: "మట్టిల్లు — the house of mud, named on the wall beside its door",
    category: "mattillu",
  },
  {
    src: mattilluApproach,
    alt: "Approaching the Mattillu",
    caption: "Approaching the Mattillu through the grounds",
    category: "mattillu",
  },
  {
    src: mattilluTerraceSunrise,
    alt: "Sunrise seen from the Mattillu terrace",
    caption: "Sunrise from the Mattillu terrace, over the orchard",
    category: "mattillu",
  },
  {
    src: mattilluAtNight,
    alt: "The Mattillu lit up at night",
    caption: "The Mattillu after dark, under a clouded night sky",
    category: "mattillu",
  },
  {
    src: mattilluGarden,
    alt: "The Mattillu seen across the garden",
    caption: "The Mattillu, with its terracotta jali brickwork, across the garden",
    category: "mattillu",
  },
  {
    src: mattilluMoonlit,
    alt: "The Mattillu under a full moon",
    caption: "A full moon over the Mattillu — the terrace is a favourite spot for stargazing",
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
    src: walkingTrack,
    alt: "Two people walking the track at Vrindavan",
    caption: "The walking track — long enough for a conversation, short enough for anyone",
    category: "garden",
  },
  {
    src: pavedCircle,
    alt: "Circular paved feature",
    caption: "A circular gathering spot among the greens",
    category: "garden",
  },
  {
    src: steppingPath,
    alt: "Stepping-stone path",
    caption: "A stepping-stone path through the gravel garden",
    category: "garden",
  },
  {
    src: floweringFeature,
    alt: "Flowering garden feature",
    caption: "Flowering beds around a stone feature",
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
    src: badamTree,
    alt: "Badam tree branches against a blue sky",
    caption: "The badam tree turning colour against a clear winter sky",
    category: "plants",
  },
  {
    src: fruit1,
    alt: "Fruit tree in the orchard",
    caption: "Fruit ripening in the orchard",
    category: "plants",
  },
  {
    src: yellowBloom,
    alt: "Yellow flower in bloom beside the path",
    caption: "A flowering shrub in bloom beside the walking track",
    category: "plants",
  },
  {
    src: fruit2,
    alt: "Fruit tree close-up",
    caption: "Young fruit on one of the orchard trees",
    category: "plants",
  },

  // Sky, sunrises, and the night
  {
    src: sunriseOverPlains,
    alt: "Sunrise over the plains beyond Vrindavan",
    caption: "Sunrise over the fields — the horizon is unobstructed in every direction",
    category: "sky",
  },
  {
    src: sunsetOverGrounds,
    alt: "Sunset over the grounds at Vrindavan",
    caption: "The sun going down over the young orchard",
    category: "sky",
  },
  {
    src: moonlitClouds,
    alt: "Moonlight through clouds above the bamboo",
    caption: "Moonlight breaking through cloud above the bamboo",
    category: "sky",
  },
  {
    src: sunriseRedSun,
    alt: "A red sun rising through winter haze",
    caption: "A red winter sun rising through the haze",
    category: "sky",
  },
  {
    src: dawnDew,
    alt: "Dew on a car window at sunrise",
    caption: "Dew at first light — winter mornings begin cold and clear",
    category: "sky",
  },
  {
    src: landEveningSun,
    alt: "Evening sun over the land",
    caption: "Evening light across the land",
    category: "sky",
  },

  // Temples nearby
  {
    src: padmanabhaShrines,
    alt: "Shrines at the Anantha Padmanabhaswamy temple",
    caption:
      "The Anantha Padmanabhaswamy temple — the swayambhu Vishnu shrine that gives Anantagiri its name",
    category: "temples",
  },
  {
    src: buggaTemple,
    alt: "The Bugga Ramalingeshwara Swamy temple",
    caption:
      "The Bugga Ramalingeshwara Swamy temple — an ancient Shiva temple with a natural spring inside",
    category: "temples",
  },
  {
    src: padmanabhaGopuram,
    alt: "The golden gopuram at the Anantha Padmanabhaswamy temple",
    caption: "The golden gopuram at Anantha Padmanabhaswamy, a few kilometres from Vrindavan",
    category: "temples",
  },
];

// Helper: get all images in one or more categories, in list order.
export function imagesByCategory(
  ...categories: GalleryCategory[]
): GalleryImage[] {
  return galleryImages.filter((img) => categories.includes(img.category));
}
