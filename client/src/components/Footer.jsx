export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand reveal">
            <a href="#home" className="logo">
              <div className="logo-icon"><i className="fa-solid fa-house-chimney"></i></div>
              <div className="logo-text"><h2>BHAKTYANIVAS</h2><p>A Home Away From Home</p></div>
            </a>
            <p className="about">
              Bhaktyanivas is a premium lodge offering comfortable rooms, modern amenities and a
              peaceful environment for pilgrims and travellers alike.
            </p>
            <div className="socials">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
          <div className="foot-col reveal delay-1">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#nearby">Nearby Places</a></li>
              <li><a href="#book">Book Now</a></li>
            </ul>
          </div>
          <div className="foot-col reveal delay-2">
            <h4>Facilities</h4>
            <ul>
              <li><a href="#">Free Wi-Fi</a></li>
              <li><a href="#">Ample Parking</a></li>
              <li><a href="#">Power Backup</a></li>
              <li><a href="#">Hot Water</a></li>
              <li><a href="#">CCTV Security</a></li>
              <li><a href="#">Room Service</a></li>
            </ul>
          </div>
          <div className="foot-col reveal delay-3">
            <h4>Contact Us</h4>
            <div className="contact-line"><i className="fa-solid fa-phone"></i><span>+91 98765 43210</span></div>
            <div className="contact-line"><i className="fa-solid fa-envelope"></i><span>bhaktyanivas@gmail.com</span></div>
            <div className="contact-line"><i className="fa-solid fa-location-dot"></i><span>123, Temple Road, Akkalkot, Maharashtra </span></div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2025 Bhaktyanivas. All Rights Reserved.</span>
          <span><a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms &amp; Conditions</a></span>
        </div>
      </div>
    </footer>
  );
}
