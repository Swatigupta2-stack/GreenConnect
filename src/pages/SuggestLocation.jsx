import { useEffect, useState } from 'react'

const STORAGE_KEY = 'greenconnect-suggestions'

function parseSuggestions(value) {
  const saved = JSON.parse(value || '[]')
  if (!Array.isArray(saved) || saved.some(suggestion => !suggestion || typeof suggestion !== 'object' || Array.isArray(suggestion))) {
    throw new Error('Saved suggestions are not in the expected format.')
  }
  return saved
}

export default function SuggestLocation() {
  const [suggestions, setSuggestions] = useState([])
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    try {
      setSuggestions(parseSuggestions(localStorage.getItem(STORAGE_KEY)))
    } catch (loadError) {
      const reason = loadError instanceof Error ? loadError.message : 'Unknown storage error.'
      setError(`Unable to read saved suggestions from this browser. ${reason}`)
    }
  }, [])

  function submitSuggestion(event) {
    event.preventDefault()
    setError('')

    try {
      const saved = parseSuggestions(localStorage.getItem(STORAGE_KEY))

      const form = new FormData(event.currentTarget)
      const suggestion = Object.fromEntries(form)
      const updated = [...saved, suggestion]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setSuggestions(updated)
      setSent(true)
      event.currentTarget.reset()
    } catch (saveError) {
      const reason = saveError instanceof Error ? saveError.message : 'Unknown storage error.'
      setError(`Unable to save your suggestion in this browser. ${reason}`)
    }
  }

  return <div className="container page form-page"><div className="page-hero compact"><p className="eyebrow">Add to the map</p><h1>Know a place that needs trees?</h1><p>Share the basics and help your neighbours discover it.</p></div>{sent && <p className="success-banner" role="status">Thanks. Your location suggestion has been saved in this browser.</p>}{error && <p role="alert">{error}</p>}<form className="form-card" onSubmit={submitSuggestion}><label>Location name<input required name="name" /></label><label>Approximate area (sq ft)<input required type="number" min="1" name="area" /></label><label>What would help most?<select name="purpose"><option value="shade">Shade</option><option value="flowers">Flowers</option><option value="fruits">Fruit</option><option value="biodiversity">Biodiversity</option></select></label><button className="button button-primary" type="submit">Submit suggestion</button></form><section className="rhythm-section"><h2>Your saved suggestions</h2>{suggestions.length === 0 ? <p>No suggestions saved in this browser yet.</p> : <div className="location-grid">{suggestions.map((suggestion, index) => <article className="location-card" key={`${suggestion.name}-${index}`}><h3>{suggestion.name}</h3><p>{suggestion.area} sq ft · {suggestion.purpose}</p></article>)}</div>}</section></div>
}
