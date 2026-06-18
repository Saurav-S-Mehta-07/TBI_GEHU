import { Link } from 'react-router-dom';

import { navigationItems } from '../../constants/navigation';
import '../../styles/footer.css';

const quickLinks = navigationItems.slice(0, 4);
const programs = ['Spark Bootcamp', 'LaunchPad', 'TechNest Core', 'Founder Fellowship'];
const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'X', href: '#' }
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <p>TBI GEHU</p>
            <p className="footer-brand-text">
              Empowering student founders with mentorship, infrastructure, and networks that turn ideas into impact.
            </p>
            <div className="footer-socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-link-list">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Programs</h3>
            <ul className="footer-link-list footer-program-list">
              {programs.map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Contact</h3>
            <ul className="footer-contact-list">
              <li>Graphic Era Hill University</li>
              <li>tbi@gehu.ac.in</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-shell footer-bottom-inner">
          <p>© 2026 TBI GEHU. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;