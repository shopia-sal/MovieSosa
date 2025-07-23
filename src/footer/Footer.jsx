import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <p className="footer__copyright">Created By Coding with SOSA</p>
      </div>
    </footer>
  )
}

export default Footer
