import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const startRef = useRef(null)

  useEffect(() => {
    let frame
    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp
      const progress = Math.min((timestamp - startRef.current) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return value
}

function StatCard({ value, label }) {
  const count = useCountUp(value)
  return (
    <div className="stat-card animated-stat">
      <div className="stat-value">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function ImpactStats({ stats }) {
  const defaultStats = [
    { label: 'Trees Planted', value: 146 },
    { label: 'Plantation Spots', value: 28 },
    { label: 'Community Members', value: 52 },
    { label: 'Tree Species', value: 18 }
  ]

  const data = stats || defaultStats

  return (
    <section className="impact-stats">
      {data.map((stat) => (
        <StatCard key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </section>
  )
}

export default ImpactStats
