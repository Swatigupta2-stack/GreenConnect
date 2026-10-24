import { useState, useEffect } from 'react'

const STORAGE_KEY = 'greenconnect_suggested_locations'

function SuggestLocation() {
  const [form, setForm] = useState({
    name: '',
    area: '',
    space: '',
    sunlight: 'medium',
    water: 'medium',
    purpose: 'shade',
    description: '',
    lat: '',
    lng: ''
  })
  const [photoName, setPhotoName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [savedLocations, setSavedLocations] = useState([])

  const loadSaved = () => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    setSavedLocations([...existing].reverse())
  }

  useEffect(() => {
    loadSaved()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    setPhotoName(file ? file.name : '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    const newEntry = {
      id: `suggested-${Date.now()}`,
      ...form,
      photoName,
      submittedAt: new Date().toISOString()
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, newEntry]))

    setSubmitted(true)
    setForm({
      name: '', area: '', space: '', sunlight: 'medium', water: 'medium',
      purpose: 'shade', description: '', lat: '', lng: ''
    })
    setPhotoName('')
    loadSaved()
  }

  const handleDelete = (id) => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    const updated = existing.filter((loc) => loc.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    loadSaved()
  }

  const formatDate = (isoString) => {
    const d = new Date(isoString)
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  }

  return (
    <div className="suggest-location-page">
      <h1>Suggest a Plantation Location</h1>
      <p className="page-subtitle">
        Know a spot that could use a tree? Submit the details and it'll be saved for community review.
      </p>

      {submitted && (
        <div className="success-banner">
          ✅ Thank you! Your location suggestion has been saved locally for this demo.
        </div>
      )}

      <form className="suggest-location-form" onSubmit={handleSubmit}>
        <label>
          Location Name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Total Area (sq ft)
          <input type="number" name="area" min="1" value={form.area} onChange={handleChange} required />
        </label>

        <label>
          Available Planting Space (sq ft)
          <input type="number" name="space" min="1" value={form.space} onChange={handleChange} required />
        </label>

        <label>
          Sunlight
          <select name="sunlight" value={form.sunlight} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Water Availability
          <select name="water" value={form.water} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Intended Purpose
          <select name="purpose" value={form.purpose} onChange={handleChange}>
            <option value="shade">Shade</option>
            <option value="fruits">Fruits</option>
            <option value="flowers">Flowers</option>
            <option value="biodiversity">Biodiversity</option>
            <option value="air-purification">Air Purification</option>
            <option value="general">General Plantation</option>
          </select>
        </label>

        <label>
          Description
          <textarea name="description" rows="4" value={form.description} onChange={handleChange} />
        </label>

        <div className="dimensions-row">
          <label>
            Latitude (optional)
            <input type="text" name="lat" value={form.lat} onChange={handleChange} placeholder="13.0827" />
          </label>
          <label>
            Longitude (optional)
            <input type="text" name="lng" value={form.lng} onChange={handleChange} placeholder="80.2707" />
          </label>
        </div>

        <label>
          Photo (optional)
          <input type="file" accept="image/*" onChange={handlePhoto} />
        </label>
        {photoName && <p className="file-note">Selected: {photoName}</p>}

        <button type="submit" className="btn btn-primary">Submit Location</button>
      </form>

      <section className="my-locations-section">
        <h2>My Suggested Locations</h2>

        {savedLocations.length === 0 && (
          <p className="page-subtitle">You haven't suggested any locations yet — submit the form above to see it here.</p>
        )}

        {savedLocations.length > 0 && (
          <div className="location-grid">
            {savedLocations.map((loc) => (
              <div key={loc.id} className="location-card">
                <div className="location-card-header">
                  <h3>{loc.name}</h3>
                  <span className="status-badge status-planning">Pending Review</span>
                </div>
                {loc.description && <p className="location-description">{loc.description}</p>}
                <ul className="location-facts">
                  <li>📐 {loc.area} sq ft total · {loc.space} sq ft plantable</li>
                  <li>☀️ {loc.sunlight} sunlight</li>
                  <li>💧 {loc.water} water</li>
                  <li>🎯 {loc.purpose}</li>
                  {loc.lat && loc.lng && <li>📍 {loc.lat}, {loc.lng}</li>}
                  {loc.photoName && <li>🖼️ {loc.photoName}</li>}
                </ul>
                <p className="file-note">Submitted {formatDate(loc.submittedAt)}</p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => handleDelete(loc.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default SuggestLocation
