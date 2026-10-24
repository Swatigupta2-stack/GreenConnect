function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>🌱 GreenConnect</h4>
          <p>A community platform connecting people, places and the right trees.</p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/find-tree">Find a Tree</a></li>
            <li><a href="/suggest-location">Suggest a Location</a></li>
            <li><a href="/community">Community</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <p>hello@greenconnect.org</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} GreenConnect. Built for community plantation.
      </div>
    </footer>
  )
}

export default Footer
