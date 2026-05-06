import { Link, NavLink, useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-bold">
      {/* BOLD Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1574717024453-354056afd69c?auto=format&fit=crop&w=2000&q=80" 
            alt="Cinematic Camera Setup" 
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1>
              Fra strategi <br />
              <span className="text-outline">til content</span> <br />
              <span className="text-accent">dit brand online</span>
            </h1>
            <div className="hero-ctas">
              <Link to="/cases" className="btn btn-white">Se vores cases</Link>
              <Link to="/kontakt" className="btn btn-primary">Lad os tage en snak</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section section">
        <div className="container">
          <div className="philosophy-content">
            <p className="philosophy-text">
              Vi skaber <span>målbar værdi</span> gennem kreativ eksekvering og data-drevet strategi.
            </p>
          </div>
        </div>
      </section>

      {/* BOLD Transparent Partnerships */}
      <section className="partnerships-compact section">
        <div className="container">
          <div className="partnerships-wrapper">
            <div className="partnerships-text">
              <h2>3 faste<br />kunder. Ét tæt<br />samarbejde.</h2>
              <p>Vi tror på langsigtede relationer fremfor hurtige løsninger.</p>
            </div>
            <div className="partnerships-reel-viewport">
              <div className="partnerships-reel">
                {/* First set of logos */}
                <div className="reel-item"><img src="https://rstomrer.dk/wp-content/uploads/2020/11/rs-tomrerfirma-logo-100x100px.svg" alt="RS Tømrer" /></div>
                <div className="reel-item"><img src="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/584824451_122130986906978261_8795687939830689822_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=_1lTCQDLQF8Q7kNvwFBKHfX&_nc_oc=Adqd6MJnKiBnwXauAbiXhucKrhFCxBNh6wh8Ul3pxxXwNvEnwgAI5aylRDDhau3MV-8&_nc_zt=23&_nc_ht=scontent-cph2-1.xx&_nc_gid=9VXu2w63s2xZEa_T3Pt09w&_nc_ss=7b2a8&oh=00_Af7Xaf5N4nZTDIBnsCptqJz8dhqucNBfEh3oN1YhY6ZXxg&oe=69FEF428" alt="AO Byggeri" /></div>
                <div className="reel-item"><img src="https://www.viston.dk/assets/images/logo-entreprise.png" alt="Viston Entreprise" /></div>
                {/* Duplicate set for seamless loop */}
                <div className="reel-item"><img src="https://rstomrer.dk/wp-content/uploads/2020/11/rs-tomrerfirma-logo-100x100px.svg" alt="RS Tømrer" /></div>
                <div className="reel-item"><img src="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/584824451_122130986906978261_8795687939830689822_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=_1lTCQDLQF8Q7kNvwFBKHfX&_nc_oc=Adqd6MJnKiBnwXauAbiXhucKrhFCxBNh6wh8Ul3pxxXwNvEnwgAI5aylRDDhau3MV-8&_nc_zt=23&_nc_ht=scontent-cph2-1.xx&_nc_gid=9VXu2w63s2xZEa_T3Pt09w&_nc_ss=7b2a8&oh=00_Af7Xaf5N4nZTDIBnsCptqJz8dhqucNBfEh3oN1YhY6ZXxg&oe=69FEF428" alt="AO Byggeri" /></div>
                <div className="reel-item"><img src="https://www.viston.dk/assets/images/logo-entreprise.png" alt="Viston Entreprise" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Preview */}
      <section className="section cases-preview">
        <div className="container">
          <div className="section-header-bold">
            <h2>Udvalgte cases</h2>
            <Link to="/cases" className="bold-link">Se alle cases &rarr;</Link>
          </div>
          
          <div className="cases-grid-bold">
            <div className="case-card-bold">
              <div className="case-image-bold">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" alt="Håndværker detalje" />
                <div className="case-overlay-bold">
                  <span className="case-result-bold">+100% visninger</span>
                </div>
              </div>
              <h3>RS Tømrer</h3>
            </div>
            
            <div className="case-card-bold">
              <div className="case-image-bold">
                <img src="https://images.unsplash.com/photo-1530124560612-4eb9a194380f?auto=format&fit=crop&w=800&q=80" alt="Værktøj og detaljer" />
                <div className="case-overlay-bold">
                  <span className="case-result-bold">18 konkrete leads</span>
                </div>
              </div>
              <h3>AO Byggeri</h3>
            </div>

            <div className="case-card-bold">
              <div className="case-image-bold">
                <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" alt="Strategi og planlægning" />
                <div className="case-overlay-bold">
                  <span className="case-result-bold">Brand strategi</span>
                </div>
              </div>
              <h3>Viston Entreprise A/S</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview-bold">
        <div className="container">
          <div className="services-header-bold">
            <h2>Vi skaber <span className="text-accent">vækst</span> gennem strategi, content og <span className="text-accent">performance</span></h2>
            <Link to="/services" className="bold-link">Se alle services &rarr;</Link>
          </div>
          
          <div className="services-grid-bold">
            <div className="service-card-bold">
              <span className="service-number-bold">01</span>
              <h3>Brandstrategi</h3>
              <p className="text-muted">Vi lægger fundamentet for din virksomheds visuelle rejse.</p>
            </div>
            <div className="service-card-bold">
              <span className="service-number-bold">02</span>
              <h3>Content</h3>
              <p className="text-muted">Professionel video og foto der skiller sig ud fra mængden.</p>
            </div>
            <div className="service-card-bold">
              <span className="service-number-bold">03</span>
              <h3>Sociale medier</h3>
              <p className="text-muted">Vi tager styringen og sikrer en rød tråd i din kommunikation.</p>
            </div>
            <div className="service-card-bold">
              <span className="service-number-bold">04</span>
              <h3>Annoncering</h3>
              <p className="text-muted">Målrettet Meta Ads der skaber målbare resultater.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta-bold">
        <div className="container">
          <div className="cta-box-bold">
            <h2>Klar til at tage dit content til næste niveau?</h2>
            <Link to="/kontakt" className="btn btn-primary">Kontakt os nu</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
