import { Link } from 'react-router-dom'
import { Leaf, ArrowUpRight } from 'lucide-react'

export default function Footer() {
	return <footer className="site-footer"><div className="container footer-grid"><div><Link className="brand footer-brand" to="/"><span className="brand-mark"><Leaf size={20} /></span><span>GreenConnect</span></Link><p>Better planting decisions, made together.</p></div><div><h3>Explore</h3><Link to="/explore">Plantation spots</Link><Link to="/find-tree">Find your tree</Link><Link to="/community">Community drives</Link></div><div><h3>Connect</h3><Link to="/about">Our mission <ArrowUpRight size={15} /></Link><Link to="/suggest-location">Suggest a location</Link><Link to="/contact">Contact team</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} GreenConnect</span><span>Designed for living neighbourhoods.</span></div></footer>
}
