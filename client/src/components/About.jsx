export default function About() {
  return (
    <section className="block about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media reveal-left">
            <img className="main-img" src="/images/about.png" alt="Bhaktyanivas Property" />
            <img className="sub-img" src="/images/about2.png" alt="Room Interior" />
            <div className="badge-yrs"><strong>12+</strong><span>Years of Trust</span></div>
          </div>
          <div className="about-body reveal-right">
            <span className="kicker">About Us</span>
            <h2>A Peaceful Home, <em>Close to the Divine.</em></h2>
            <p>
              Bhaktyanivas was founded with one promise — to provide pilgrims and travellers a
              clean, comfortable and affordable stay that feels just like home. Nestled near the
              temple, our lodge blends modern hospitality with traditional warmth.
            </p>
            <p>
              From spotless rooms to a serene environment and friendly staff, every detail is
              designed for your peace of mind. Whether you are visiting for darshan or a family
              vacation, we are honoured to host you.
            </p>
            <div className="about-points">
              <div className="reveal delay-1"><i className="fa-solid fa-check"></i><strong>Clean &amp; Hygienic Rooms</strong></div>
              <div className="reveal delay-2"><i className="fa-solid fa-check"></i><strong>Friendly Staff &amp; Service</strong></div>
              <div className="reveal delay-3"><i className="fa-solid fa-check"></i><strong>Affordable Pricing</strong></div>
              <div className="reveal delay-4"><i className="fa-solid fa-check"></i><strong>Walking Distance to Temple</strong></div>
            </div>
            <a href="#book" className="btn-primary reveal delay-5">Book Your Stay <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
