import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logoImage from '../assets/Images/Madduri_logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img className="logo-image" src={logoImage} alt="" aria-hidden="true" />
          <span className="logo-text">Madduri <strong>ADS</strong></span>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Categories
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
          <NavLink to="/submit-ad" className="btn-post-ad">
            Submit Ad
          </NavLink>
          <a className="header-phone" href="tel:+917386162084" aria-label="Call +91 7386162084">
            <svg className="header-phone__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 3.5c.7 0 1.2.4 1.5 1l1.5 3c.3.6.2 1.3-.2 1.8l-1.2 1.5c.9 1.8 2.4 3.3 4.2 4.2l1.5-1.2c.5-.4 1.2-.5 1.8-.2l3 1.5c.6.3 1 1 1 1.5 0 2.1-1.7 3.8-3.8 3.8C10.5 20.1 3.9 13.5 3.9 5.3 3.9 3.2 5.6 1.5 7.7 1.5c.5 0 1.2.4 1.5 1Z"
                fill="currentColor"
              />
            </svg>
            +91 7386162084
          </a>
        </nav>
      </div>

      <div className={`mobile-menu-panel ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile primary">
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Home
          </NavLink>
          <NavLink to="/categories" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Categories
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Contact
          </NavLink>
          <NavLink to="/submit-ad" onClick={closeMenu} className="mobile-nav-cta">
            Submit Ad
          </NavLink>
          <a className="mobile-nav-phone" href="tel:+917386162084" onClick={closeMenu}>
            <svg className="mobile-nav-phone__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 3.5c.7 0 1.2.4 1.5 1l1.5 3c.3.6.2 1.3-.2 1.8l-1.2 1.5c.9 1.8 2.4 3.3 4.2 4.2l1.5-1.2c.5-.4 1.2-.5 1.8-.2l3 1.5c.6.3 1 1 1 1.5 0 2.1-1.7 3.8-3.8 3.8C10.5 20.1 3.9 13.5 3.9 5.3 3.9 3.2 5.6 1.5 7.7 1.5c.5 0 1.2.4 1.5 1Z"
                fill="currentColor"
              />
            </svg>
            +91 7386162084
          </a>
        </nav>
      </div>
    </header>
  )
}
