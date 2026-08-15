import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setHidden(true);
      const bw = document.querySelector(".booking-wrap");
      setTimeout(() => bw?.classList.add("show"), 300);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="page-loader" className={hidden ? "hidden" : ""}>
      <div className="loader-logo">ॐ Bhaktyanivas</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar"></div>
      </div>
    </div>
  );
}
