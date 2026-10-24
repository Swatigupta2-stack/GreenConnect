import { Link } from 'react-router-dom'
export default function RecommendationCard({ tree }) { return <article className="tree-card"><p className="eyebrow">Match score: {tree.matchScore}%</p><h3>{tree.name}</h3><p className="scientific-name">{tree.scientificName}</p><p>{tree.description}</p><Link className="button button-primary" to={`/tree/${tree.id}`}>View details</Link></article> }
