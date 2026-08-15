import { facilities } from "../data/content.js";

export default function Facilities() {
  return (
    <section className="block facilities-section" id="facilities">
      <div className="container">
        <div className="section-head center reveal">
          <div className="heading">
            <span className="kicker">Our Facilities</span>
            <h2>Everything You Need for a <em>Comfortable Stay</em></h2>
            <p className="lead">From modern amenities to thoughtful services, we provide all the essentials to make your stay restful and worry-free.</p>
          </div>
        </div>
        <div className="fac-grid">
          {facilities.map((f, i) => (
            <div className={`fac-card reveal delay-${i + 1}`} key={f.title}>
              <div className="fac-icon"><i className={f.icon}></i></div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
