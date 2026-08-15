import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="site-header" className={scrolled ? "scrolled" : ""}>
      <div className="container nav-wrap">
        <a href="#home" className="logo">
          <div className="logo-icon"><i className="fa-solid fa-house-chimney"></i></div>
          <div className="logo-text">
            <h2>BHAKTYANIVAS</h2>
            <p>A Home Away From Home</p>
          </div>
        </a>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#nearby">Nearby Places</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-cta">
          <span className="phone-pill"><i className="fa-solid fa-phone"></i> +91 98765 43210</span>
          <a href="#book" className="btn-primary">Book Now</a>
        </div>
      </div>
    </header>
  );
}
