function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About GreenConnect</h1>
        <p>Technology that connects people with trees.</p>
      </section>

      <section className="about-section">
        <h2>The Problem</h2>
        <p>People often want to plant trees but don't know:</p>
        <ul className="problem-list">
          <li>Where to plant</li>
          <li>Which species to choose</li>
          <li>How much space is required</li>
          <li>How much sunlight is needed</li>
          <li>How much water is needed</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Solution</h2>
        <p>GreenConnect provides:</p>
        <ul className="problem-list">
          <li>Plantation location discovery</li>
          <li>Tree recommendations</li>
          <li>Interactive mapping</li>
          <li>Community participation</li>
          <li>Impact tracking</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Tree Plantation?</h2>
        <p>
          Well-matched trees support urban greenery, provide shade, and contribute to local
          biodiversity. Community involvement in choosing and planting the right species — rather
          than any tree in any location — helps improve survival rates and long-term environmental
          benefit for the neighbourhoods that plant them.
        </p>
      </section>

      <section className="about-section tech-flow-section">
        <h2>Technology Meets Sustainability</h2>
        <div className="tech-flow">
          <div className="flow-step">Technology</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">Information</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">Better Decisions</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">Community Action</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">Tree Plantation</div>
        </div>
      </section>

      <section className="about-section objective-section">
        <h2>Project Objective</h2>
        <p>
          To use technology as a bridge between people and environmental action by making tree
          plantation more accessible, informed and community-driven.
        </p>
      </section>
    </div>
  )
}

export default About
