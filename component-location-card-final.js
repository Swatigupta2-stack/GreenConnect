import { useNavigate } from 'react-router-dom'

const statusClassMap = {
  'Open for Plantation': 'status-open',
  'In Progress': 'status-progress',
  'Planning': 'status-planning',
  'Completed': 'status-completed'
}

function LocationCard({ location }) {
  const navigate = useNavigate()

  const handleFindTrees = () => {
    navigate('/find-tree', {
      state: {
        area: location.area,
        sunlight: location.sunlight,
        water: location.water,
        purpose: location.purpose,
        locationName: location.name
      }
    })
  }

  return (
    <div className="location-card">
      <div className="location-card-header">
        <h3>{location.name}</h3>
        <span className={`status-badge ${statusClassMap[location.status] || ''}`}>
          {location.status}
        </span>
      </div>
      <p className="location-description">{location.description}</p>
      <ul className="location-facts">
        <li>📐 {location.area} sq ft</li>
        <li>☀️ {location.sunlight} sunlight</li>
        <li>💧 {location.water} water</li>
      </ul>
      <button className="btn btn-primary" onClick={handleFindTrees}>
        Find Suitable Trees
      </button>
    </div>
  )
}

export default LocationCard
