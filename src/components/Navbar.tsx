import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={`navbar-bold ${isOpen ? 'is-open' : ''}`}>
      <div className="container nav-container-bold">
        <div className="nav-left-bold">
          <Link to="/" className="logo-bold"><span className="logo-accent">MN</span>MEDIA</Link>
        </div>
        
        <div 
          className={`nav-menu-bold ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          <ul className="nav-links-bold" onClick={(e) => e.stopPropagation()}>
            <li><NavLink to="/services">SERVICES</NavLink></li>
            <li><NavLink to="/cases">CASES</NavLink></li>
            <li><NavLink to="/proces">VORES PROCES</NavLink></li>
            <li><NavLink to="/om-mnmedia">OM MNMEDIA</NavLink></li>
            <li className="mobile-only"><NavLink to="/kontakt" className="btn-bold-nav">KONTAKT OS</NavLink></li>
          </ul>
        </div>

        <div className="nav-right-bold">
          <Link to="/kontakt" className="btn-bold-nav desktop-only">KONTAKT OS</Link>
          
          <button 
            className={`burger-menu ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
