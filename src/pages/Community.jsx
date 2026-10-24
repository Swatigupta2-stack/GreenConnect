import { Link } from 'react-router-dom'
import events from '../data/events.js'

export default function Community() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return <div className="container page"><div className="page-hero compact"><p className="eyebrow">People make it possible</p><h1>Plant together.</h1><p>Browse community drives and see how neighbours are contributing trees.</p></div><div className="event-list">{events.map(event => {
    const date = new Date(`${event.date}T00:00:00`)
    const dateLabel = Number.isNaN(date.getTime()) ? 'Date unavailable' : date < today ? 'Past date' : 'Upcoming'

    return <article className="event-card" key={event.id}><span className="eyebrow">{dateLabel} · {event.date}</span><h2>{event.title}</h2><p>{event.location}</p><p className="muted">{event.volunteers} volunteers · {event.treesPlanted} trees planted</p><Link className="text-link" to="/contact">Ask about this drive</Link></article>
  })}</div></div>
}
