import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <h1>
        Find the Right Place.
        <br />
        Choose the Right Tree.
      </h1>
      <p>
        GreenConnect connects communities with plantation opportunities and helps people
        choose suitable tree species based on space, sunlight, water availability and purpose.
      </p>
      <div className="hero-actions">
        <Link to="/find-tree" className="btn btn-primary">🌳 Find My Tree</Link>
        <Link to="/explore" className="btn btn-secondary">🗺️ Explore Plantation Spots</Link>
      </div>
    </section>
  )
}

export default Hero
