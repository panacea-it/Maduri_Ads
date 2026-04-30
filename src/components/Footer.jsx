import { Link } from 'react-router-dom'
import './Footer.css'
import logoImage from '../assets/Images/Madduri_logo.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Categories', to: '/categories' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Submit Ad', to: '/submit-ad' },
]

const contactDetails = [
  {
    label: 'Address',
    value: [
      'R/o H.No. 11-10-198 Vijayapuri',
      'Colony-02, Kothapet, Saroornagar,',
      'Rangareddy Dist, Pin-500035',
    ],
  }
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img className="footer-logo-image" src={logoImage} alt="" aria-hidden="true" />
            <span className="footer-logo-text">
              Madduri <strong>ADS</strong>
            </span>
          </div>
          <p className="footer-tagline">
            Publish your ads in top newspapers across Telangana &amp; Andhra Pradesh quickly and
            easily.
          </p>
          <Link to="/submit-ad" className="footer-cta">
            Book Your Ad
          </Link>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>Reach Us</h4>
          <p>
            Need help with ad booking, publication choice, pricing, or placement? Reach us below.
          </p>
          <ul className="footer-contact-list">
            {contactDetails.map((item) => (
              <li key={item.label}>
                <span className="footer-contact-label">{item.label}</span>
                <span className="footer-contact-value">
                  {Array.isArray(item.value)
                    ? item.value.map((line) => <span key={line}>{line}</span>)
                    : item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>{`© ${year} Panacea IT Services Pvt. Ltd. All rights reserved.`}</span>
        <span>Publish Your Ads Across Telangana &amp; Andhra Pradesh</span>
      </div>
    </footer>
  )
}
