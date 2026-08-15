import BookingForm from "./BookingForm.jsx";

export default function BookSection() {
  return (
    <section className="block book-section" id="book">
      <div className="container">
        <div className="section-head center reveal">
          <div className="heading">
            <span className="kicker">Book Your Stay</span>
            <h2>Reserve Your <em>Peaceful Retreat</em></h2>
            <p className="lead">Fill in the details below and our team will confirm your booking within minutes.</p>
          </div>
        </div>
        <div className="book-grid">
          <BookingForm />
          <aside className="book-aside">
            <div className="aside-card">
              <h4>Why Book <em>With Us?</em></h4>
              <div className="row"><span>Best Price Guarantee</span><strong><i className="fa-solid fa-check"></i></strong></div>
              <div className="row"><span>Free Cancellation</span><strong><i className="fa-solid fa-check"></i></strong></div>
              <div className="row"><span>No Hidden Charges</span><strong><i className="fa-solid fa-check"></i></strong></div>
              <div className="row"><span>Instant Confirmation</span><strong><i className="fa-solid fa-check"></i></strong></div>
              <div className="row"><span>24×7 Customer Support</span><strong><i className="fa-solid fa-check"></i></strong></div>
            </div>
            <div className="aside-card aside-contact">
              <div className="ico-circle"><i className="fa-solid fa-phone"></i></div>
              <div><div className="label">Need Help? Call Us</div><div className="value">+91 98765 43210</div></div>
            </div>
            <div className="aside-card aside-contact">
              <div className="ico-circle"><i className="fa-solid fa-envelope"></i></div>
              <div><div className="label">Email Booking</div><div className="value">bhaktyanivas@gmail.com</div></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
