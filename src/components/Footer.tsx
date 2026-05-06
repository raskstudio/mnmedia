import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bold">
      <div className="container">
        <div className="footer-top-bold">
          <div className="footer-brand-bold">
            <Link to="/" className="logo-bold">MNMEDIA</Link>
            <p className="footer-tagline-bold">VI SKABER DIT BRAND ONLINE.</p>
          </div>
          
          <div className="footer-nav-bold">
            <div className="footer-col-bold">
              <h4>SIDER</h4>
              <ul>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/cases">CASES</Link></li>
                <li><Link to="/om-mnmedia">OM MNMEDIA</Link></li>
                <li><Link to="/kontakt">KONTAKTS OS</Link></li>
              </ul>
            </div>
            
            <div className="footer-col-bold">
              <h4>INFO</h4>
              <p>HELLO@MNMEDIA.DK</p>
              <p>+45 12 34 56 78</p>
              <p>AARHUS C</p>
            </div>
            
            <div className="footer-col-bold">
              <h4>SOCIALS</h4>
              <ul>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom-bold">
          <p>&copy; {new Date().getFullYear()} MNMEDIA. ALLE RETTIGHEDER FORBEHOLDES.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
