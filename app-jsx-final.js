import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/find-tree" element={<FindTree />} />
          <Route path="/tree/:id" element={<TreeDetails />} />
          <Route path="/suggest-location" element={<SuggestLocation />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
