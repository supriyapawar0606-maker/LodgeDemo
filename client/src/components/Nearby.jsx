import { nearbyPlaces } from "../data/content.js";

export default function Nearby() {
  return (
    <section className="block nearby-section" id="nearby">
      <div className="container">
        <div className="section-head center reveal">
          <div className="heading">
            <span className="kicker">Nearby Attractions</span>
            <h2>Places You Can <em>Visit From Here</em></h2>
            <p className="lead">Bhaktyanivas is conveniently located close to several sacred and scenic spots — explore them all during your stay.</p>
          </div>
        </div>
        <div className="nearby-grid">
          {nearbyPlaces.map((p, i) => (
            <article className={`near-card reveal delay-${i + 1}`} key={p.title}>
              <div className="near-media">
                <span className="near-distance"><i className="fa-solid fa-location-dot"></i> {p.distance}</span>
                <img src={p.img} alt={p.title} />
              </div>
              <div className="near-body">
                <span className="type">{p.type}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="near-foot">
                  <span className="time"><i className="fa-regular fa-clock"></i> {p.time}</span>
                  <a href="#">View on Map <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
