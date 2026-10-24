import { Link, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Explore from './pages/Explore.jsx'
import FindTree from './pages/FindTree.jsx'
import TreeDetails from './pages/TreeDetails.jsx'
import SuggestLocation from './pages/SuggestLocation.jsx'
import Community from './pages/Community.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return <div className="app-shell"><Navbar /><main><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/explore" element={<Explore />} /><Route path="/find-tree" element={<FindTree />} /><Route path="/tree/:id" element={<TreeDetails />} /><Route path="/suggest-location" element={<SuggestLocation />} /><Route path="/community" element={<Community />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<div className="container page"><h1>Page not found</h1><p>The page you requested doesn’t exist.</p><Link className="text-link" to="/">Back to home</Link></div>} /></Routes></main><Footer /></div>
}
