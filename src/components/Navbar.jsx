import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Leaf, Menu, X, ArrowRight } from 'lucide-react'

const links = [['/', 'Home'], ['/about', 'About'], ['/explore', 'Explore'], ['/find-tree', 'Find a Tree'], ['/community', 'Community'], ['/contact', 'Contact']]

export default function Navbar() {
	const [open, setOpen] = useState(false)
	const close = () => setOpen(false)
	return <header className="site-header"><nav className="navbar container" aria-label="Main navigation"><Link className="brand" to="/" onClick={close}><span className="brand-mark"><Leaf size={20} /></span><span>GreenConnect</span></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button><div className={`nav-panel ${open ? 'is-open' : ''}`}>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={close}>{label}</NavLink>)}<Link className="nav-action" to="/suggest-location" onClick={close}>Suggest a spot <ArrowRight size={16} /></Link></div></nav></header>
}
