import { useEffect, useRef } from "react";

const particles = [
  { w: 6, h: 6, left: "14%", bottom: "22%", dur: "7s", delay: "0s", opacity: 0.45 },
  { w: 4, h: 4, left: "28%", bottom: "32%", dur: "9s", delay: "1.5s", opacity: 0.3 },
  { w: 8, h: 8, left: "58%", bottom: "16%", dur: "6s", delay: "3s", opacity: 0.35 },
  { w: 5, h: 5, left: "74%", bottom: "26%", dur: "8s", delay: "0.8s", opacity: 0.4 },
  { w: 3, h: 3, left: "44%", bottom: "11%", dur: "10s", delay: "2s", opacity: 0.3 },
  { w: 7, h: 7, left: "84%", bottom: "36%", dur: "5s", delay: "4s", opacity: 0.25 },
];

function animateCount(el, target, suffix, dur) {
  let start = 0;
  const step = target / (dur / 16);
  const t = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = (target >= 1000 ? Math.floor(start / 1000) + "K" : Math.floor(start)) + suffix;
    if (start >= target) clearInterval(t);
  }, 16);
}

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    const statsBox = statsRef.current;
    if (!statsBox) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          statsBox.querySelectorAll(".num[data-count]").forEach((el) => {
            animateCount(el, +el.dataset.count, el.dataset.suffix || "", 1800);
          });
        }
      },
      { threshold: 0.6 }
    );
    io.observe(statsBox);
    return () => io.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.w,
            height: p.h,
            left: p.left,
            bottom: p.bottom,
            "--dur": p.dur,
            "--delay": p.delay,
            opacity: p.opacity,
          }}
        ></div>
      ))}
      <div className="container">
        <div className="hero-inner">
          <span className="eyebrow">Welcome to</span>
          <h1>Bhaktya<span className="shimmer-text">nivas</span></h1>
          <p className="tagline">Comfort. Peace. Devotion.</p>
          <p className="desc">
            Experience a peaceful stay in our well-maintained property with modern amenities,
            warm hospitality and a divine atmosphere — just steps away from the temple.
          </p>
          <div className="hero-cta">
            <a href="#book" className="btn-primary">Book Your Stay Now <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#rooms" className="btn-ghost">Explore Rooms</a>
          </div>
        </div>
        <div className="hero-stats" ref={statsRef}>
          <div className="stat"><div className="num" data-count="12" data-suffix="+">12+</div><div className="lbl">Years of Service</div></div>
          <div className="stat"><div className="num">4.9★</div><div className="lbl">Guest Rating</div></div>
          <div className="stat"><div className="num" data-count="5000" data-suffix="+">5K+</div><div className="lbl">Happy Pilgrims</div></div>
        </div>
      </div>
    </section>
  );
}
