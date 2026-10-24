import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

function Map({ locations, center = [13.0827, 80.2707], zoom = 11 }) {
  return (
    <MapContainer center={center} zoom={zoom} className="leaflet-map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            📐 {loc.area} sq ft &nbsp;|&nbsp; ☀️ {loc.sunlight} &nbsp;|&nbsp; 💧 {loc.water}
            <br />
            Status: {loc.status}
            <br />
            <Link
              to="/find-tree"
              state={{
                area: loc.area,
                sunlight: loc.sunlight,
                water: loc.water,
                purpose: loc.purpose,
                locationName: loc.name
              }}
            >
              Find Suitable Trees →
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
