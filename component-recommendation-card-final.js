import { Link } from 'react-router-dom'

const purposeLabels = {
  shade: 'Shade',
  fruits: 'Fruits',
  flowers: 'Flowers',
  biodiversity: 'Biodiversity',
  'air-purification': 'Air Purification',
  general: 'General Plantation'
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function RecommendationCard({ tree, matchedPurpose }) {
  return (
    <div className="recommendation-card">
      <div className="recommendation-header">
        <h3>🌳 {tree.name}</h3>
        <span className="match-badge">{tree.matchScore}% Compatibility</span>
      </div>

      <div className="recommendation-icons">
        <span>☀️ {capitalize(tree.sunlight[0])} sunlight</span>
        <span>💧 {capitalize(tree.water[0])} water</span>
        <span>🌳 {purposeLabels[matchedPurpose] || purposeLabels[tree.purposes[0]]}</span>
      </div>

      <p className="scientific-name">{tree.scientificName}</p>

      <ul className="recommendation-specs">
        <li><strong>Mature Height:</strong> {tree.matureHeight}</li>
        <li><strong>Growth Rate:</strong> {tree.growthRate}</li>
        <li><strong>Space Requirement:</strong> {tree.minSpace}+ sq ft</li>
        <li><strong>Water Requirement:</strong> {tree.water.join(', ')}</li>
      </ul>

      <div className="recommendation-benefits">
        <strong>Benefits:</strong>
        <ul>
          {tree.benefits.slice(0, 3).map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>

      <Link to={`/tree/${tree.id}`} className="btn btn-outline">View Tree Details</Link>
    </div>
  )
}

export default RecommendationCard
