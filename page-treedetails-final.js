import { useParams, Link } from 'react-router-dom'
import trees from '../data/trees.js'

function TreeDetails() {
  const { id } = useParams()
  const tree = trees.find((t) => t.id === id)

  if (!tree) {
    return (
      <div className="tree-details-page">
        <h2>Tree not found</h2>
        <Link to="/find-tree" className="btn btn-primary">Back to Find a Tree</Link>
      </div>
    )
  }

  return (
    <div className="tree-details-page">
      <div className="tree-details-header">
        <div>
          <h1>{tree.name}</h1>
          <p className="scientific-name">{tree.scientificName}</p>
        </div>
        <Link to="/find-tree" className="btn btn-outline">← Back to Search</Link>
      </div>

      <p className="tree-description">{tree.description}</p>

      <div className="tree-specs-grid">
        <div className="spec-card">
          <span className="spec-label">Space Required</span>
          <span className="spec-value">{tree.minSpace}+ sq ft</span>
        </div>
        <div className="spec-card">
          <span className="spec-label">Sunlight</span>
          <span className="spec-value">{tree.sunlight.join(', ')}</span>
        </div>
        <div className="spec-card">
          <span className="spec-label">Water Needs</span>
          <span className="spec-value">{tree.water.join(', ')}</span>
        </div>
        <div className="spec-card">
          <span className="spec-label">Mature Height</span>
          <span className="spec-value">{tree.matureHeight}</span>
        </div>
        <div className="spec-card">
          <span className="spec-label">Growth Rate</span>
          <span className="spec-value">{tree.growthRate}</span>
        </div>
        <div className="spec-card">
          <span className="spec-label">Suitable Purposes</span>
          <span className="spec-value">{tree.purposes.join(', ')}</span>
        </div>
      </div>

      <section className="tree-benefits">
        <h3>Benefits</h3>
        <ul>
          {tree.benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </section>

      <section className="why-recommended">
        <h3>Why This Tree Might Be Recommended</h3>
        <p>
          {tree.name} is typically suggested for sites with {tree.sunlight.join(' or ')} sunlight
          and {tree.water.join(' or ')} water availability, needing at least {tree.minSpace} sq ft
          of space, and best suited for {tree.purposes.join(', ')} purposes.
        </p>
      </section>
    </div>
  )
}

export default TreeDetails
