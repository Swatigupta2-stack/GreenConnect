import { useState } from 'react'
import { Link } from 'react-router-dom'
import locations from '../data/locations.js'
import Map from '../components/Map.jsx'

export default function Explore() { const [query, setQuery] = useState(''); const visible = locations.filter(item => item.name.toLowerCase().includes(query.toLowerCase())); return <div className="container page"><div className="page-hero compact"><p className="eyebrow">Explore the network</p><h1>Places ready to grow.</h1><p>Browse community-submitted locations and find a planting opportunity that fits.</p></div><Map locations={visible} /><input className="search-input" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search locations" aria-label="Search locations" /><div className="location-grid">{visible.map(location => <article className="location-card" key={location.id}><span className="eyebrow">{location.status}</span><h2>{location.name}</h2><p>{location.description}</p><p className="muted">{location.area} sq ft · {location.sunlight} sunlight · {location.water} water</p><Link className="button button-primary" to="/find-tree">Find suitable trees</Link></article>)}</div></div> }
