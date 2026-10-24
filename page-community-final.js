import events from '../data/events.js'

function Community() {
  const totalTrees = events.reduce((sum, e) => sum + e.treesPlanted, 0)
  const totalVolunteers = events.reduce((sum, e) => sum + e.volunteers, 0)
  const completedDrives = events.filter((e) => e.status === 'completed').length

  const badges = [
    { name: 'First Sapling', description: 'Planted your first tree', icon: '🌱' },
    { name: 'Green Regular', description: 'Joined 3+ plantation drives', icon: '🌿' },
    { name: 'Site Scout', description: 'Suggested a plantation location', icon: '📍' },
    { name: 'Community Champion', description: 'Recruited 5+ volunteers', icon: '🏆' }
  ]

  return (
    <div className="community-page">
      <h1>Community Impact</h1>
      <p className="page-subtitle">See what we've achieved together, and where to get involved next.</p>

      <section className="community-stats">
        <div className="stat-card">
          <div className="stat-value">{totalTrees}</div>
          <div className="stat-label">Trees Planted</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalVolunteers}</div>
          <div className="stat-label">Volunteer Sign-ups</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{completedDrives}</div>
          <div className="stat-label">Completed Drives</div>
        </div>
      </section>

      <section className="drives-section">
        <h2>Plantation Drives</h2>
        <div className="drives-list">
          {events.map((event) => (
            <div key={event.id} className={`drive-card ${event.status}`}>
              <div className="drive-header">
                <h3>{event.title}</h3>
                <span className={`status-badge ${event.status}`}>{event.status}</span>
              </div>
              <p>{event.location} · {event.date}</p>
              <p>{event.volunteers} volunteers · {event.treesPlanted} trees planted</p>
            </div>
          ))}
        </div>
      </section>

      <section className="badges-section">
        <h2>Community Badges</h2>
        <div className="badges-grid">
          {badges.map((badge) => (
            <div key={badge.name} className="badge-card">
              <div className="badge-icon">{badge.icon}</div>
              <h4>{badge.name}</h4>
              <p>{badge.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Community
