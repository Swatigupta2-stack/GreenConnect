import { useState, useMemo } from 'react'
import Map from '../components/Map.jsx'
import LocationCard from '../components/LocationCard.jsx'
import allLocations from '../data/locations.js'

function Explore() {
  const [search, setSearch] = useState('')
  const [sunlightFilter, setSunlightFilter] = useState('all')
  const [waterFilter, setWaterFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [spaceFilter, setSpaceFilter] = useState('all')

  const filtered = useMemo(() => {
    return allLocations.filter((loc) => {
      const matchesSearch = loc.name.toLowerCase().includes(search.toLowerCase())
      const matchesSunlight = sunlightFilter === 'all' || loc.sunlight === sunlightFilter
      const matchesWater = waterFilter === 'all' || loc.water === waterFilter
      const matchesStatus = statusFilter === 'all' || loc.status === statusFilter

      let matchesSpace = true
      if (spaceFilter === 'small') matchesSpace = loc.area < 200
      if (spaceFilter === 'medium') matchesSpace = loc.area >= 200 && loc.area <= 400
      if (spaceFilter === 'large') matchesSpace = loc.area > 400

      return matchesSearch && matchesSunlight && matchesWater && matchesStatus && matchesSpace
    })
  }, [search, sunlightFilter, waterFilter, statusFilter, spaceFilter])

  return (
    <div className="explore-page">
      <h1>Explore Plantation Locations</h1>
      <p className="page-subtitle">Browse mapped sites around Chennai and find one to plant a tree.</p>

      <div className="explore-controls">
        <input
          type="text"
          placeholder="Search by location name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sunlightFilter} onChange={(e) => setSunlightFilter(e.target.value)}>
          <option value="all">Any Sunlight</option>
          <option value="low">Low Sunlight</option>
          <option value="medium">Medium Sunlight</option>
          <option value="high">High Sunlight</option>
        </select>
        <select value={waterFilter} onChange={(e) => setWaterFilter(e.target.value)}>
          <option value="all">Any Water</option>
          <option value="low">Low Water</option>
          <option value="medium">Medium Water</option>
          <option value="high">High Water</option>
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">Any Status</option>
          <option value="Open for Plantation">Open for Plantation</option>
          <option value="In Progress">In Progress</option>
          <option value="Planning">Planning</option>
          <option value="Completed">Completed</option>
        </select>
        <select value={spaceFilter} onChange={(e) => setSpaceFilter(e.target.value)}>
          <option value="all">Any Space</option>
          <option value="small">Small (&lt; 200 sq ft)</option>
          <option value="medium">Medium (200-400 sq ft)</option>
          <option value="large">Large (&gt; 400 sq ft)</option>
        </select>
      </div>

      <Map locations={filtered} />

      <div className="location-grid">
        {filtered.length === 0 && <p>No locations match your filters.</p>}
        {filtered.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  )
}

export default Explore
