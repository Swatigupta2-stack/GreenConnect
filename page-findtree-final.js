import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import RecommendationCard from '../components/RecommendationCard.jsx'
import trees from '../data/trees.js'
import allLocations from '../data/locations.js'
import { recommendTrees } from '../utils/recommendationEngine.js'

const purposeOptions = [
  { value: 'shade', label: '🌳 Shade' },
  { value: 'fruits', label: '🍎 Fruits' },
  { value: 'flowers', label: '🌸 Flowers' },
  { value: 'biodiversity', label: '🐦 Biodiversity' },
  { value: 'air-purification', label: '💨 Air Purification' },
  { value: 'general', label: '🌱 General Plantation' }
]

const TOTAL_STEPS = 5

function FindTree() {
  const routerLocation = useLocation()
  const prefill = routerLocation.state || {}

  const [step, setStep] = useState(1)
  const [locationMode, setLocationMode] = useState(prefill.locationName ? 'existing' : 'custom')
  const [selectedLocationId, setSelectedLocationId] = useState('')
  const [customName, setCustomName] = useState(prefill.locationName || '')
  const [width, setWidth] = useState('')
  const [length, setLength] = useState('')
  const [sunlight, setSunlight] = useState(prefill.sunlight || '')
  const [water, setWater] = useState(prefill.water || '')
  const [purpose, setPurpose] = useState(prefill.purpose || '')

  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [finalArea, setFinalArea] = useState(prefill.area || null)

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  const goBack = () => setStep((s) => Math.max(s - 1, 1))

  const computeArea = () => {
    if (locationMode === 'existing' && selectedLocationId) {
      const loc = allLocations.find((l) => l.id === selectedLocationId)
      return loc ? loc.area : null
    }
    if (locationMode === 'existing' && prefill.area) {
      return prefill.area
    }
    if (width && length) return Number(width) * Number(length)
    return null
  }

  const handleFinish = () => {
    const area = computeArea()
    if (!area || !sunlight || !water || !purpose) {
      alert('Please complete all steps before finding trees.')
      return
    }

    setFinalArea(area)
    setLoading(true)
    setResults(null)

    setTimeout(() => {
      const recommendations = recommendTrees(trees, { area, sunlight, water, purpose }, 5)
      setResults(recommendations)
      setLoading(false)
    }, 900)
  }

  const canProceedFromStep1 =
    (locationMode === 'existing' && (selectedLocationId || prefill.area)) ||
    (locationMode === 'custom' && customName.trim().length > 0)

  const canProceedFromStep2 = locationMode === 'existing' || (width && length)

  return (
    <div className="find-tree-page">
      <h1>🌳 Which Tree Should I Plant?</h1>
      <p className="page-subtitle">
        Tell us about your location and we'll suggest suitable tree species.
      </p>

      {!results && !loading && (
        <div className="stepper-card">
          <div className="stepper-progress">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((n) => (
              <div key={n} className={`stepper-dot ${step === n ? 'active' : ''} ${step > n ? 'done' : ''}`}>
                {n}
              </div>
            ))}
          </div>
          <p className="stepper-label">Step {step} of {TOTAL_STEPS}</p>

          {step === 1 && (
            <div className="stepper-content">
              <h3>Where is your plantation site?</h3>
              <div className="mode-toggle">
                <button
                  type="button"
                  className={locationMode === 'existing' ? 'toggle-btn active' : 'toggle-btn'}
                  onClick={() => setLocationMode('existing')}
                >
                  Existing Location
                </button>
                <button
                  type="button"
                  className={locationMode === 'custom' ? 'toggle-btn active' : 'toggle-btn'}
                  onClick={() => setLocationMode('custom')}
                >
                  Custom Location
                </button>
              </div>

              {locationMode === 'existing' && (
                <select
                  value={selectedLocationId}
                  onChange={(e) => setSelectedLocationId(e.target.value)}
                >
                  <option value="">
                    {prefill.locationName ? `Selected: ${prefill.locationName}` : 'Select a location...'}
                  </option>
                  {allLocations.map((loc) => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              )}

              {locationMode === 'custom' && (
                <input
                  type="text"
                  placeholder="e.g. My street corner"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                />
              )}
            </div>
          )}

          {step === 2 && (
            <div className="stepper-content">
              <h3>How much space is available?</h3>
              {locationMode === 'existing' ? (
                <p className="prefilled-note">
                  Area auto-filled from selected location: {computeArea() || '—'} sq ft
                </p>
              ) : (
                <div className="dimensions-row">
                  <label>
                    Width (ft)
                    <input type="number" min="1" value={width} onChange={(e) => setWidth(e.target.value)} />
                  </label>
                  <label>
                    Length (ft)
                    <input type="number" min="1" value={length} onChange={(e) => setLength(e.target.value)} />
                  </label>
                </div>
              )}
              {width && length && locationMode === 'custom' && (
                <p className="prefilled-note">Area = {width} × {length} = {Number(width) * Number(length)} sq ft</p>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="stepper-content">
              <h3>How much sunlight does the site get?</h3>
              <div className="choice-row">
                {['low', 'medium', 'high'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    className={sunlight === lvl ? 'choice-btn active' : 'choice-btn'}
                    onClick={() => setSunlight(lvl)}
                  >
                    ☀️ {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="stepper-content">
              <h3>How much water is available?</h3>
              <div className="choice-row">
                {['low', 'medium', 'high'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    className={water === lvl ? 'choice-btn active' : 'choice-btn'}
                    onClick={() => setWater(lvl)}
                  >
                    💧 {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="stepper-content">
              <h3>What's the purpose of this planting?</h3>
              <div className="choice-grid">
                {purposeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={purpose === opt.value ? 'choice-btn active' : 'choice-btn'}
                    onClick={() => setPurpose(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="stepper-nav">
            {step > 1 && (
              <button type="button" className="btn btn-outline" onClick={goBack}>← Back</button>
            )}
            {step < TOTAL_STEPS && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={goNext}
                disabled={step === 1 ? !canProceedFromStep1 : step === 2 ? !canProceedFromStep2 : step === 3 ? !sunlight : !water}
              >
                Next →
              </button>
            )}
            {step === TOTAL_STEPS && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleFinish}
                disabled={!purpose}
              >
                🌱 Find Suitable Trees
              </button>
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Matching your conditions to suitable tree species...</p>
        </div>
      )}

      {results && !loading && (
        <section className="results-section">
          <h2>Your Recommended Trees {finalArea && `(for ${finalArea} sq ft)`}</h2>
          <div className="recommendation-grid">
            {results.map((tree) => (
              <RecommendationCard key={tree.id} tree={tree} matchedPurpose={purpose} />
            ))}
          </div>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => { setResults(null); setStep(1) }}
          >
            ← Start Over
          </button>
        </section>
      )}
    </div>
  )
}

export default FindTree
