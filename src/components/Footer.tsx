import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            <img
              className="brand__logo brand__logo--lg"
              src="/logo.png"
              alt="The Developer Place"
            />
            <span className="brand__text">
              <strong>The Developer Place</strong>
              <small>CODE · CREATE · ELEVATE</small>
            </span>
          </div>
          <p className="footer__about">
            We build industry ERPs — ColdFlow for cold storage and OMNIRETAIL
            for clothing, saree, and fashion brands — plus admin panels, HR, and
            stock audit.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <div className="footer__links">
            <Link to="/products/coldflow">ColdFlow</Link>
            <Link to="/products/omniretail">OMNIRETAIL</Link>
            <Link to="/products">All products</Link>
            <Link to="/demos">Live Demos</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Get in touch</h4>
          <div className="footer__links">
            <a href="https://thedeveloperplace.co.in/" rel="noreferrer">
              thedeveloperplace.co.in
            </a>
            <Link to="/contact">Book a free demo</Link>
          </div>
        </div>
      </div>
      <div className="container footer__copy">
        © {new Date().getFullYear()} The Developer Place. All rights reserved.
      </div>
    </footer>
  )
}
