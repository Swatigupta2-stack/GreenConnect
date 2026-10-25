import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import RecommendationCard from '../components/RecommendationCard.jsx'
import locations from '../data/locations.js'
import { apiUrl } from '../utils/api.js'
import { recommendTrees } from '../utils/recommendationEngine.js'
import './FindTree.css'

const steps = ['Location', 'Space', 'Sunlight', 'Water', 'Purpose']
const levels = ['low', 'medium', 'high']
const purposes = [
  ['shade', 'Shade'],
  ['fruits', 'Fruit'],
  ['flowers', 'Flowers'],
  ['biodiversity', 'Biodiversity'],
  ['air-purification', 'Air purification'],
  ['general', 'General']
]

export default function FindTree() {
  const routerLocation = useLocation()
  const prefill = routerLocation.state || {}
  const initialLocation = locations.find(location => location.name === prefill.locationName)
  const [step, setStep] = useState(1)
  const [locationName, setLocationName] = useState(prefill.locationName || '')
  const [selectedLocationId, setSelectedLocationId] = useState(initialLocation?.id || '')
  const [area, setArea] = useState(prefill.area ? String(prefill.area) : '')
  const [sunlight, setSunlight] = useState(prefill.sunlight || '')
  const [water, setWater] = useState(prefill.water || '')
  const [purpose, setPurpose] = useState(prefill.purpose || '')
  const [trees, setTrees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [results, setResults] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadTrees() {
      try {
        const response = await fetch(apiUrl('/api/trees'), { signal: controller.signal })
        if (!response.ok) throw new Error('Unable to load trees. Please try again later.')
        const data = await response.json()
        if (!Array.isArray(data)) throw new Error('The server returned an invalid tree list.')
        setTrees(data)
      } catch (loadError) {
        if (loadError.name !== 'AbortError') setError(loadError.message)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadTrees()
    return () => controller.abort()
  }, [])

  function selectLocation(id) {
    setResults(null)
    setSelectedLocationId(id)
    const selected = locations.find(location => location.id === id)
    if (!selected) return
    setLocationName(selected.name)
    setArea(String(selected.area))
    setSunlight(selected.sunlight)
    setWater(selected.water)
    setPurpose(selected.purpose)
  }

  function findTrees() {
    setError('')
    setResults(null)
    try {
      const recommendations = recommendTrees(
        trees,
        { area: Number(area), sunlight, water, purpose },
        5
      ).filter(tree => tree.matchScore > 0)
      setResults(recommendations)
    } catch {
      setError('Unable to create tree recommendations. Please check your selections and try again.')
    }
  }

  const canContinue = step === 1
    ? locationName.trim().length > 0
    : step === 2
      ? Number(area) > 0
      : step === 3
        ? Boolean(sunlight)
        : step === 4
          ? Boolean(water)
          : Boolean(purpose)

  return <div className="container page"><div className="page-hero compact"><p className="eyebrow">A thoughtful match</p><h1>Find a tree for your place.</h1><p>Tell us about your site and we’ll match it with suitable trees.</p></div>{loading ? <p role="status">Loading tree data...</p> : error && trees.length === 0 ? <p role="alert">{error}</p> : <><div className="tree-finder"><div className="stepper-progress" aria-label={`Step ${step} of ${steps.length}`}>{steps.map((label, index) => <div className={`stepper-item ${step === index + 1 ? 'active' : ''} ${step > index + 1 ? 'done' : ''}`} key={label}><span>{index + 1}</span><small>{label}</small></div>)}</div>{step === 1 && <section className="stepper-content"><h2>Where will you plant?</h2><label className="finder-field">Use a listed location<select value={selectedLocationId} onChange={event => selectLocation(event.target.value)}><option value="">Choose a location or enter your own</option>{locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}</select></label>  <label className="finder-field">Location name<input value={locationName} onChange={event => { setLocationName(event.target.value); setSelectedLocationId(''); setResults(null) }} placeholder="e.g. My garden" /></label></section>}{step === 2 && <section className="stepper-content"><h2>How much planting space is available?</h2><label className="finder-field">Available area (sq ft)<input type="number" min="1" value={area} onChange={event => { setArea(event.target.value); setResults(null) }} placeholder="e.g. 150" /></label>{locationName && <p className="muted">Location: {locationName}</p>}</section>}{step === 3 && <section className="stepper-content"><h2>How much sunlight does the site get?</h2><div className="choice-row">{levels.map(level => <button type="button" className={`choice-btn ${sunlight === level ? 'active' : ''}`} aria-pressed={sunlight === level} key={level} onClick={() => { setSunlight(level); setResults(null) }}>{level[0].toUpperCase() + level.slice(1)}</button>)}</div></section>}{step === 4 && <section className="stepper-content"><h2>How much water is available?</h2><div className="choice-row">{levels.map(level => <button type="button" className={`choice-btn ${water === level ? 'active' : ''}`} aria-pressed={water === level} key={level} onClick={() => { setWater(level); setResults(null) }}>{level[0].toUpperCase() + level.slice(1)}</button>)}</div></section>}{step === 5 && <section className="stepper-content"><h2>What is your planting purpose?</h2><div className="choice-grid">{purposes.map(([value, label]) => <button type="button" className={`choice-btn ${purpose === value ? 'active' : ''}`} aria-pressed={purpose === value} key={value} onClick={() => { setPurpose(value); setResults(null) }}>{label}</button>)}</div></section>}<div className="stepper-nav">{step > 1 && <button className="button button-light" type="button" onClick={() => setStep(current => current - 1)}>Back</button>}{step < steps.length ? <button className="button button-primary" type="button" disabled={!canContinue} onClick={() => setStep(current => current + 1)}>Next</button> : <button className="button button-primary" type="button" disabled={!canContinue || trees.length === 0} onClick={findTrees}>Find suitable trees</button>}</div>{error && <p role="alert">{error}</p>}</div>{results && <section className="finder-results" aria-live="polite"><h2>Recommended trees{area ? ` for ${area} sq ft` : ''}</h2>{results.length === 0 ? <p>No trees match all of these conditions. Try adjusting your site details.</p> : <div className="tree-grid">{results.map(tree => <RecommendationCard key={tree.id} tree={tree} />)}</div>}<button className="text-link" type="button" onClick={() => { setResults(null); setStep(1); setLocationName(''); setSelectedLocationId(''); setArea(''); setSunlight(''); setWater(''); setPurpose('') }}>Start over</button></section>}</>}</div>
}
