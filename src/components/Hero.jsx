import { Link } from 'react-router-dom'
import { ArrowRight, Map } from 'lucide-react'

export default function Hero() {
	return <section className="hero"><div className="container"><p className="eyebrow" style={{ color: '#d9ed72' }}>Community tree plantation</p><h1>Find the right place.<br />Choose the right tree.</h1><p>GreenConnect connects people with real plantation opportunities and helps every neighbourhood choose species that can thrive.</p><div className="hero-actions"><Link to="/find-tree" className="btn btn-primary">Find my tree <ArrowRight size={17} /></Link><Link to="/explore" className="btn btn-secondary"><Map size={17} /> Explore plantation spots</Link></div></div></section>
}
