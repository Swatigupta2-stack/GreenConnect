import { Link } from 'react-router-dom'

function TreeCard({ tree }) {
  return (
    <div className="tree-card">
      <div className="tree-card-icon">🌳</div>
      <h3>{tree.name}</h3>
      <p className="scientific-name">{tree.scientificName}</p>
      <p className="tree-meta">Grows to {tree.matureHeight} · {tree.growthRate} growth</p>
      <Link to={`/tree/${tree.id}`} className="btn btn-outline">View Details</Link>
    </div>
  )
}

export default TreeCard
