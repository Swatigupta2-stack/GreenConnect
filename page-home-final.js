import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ImpactStats from '../components/ImpactStats.jsx'
import LocationCard from '../components/LocationCard.jsx'
import locations from '../data/locations.js'

function Home() {
  const featured = locations.slice(0, 4)

  return (
    <div className="home-page">
      <Hero />

      <section className="intro-section">
        <h2>What is GreenConnect?</h2>
        <p>
          GreenConnect is a community-driven platform that uses technology to make tree
          plantation easier and more informed. Instead of guessing which tree to plant where,
          people can explore real plantation opportunities, enter the conditions of a site, and
          get species recommendations that are actually suited to that location.
        </p>
        <Link to="/about" className="learn-more-link">Learn More →</Link>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h4>Find a Location</h4>
            <p>Discover possible plantation spots.</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <h4>Enter Conditions</h4>
            <p>Tell us about space, sunlight and water.</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <h4>Get Recommendations</h4>
            <p>Our recommendation engine finds compatible tree species.</p>
          </div>
          <div className="step-card">
            <div className="step-number">04</div>
            <h4>Plant & Grow</h4>
            <p>Take action and contribute to your community.</p>
          </div>
        </div>
      </section>

      <ImpactStats />

      <section className="featured-locations">
        <h2>Featured Plantation Locations</h2>
        <div className="location-grid">
          {featured.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
        <Link to="/explore" className="btn btn-secondary">View All Locations</Link>
      </section>

      <section className="recommendation-cta">
        <h2>Not sure which tree to plant?</h2>
        <p>Tell us about your location and we'll suggest suitable tree species.</p>
        <Link to="/find-tree" className="btn btn-primary btn-large">Find My Tree</Link>
      </section>

      <section className="cta-band">
        <div>
          <h2>Be Part of the Change</h2>
          <p>Suggest a spot, join a drive, and help grow your community's green cover.</p>
        </div>
        <div className="cta-actions">
          <Link to="/suggest-location" className="btn btn-primary">Suggest a Location</Link>
          <Link to="/community" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
