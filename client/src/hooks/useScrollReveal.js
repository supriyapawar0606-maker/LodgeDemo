import { useEffect } from "react";

// Re-runs on every route/content change to observe .reveal, .reveal-left,
// .reveal-right, .testi-card, .book-aside elements and add "visible"
// when they scroll into view — same behavior as the original inline script.
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const revealEls = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .testi-card, .book-aside"
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );

    revealEls.forEach((el) => io.observe(el));

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
