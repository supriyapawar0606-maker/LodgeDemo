import { galleryImages } from "../data/content.js";

export default function GalleryTestimonial() {
  return (
    <section className="split-section" id="gallery">
      <div className="container">
        <div className="split-grid">
          <div className="testi-card reveal-left">
            <div>
              <h3>What Our <em>Guests Say</em></h3>
              <p className="quote">
                Very peaceful place with excellent service. Rooms are clean and the staff is very
                cooperative. Highly recommended for anyone visiting the temple — felt truly at home.
              </p>
              <div className="stars">★ ★ ★ ★ ★</div>
            </div>
            <div className="testi-author">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80" alt="Ramesh Sharma" />
              <div><div className="name">Ramesh Sharma</div><div className="place">Delhi, India</div></div>
            </div>
          </div>
          <div className="gallery-preview reveal-right">
            <h3>Gallery <em>Preview</em></h3>
            <div className="gallery-grid">
              {galleryImages.map((src, i) => (
                <a href="#" key={i}><img src={src} alt="" /></a>
              ))}
            </div>
            <div className="gallery-foot"><a href="#">View Full Gallery <i className="fa-solid fa-arrow-right"></i></a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
