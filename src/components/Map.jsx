import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

export default function Map({ locations, center = [13.0827, 80.2707], zoom = 11 }) {
  return <MapContainer center={center} zoom={zoom} className="leaflet-map"><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{locations.map(location => <Marker key={location.id} position={[location.lat, location.lng]}><Popup><strong>{location.name}</strong><br />{location.area} sq ft · {location.status}<br /><Link to="/find-tree" state={{ locationName: location.name, area: location.area, sunlight: location.sunlight, water: location.water, purpose: location.purpose }}>Find suitable trees</Link></Popup></Marker>)}</MapContainer>
}
