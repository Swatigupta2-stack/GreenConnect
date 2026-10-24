// Purpose vocabulary used across the app:
// 'shade' | 'fruits' | 'flowers' | 'biodiversity' | 'air-purification' | 'general'
// sunlight / water: 'low' | 'medium' | 'high'

const trees = [
  {
    id: "neem",
    name: "Neem",
    scientificName: "Azadirachta indica",
    minSpace: 150,
    sunlight: ["medium", "high"],
    water: ["low", "medium"],
    purposes: ["shade", "air-purification", "general"],
    growthRate: "Fast",
    matureHeight: "15-20 m",
    description: "A hardy, evergreen tree famed for its medicinal bark, leaves and oil. Extremely low-maintenance and drought-tolerant once established.",
    benefits: [
      "Natural pest-resistant properties",
      "Improves air quality",
      "Thrives in poor soil and dry conditions",
      "Provides dense shade"
    ]
  },
  {
    id: "rain-tree",
    name: "Rain Tree",
    scientificName: "Samanea saman",
    minSpace: 400,
    sunlight: ["high"],
    water: ["medium", "high"],
    purposes: ["shade", "biodiversity", "general"],
    growthRate: "Fast",
    matureHeight: "20-25 m",
    description: "A wide-canopied tree that closes its leaflets before rain, giving it its name. Excellent for large open spaces.",
    benefits: [
      "Massive umbrella-shaped canopy for shade",
      "Fast growth for quick green cover",
      "Attracts birds and pollinators"
    ]
  },
  {
    id: "indian-almond",
    name: "Indian Almond",
    scientificName: "Terminalia catappa",
    minSpace: 200,
    sunlight: ["medium", "high"],
    water: ["medium"],
    purposes: ["shade", "biodiversity", "general"],
    growthRate: "Medium",
    matureHeight: "15-25 m",
    description: "A coastal-tolerant tree with tiered, horizontal branches and attractive foliage that turns red before shedding.",
    benefits: [
      "Salt and wind tolerant — great near coasts",
      "Attractive year-round foliage",
      "Edible seeds"
    ]
  },
  {
    id: "gulmohar",
    name: "Gulmohar",
    scientificName: "Delonix regia",
    minSpace: 200,
    sunlight: ["high"],
    water: ["low", "medium"],
    purposes: ["flowers", "shade", "general"],
    growthRate: "Fast",
    matureHeight: "10-15 m",
    description: "Known as the 'flame tree' for its brilliant orange-red summer blooms. A popular ornamental tree.",
    benefits: [
      "Spectacular seasonal flowering",
      "Drought tolerant once mature",
      "Moderate shade with light canopy"
    ]
  },
  {
    id: "jamun",
    name: "Jamun",
    scientificName: "Syzygium cumini",
    minSpace: 150,
    sunlight: ["medium", "high"],
    water: ["medium", "high"],
    purposes: ["fruits", "shade", "biodiversity"],
    growthRate: "Medium",
    matureHeight: "15-20 m",
    description: "A dense evergreen fruit tree producing dark purple berries, valued for shade and traditional use.",
    benefits: [
      "Edible antioxidant-rich fruit",
      "Dense, long-lasting shade",
      "Supports local birds and wildlife"
    ]
  },
  {
    id: "guava",
    name: "Guava",
    scientificName: "Psidium guajava",
    minSpace: 50,
    sunlight: ["medium", "high"],
    water: ["medium"],
    purposes: ["fruits", "general"],
    growthRate: "Fast",
    matureHeight: "3-6 m",
    description: "A compact fruit tree ideal for small plots, community gardens, and home compounds.",
    benefits: [
      "Fruits within 2-3 years",
      "Needs very little space",
      "High vitamin-C fruit"
    ]
  },
  {
    id: "mango",
    name: "Mango",
    scientificName: "Mangifera indica",
    minSpace: 300,
    sunlight: ["high"],
    water: ["medium"],
    purposes: ["fruits", "shade", "general"],
    growthRate: "Medium",
    matureHeight: "10-30 m",
    description: "A beloved fruit tree that becomes a large shade tree at maturity, needing generous space to thrive.",
    benefits: [
      "Popular, high-value fruit",
      "Long lifespan (50+ years)",
      "Large mature canopy for shade"
    ]
  },
  {
    id: "drumstick",
    name: "Drumstick",
    scientificName: "Moringa oleifera",
    minSpace: 30,
    sunlight: ["high"],
    water: ["low", "medium"],
    purposes: ["fruits", "general"],
    growthRate: "Fast",
    matureHeight: "5-10 m",
    description: "An extremely fast-growing, nutrient-dense tree — every part of it (leaves, pods, flowers) is edible.",
    benefits: [
      "Highly nutritious leaves and pods",
      "Grows in very little space",
      "Tolerates poor, dry soil"
    ]
  },
  {
    id: "banyan",
    name: "Banyan",
    scientificName: "Ficus benghalensis",
    minSpace: 600,
    sunlight: ["medium", "high"],
    water: ["medium", "high"],
    purposes: ["shade", "biodiversity", "air-purification"],
    growthRate: "Slow",
    matureHeight: "20-25 m",
    description: "A monumental, long-living tree with aerial prop roots and an enormous canopy. Needs significant open space.",
    benefits: [
      "Massive shade cover once mature",
      "Rich habitat for birds and insects",
      "Long-term air quality benefit"
    ]
  },
  {
    id: "peepal",
    name: "Peepal",
    scientificName: "Ficus religiosa",
    minSpace: 400,
    sunlight: ["medium", "high"],
    water: ["medium"],
    purposes: ["air-purification", "shade", "biodiversity"],
    growthRate: "Medium",
    matureHeight: "15-20 m",
    description: "A fig tree known for continuing gas exchange at night, widely planted in public spaces.",
    benefits: [
      "Strong air-purifying reputation",
      "Supports diverse insect and bird life",
      "Broad, long-lasting shade"
    ]
  },
  {
    id: "amla",
    name: "Amla",
    scientificName: "Phyllanthus emblica",
    minSpace: 100,
    sunlight: ["medium", "high"],
    water: ["low", "medium"],
    purposes: ["fruits", "general"],
    growthRate: "Medium",
    matureHeight: "8-10 m",
    description: "A medium-sized tree bearing vitamin-C-rich fruit, compact enough for smaller plots.",
    benefits: [
      "Nutrient-rich fruit",
      "Compact size, fits smaller plots",
      "Drought tolerant"
    ]
  },
  {
    id: "arjun",
    name: "Arjun",
    scientificName: "Terminalia arjuna",
    minSpace: 200,
    sunlight: ["medium", "high"],
    water: ["medium", "high"],
    purposes: ["shade", "biodiversity", "general"],
    growthRate: "Medium",
    matureHeight: "20-25 m",
    description: "A riverside-loving tree with a straight trunk and attractive peeling bark, good near water bodies.",
    benefits: [
      "Good erosion control near water bodies",
      "Attractive peeling bark",
      "Supports biodiversity along waterways"
    ]
  },
  {
    id: "pongamia",
    name: "Pongamia",
    scientificName: "Millettia pinnata",
    minSpace: 150,
    sunlight: ["medium", "high"],
    water: ["low", "medium"],
    purposes: ["shade", "biodiversity", "general"],
    growthRate: "Fast",
    matureHeight: "8-15 m",
    description: "A tough, nitrogen-fixing tree tolerant of poor soils, often used along roads and open ground.",
    benefits: [
      "Improves soil fertility (nitrogen-fixing)",
      "Tolerates poor and saline soil",
      "Reliable fast-growing cover"
    ]
  },
  {
    id: "tamarind",
    name: "Tamarind",
    scientificName: "Tamarindus indica",
    minSpace: 250,
    sunlight: ["high"],
    water: ["low", "medium"],
    purposes: ["fruits", "shade", "general"],
    growthRate: "Slow",
    matureHeight: "12-20 m",
    description: "A long-lived, drought-hardy tree with tangy edible pods and a dense, rounded canopy.",
    benefits: [
      "Very drought tolerant",
      "Long-lived (100+ years)",
      "Widely used culinary fruit"
    ]
  },
  {
    id: "ashoka",
    name: "Ashoka",
    scientificName: "Polyalthia longifolia",
    minSpace: 60,
    sunlight: ["medium", "high"],
    water: ["medium"],
    purposes: ["flowers", "general", "biodiversity"],
    growthRate: "Medium",
    matureHeight: "6-10 m",
    description: "A slender, columnar evergreen tree popular for boundaries and narrow spaces, valued for its neat form.",
    benefits: [
      "Compact, columnar shape — fits narrow spaces",
      "Effective natural sound/dust screen",
      "Low maintenance evergreen"
    ]
  }
]

export default trees
