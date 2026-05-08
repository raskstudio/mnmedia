import './Cases.css';

const casesData = [
  {
    title: "RS Tømrer",
    category: "Meta Ads",
    description: "Målrettet kampagne for at skaffe flere tømrer-opgaver i lokalområdet.",
    resultat: "18 konkrete leads på 1 måned",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AO Byggeri",
    category: "Sociale medier",
    description: "Opbygning af en stærk visuel identitet på Instagram og Facebook.",
    resultat: "+100% visninger",
    image: "/images/AO-x-mn-media.jpg"
  },
  {
    title: "Viston Entreprise A/S",
    category: "Content",
    description: "Professionel videoproduktion af deres største byggeprojekter.",
    resultat: "Brand strategi & video",
    image: "/images/Viston-x-mn-media.jpg"
  },
  {
    title: "Nordic Homes",
    category: "Sociale medier",
    description: "Full service håndtering af deres digitale tilstedeværelse.",
    resultat: "Coming soon",
    comingSoon: true,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80"
  }
];

const Cases = () => {
  return (
    <div className="cases-page-bold">
      <section className="cases-hero-bold section">
        <div className="container">
          <h1>Cases</h1>
          <p className="intro-text-bold">Resultater drevet af kreativitet og strategisk indsigt.</p>
        </div>
      </section>

      <section className="cases-grid-section section">
        <div className="container">
          <div className="cases-list-bold">
            {casesData.map((item, index) => (
              <div key={index} className={`case-item-bold ${item.comingSoon ? 'is-coming-soon' : ''}`}>
                <div className="case-media-bold">
                  <img src={item.image} alt={item.title} />
                  <div className="case-tag-bold">{item.category}</div>
                  {item.comingSoon && (
                    <div className="coming-soon-label-bold">COMMING SOON</div>
                  )}
                </div>
                <div className="case-content-bold">
                  <div className="case-info-main">
                    <h2>{item.title}</h2>
                    <p className="case-desc-bold">{item.description}</p>
                  </div>
                  <div className="case-stats-bold">
                    <span className="stats-label">Resultat</span>
                    <span className="stats-value">{item.resultat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
