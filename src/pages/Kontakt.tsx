import './Kontakt.css';

const Kontakt = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('TAK FOR DIN HENVENDELSE! VI VENDER TILBAGE HURTIGST MULIGT.');
  };

  return (
    <div className="kontakt-page-bold">
      <section className="kontakt-hero-bold section">
        <div className="container">
          <h1>SKAL VI TAGE EN SNAK?</h1>
          <p className="intro-text-bold">LAD OS HJÆLPE JER VIDERE PÅ JERES DIGITALE REJSE</p>
          
          <div className="kontakt-main-grid-bold">
            <div className="kontakt-info-bold">
              <div className="info-box-bold">
                <h4>EMAIL</h4>
                <p>HELLO@MNMEDIA.DK</p>
              </div>
              <div className="info-box-bold">
                <h4>TELEFON</h4>
                <p>+45 12 34 56 78</p>
              </div>
              <div className="info-box-bold">
                <h4>ADRESSE</h4>
                <p>AARHUS C</p>
              </div>
            </div>

            <div className="kontakt-form-bold">
              <form onSubmit={handleSubmit}>
                <div className="input-row-bold">
                  <div className="input-group-bold">
                    <label>NAVN</label>
                    <input type="text" placeholder="DIT NAVN" required />
                  </div>
                  <div className="input-group-bold">
                    <label>VIRKSOMHED</label>
                    <input type="text" placeholder="VIRKSOMHED" required />
                  </div>
                </div>
                
                <div className="input-row-bold">
                  <div className="input-group-bold">
                    <label>EMAIL</label>
                    <input type="email" placeholder="EMAIL" required />
                  </div>
                  <div className="input-group-bold">
                    <label>TELEFON</label>
                    <input type="tel" placeholder="TELEFON" required />
                  </div>
                </div>
                
                <div className="input-group-bold">
                  <label>BESKED</label>
                  <textarea rows={6} placeholder="HVORDAN KAN VI HJÆLPE?" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block-bold">SEND HENVENDELSE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
