import './Proces.css';

const steps = [
  {
    number: "01",
    title: "Strategi & Opstart",
    description: "Vi dykker ned i din virksomhed, dine mål og din målgruppe for at skabe et solidt fundament for alt content."
  },
  {
    number: "02",
    title: "Kreativ Eksekvering",
    description: "Her bringer vi strategien til live gennem professionel video, foto og grafisk design, der skiller sig ud."
  },
  {
    number: "03",
    title: "Distribution & Ads",
    description: "Vi sikrer, at dit content rammer de rigtige personer på de rigtige tidspunkter gennem målrettet annoncering."
  },
  {
    number: "04",
    title: "Optimering",
    description: "Vi overvåger resultaterne løbende og optimerer strategien baseret på data for at sikre maksimal værdi."
  }
];

const Proces = () => {
  return (
    <div className="proces-page-bold">
      <section className="proces-hero-bold section">
        <div className="container">
          <h1>Vores proces</h1>
          <p className="intro-text-bold">Fra første idé til målbar resultater – sådan arbejder vi.</p>
        </div>
      </section>

      <section className="steps-section-bold section">
        <div className="container">
          <div className="steps-grid-bold">
            {steps.map((step, index) => (
              <div key={index} className={`step-card-bold card-${index + 1}`}>
                <span className="step-number-bold">{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proces;
