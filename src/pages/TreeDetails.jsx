import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apiUrl } from '../utils/api.js'

export default function TreeDetails() {
  const { id } = useParams()
  const [tree, setTree] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadTree() {
      setTree(null)
      setLoading(true)
      setError('')
      setNotFound(false)

      try {
        const response = await fetch(apiUrl(`/api/trees/${encodeURIComponent(id)}`), { signal: controller.signal })
        if (response.status === 404) {
          setNotFound(true)
        } else if (!response.ok) {
          throw new Error('Unable to load this tree. Please try again later.')
        } else {
          const data = await response.json()
          if (!data || typeof data !== 'object' || Array.isArray(data)) {
            throw new Error('The server returned invalid tree details.')
          }
          setTree(data)
        }
      } catch (loadError) {
        if (loadError.name !== 'AbortError') setError(loadError.message)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadTree()
    return () => controller.abort()
  }, [id])

  if (loading) return <div className="container page"><p role="status">Loading tree...</p></div>
  if (error) return <div className="container page"><h1 role="alert">{error}</h1><Link className="text-link" to="/find-tree">Back to recommendations</Link></div>
  if (notFound || !tree) return <div className="container page"><h1>Tree not found</h1><Link className="text-link" to="/find-tree">Back to recommendations</Link></div>

  return <div className="container page detail-page"><p className="eyebrow">Tree profile</p><h1>{tree.name}</h1><p className="scientific-name">{tree.scientificName}</p><p className="detail-copy">{tree.description}</p><div className="spec-grid"><div><strong>{tree.matureHeight}</strong><span>Mature height</span></div><div><strong>{tree.growthRate}</strong><span>Growth rate</span></div><div><strong>{tree.minSpace} sq ft</strong><span>Minimum space</span></div></div><h2>Growing conditions &amp; purposes</h2><div className="spec-grid"><div><strong>{Array.isArray(tree.sunlight) ? tree.sunlight.join(', ') : tree.sunlight}</strong><span>Sunlight</span></div><div><strong>{Array.isArray(tree.water) ? tree.water.join(', ') : tree.water}</strong><span>Water</span></div><div><strong>{Array.isArray(tree.purposes) ? tree.purposes.join(', ') : tree.purposes}</strong><span>Purposes</span></div></div><h2>Benefits</h2><ul className="check-list">{(Array.isArray(tree.benefits) ? tree.benefits : []).map(benefit => <li key={benefit}>{benefit}</li>)}</ul></div>
}
