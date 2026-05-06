import './OmMNmedia.css';

const OmMNmedia = () => {
  return (
    <div className="about-page-bold">
      <section className="about-hero-bold section">
        <div className="container">
          <div className="about-hero-grid-bold">
            <div className="about-hero-content-bold">
              <h1>Specialister i digital vækst</h1>
              <p className="intro-text-bold">
                Vi hjælper håndværkere og entreprenører med at dominere det digitale landskab.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-split-bold section">
        <div className="container">
          <div className="split-row-bold">
            <div className="split-image-bold">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" alt="Team meeting" />
            </div>
            <div className="split-text-bold">
              <h2>Personlig, direkte og resultat-orienteret</h2>
              <p>
                Mit navn er [Navn], og jeg grundlagde MNmedia med en vision om at gøre professionel medieproduktion og digital strategi tilgængelig for mindre og mellemstore virksomheder.
              </p>
              <p>
                Vi vinder kun, hvis vores kunder vinder. Derfor er hver eneste strategi skabt med ét mål for øje – at skabe målbar værdi for din forretning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-bold section">
        <div className="container">
          <div className="why-header-bold">
            <h2>Hvorfor MNmedia?</h2>
          </div>
          <div className="why-grid-bold">
            <div className="why-card-bold">
              <span className="why-number">01</span>
              <h3>Gennemsigtighed</h3>
              <p>Ingen skjulte gebyrer. Fast pris, fast deadline.</p>
            </div>
            <div className="why-card-bold">
              <span className="why-number">02</span>
              <h3>Resultater</h3>
              <p>Vi kigger på tallene. Vi optimerer indtil det virker.</p>
            </div>
            <div className="why-card-bold">
              <span className="why-number">03</span>
              <h3>Specialisering</h3>
              <p>Vi taler håndværker-sprog. Vi forstår din hverdag.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OmMNmedia;
