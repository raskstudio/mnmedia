import './Services.css';

const servicesData = [
  {
    title: "Brandstrategi",
    hvad: "Positionering, målgruppe, budskab",
    hvordan: "Workshops, sparring, konkret plan",
    beskrivelse: "Vi lægger fundamentet for din virksomheds visuelle rejse og sikrer, at dit budskab rammer plet hos din målgruppe."
  },
  {
    title: "Content",
    hvad: "Foto & video",
    hvordan: "Planlægning, optagelse, redigering",
    beskrivelse: "Professionel medieproduktion, der fanger opmærksomheden og skaber engagement på alle digitale platforme."
  },
  {
    title: "Sociale medier",
    hvad: "Drift af SoMe",
    hvordan: "Contentplan, opslag, community",
    beskrivelse: "Vi tager hånd om din tilstedeværelse online, så du kan fokusere på din kerneforretning, mens vi bygger dit brand."
  },
  {
    title: "Annoncering",
    hvad: "Meta Ads",
    hvordan: "Opsætning, content, optimering",
    beskrivelse: "Målrettet annoncering der ikke bare skaber visninger, men faktiske leads og konverteringer for din virksomhed."
  }
];

const Services = () => {
  return (
    <div className="services-page-bold">
      <section className="services-hero-bold section">
        <div className="container">
          <h1>Vores Services</h1>
          <p className="intro-text-bold">
            Vi hjælper med alt fra brandstrategi og rådgivning til produktion af content og opbygning af din visuelle identitet.
          </p>
        </div>
      </section>

      <section className="services-list-bold section">
        <div className="container">
          <div className="services-stack-bold">
            {servicesData.map((service, index) => (
              <div key={index} className="service-row-bold">
                <div className="service-header-row">
                  <span className="service-index">0{index + 1}</span>
                  <h2>{service.title}</h2>
                </div>
                <div className="service-body-row">
                  <p className="service-description">{service.beskrivelse}</p>
                  <div className="service-info-grid">
                    <div className="info-block">
                      <h4>Hvad</h4>
                      <p>{service.hvad}</p>
                    </div>
                    <div className="info-block">
                      <h4>Hvordan</h4>
                      <p>{service.hvordan}</p>
                    </div>
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

export default Services;
