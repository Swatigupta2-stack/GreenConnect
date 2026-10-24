import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/explore', label: 'Explore' },
    { to: '/find-tree', label: 'Find a Tree' },
    { to: '/suggest-location', label: 'Suggest Location' },
    { to: '/community', label: 'Community' },
    { to: '/contact', label: 'Contact' }
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-icon">🌱</span>
          <span className="brand-name">GreenConnect</span>
        </NavLink>

        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/find-tree" className="btn btn-primary nav-cta" onClick={closeMenu}>
          Get Started
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
