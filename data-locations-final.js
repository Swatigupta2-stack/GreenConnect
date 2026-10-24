// Demo plantation locations around Chennai
// status: 'Open for Plantation' | 'In Progress' | 'Planning' | 'Completed'

const locations = [
  {
    id: "loc-1",
    name: "Marina Beach Promenade Strip",
    lat: 13.0500,
    lng: 80.2824,
    area: 500,
    sunlight: "high",
    water: "medium",
    purpose: "shade",
    status: "Open for Plantation",
    description: "A sunny, open stretch along the promenade in need of shade cover for visitors.",
    submittedBy: "City Parks Dept."
  },
  {
    id: "loc-2",
    name: "Anna Nagar Community Park",
    lat: 13.0850,
    lng: 80.2101,
    area: 300,
    sunlight: "medium",
    water: "medium",
    purpose: "flowers",
    status: "In Progress",
    description: "A neighbourhood park with partial shade, looking for flowering and ornamental trees.",
    submittedBy: "Anna Nagar RWA"
  },
  {
    id: "loc-3",
    name: "Velachery Lake Bund Road",
    lat: 12.9754,
    lng: 80.2200,
    area: 250,
    sunlight: "medium",
    water: "high",
    purpose: "air-purification",
    status: "Open for Plantation",
    description: "A road bordering the lake with good soil moisture, ideal for air-purifying species.",
    submittedBy: "Lake Restoration Group"
  },
  {
    id: "loc-4",
    name: "Tambaram School Campus",
    lat: 12.9249,
    lng: 80.1000,
    area: 600,
    sunlight: "high",
    water: "medium",
    purpose: "fruits",
    status: "Planning",
    description: "Open campus grounds where students want to plant fruit trees for a school orchard project.",
    submittedBy: "Tambaram Govt. School"
  },
  {
    id: "loc-5",
    name: "Adyar Riverside Walkway",
    lat: 13.0012,
    lng: 80.2565,
    area: 350,
    sunlight: "medium",
    water: "high",
    purpose: "shade",
    status: "Open for Plantation",
    description: "A riverside path prone to erosion, benefiting from deep-rooted shade trees.",
    submittedBy: "Adyar Eco Group"
  },
  {
    id: "loc-6",
    name: "Porur Temple Grounds",
    lat: 13.0382,
    lng: 80.1565,
    area: 120,
    sunlight: "medium",
    water: "medium",
    purpose: "flowers",
    status: "Completed",
    description: "Temple premises where a flowering-tree plantation drive has already been completed.",
    submittedBy: "Porur Temple Trust"
  }
]

export default locations
