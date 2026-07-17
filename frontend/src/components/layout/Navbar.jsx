import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { navigationItems } from '../../constants/navigation';
import '../../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container-shell site-nav">
        <Link to="/" className="brand-link" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="TBI GEHU Logo" className="brand-mark" />
          <div>
            <p className="brand-text">TBI GEHU</p>
            <p className="brand-subtitle">Technology Business Incubator</p>
          </div>
        </Link>

        <div className="nav-links">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="cta-button">
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-panel">
          <div className="container-shell mobile-links">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mobile-cta">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;