const stats = [['146', 'Trees planted'], ['28', 'Plantation spots'], ['52', 'Community members'], ['18', 'Tree species']]
export default function ImpactStats() { return <section className="impact-stats">{stats.map(([value, label]) => <div className="stat-card" key={label}><div className="stat-value">{value}</div><div className="stat-label">{label}</div></div>)}</section> }
