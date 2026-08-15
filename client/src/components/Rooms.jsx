import { rooms } from "../data/content.js";
import { handleRipple } from "../hooks/ripple.js";

export default function Rooms() {
  return (
    <section className="block rooms-section" id="rooms">
      <div className="container">
        <div className="section-head reveal">
          <div className="heading">
            <span className="kicker">Our Accommodations</span>
            <h2>Our <em>Rooms</em></h2>
            <p className="lead">Choose from our handpicked rooms designed for a serene, restful and memorable stay.</p>
          </div>
          <a href="#rooms" className="btn-outline">View All Rooms <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="rooms-row">
          {rooms.map((r, i) => (
            <article className={`room-card reveal delay-${i + 1}`} key={r.title}>
              <div className="room-media">
                <span className="room-badge">{r.badge}</span>
                <img src={r.img} alt={r.title} />
              </div>
              <div className="room-body">
                <h3>{r.title}</h3>
                <div className="room-meta">
                  <span><i className="fa-solid fa-user-group"></i> {r.guests}</span>
                  <span><i className="fa-solid fa-ruler-combined"></i> {r.area}</span>
                </div>
                <div className="room-foot">
                  <div className="room-price"><span className="amt">{r.price}</span><span className="per">/ night</span></div>
                  <a href="#book" className="book-mini" onClick={handleRipple}>Book Now</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
