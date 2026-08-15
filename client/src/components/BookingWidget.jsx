import { features } from "../data/content.js";

export default function BookingWidget() {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container booking-wrap hidden-init" id="booking">
      <form className="booking" onSubmit={handleSubmit}>
        <div className="field">
          <div className="ico"><i className="fa-regular fa-calendar"></i></div>
          <div className="field-body"><label>Check-in</label><input type="date" /></div>
        </div>
        <div className="field">
          <div className="ico"><i className="fa-regular fa-calendar-check"></i></div>
          <div className="field-body"><label>Check-out</label><input type="date" /></div>
        </div>
        <div className="field">
          <div className="ico"><i className="fa-solid fa-user-group"></i></div>
          <div className="field-body">
            <label>Guests</label>
            <select>
              <option>2 Adults, 1 Child</option>
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>Family (4+)</option>
            </select>
          </div>
        </div>
        <div className="field">
          <div className="ico"><i className="fa-solid fa-bed"></i></div>
          <div className="field-body">
            <label>Room Type</label>
            <select>
              <option>All Rooms</option>
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Family</option>
              <option>AC Room</option>
            </select>
          </div>
        </div>
        <button className="search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i> Check Availability</button>
      </form>
      <div className="features">
        {features.map((f, i) => (
          <div className={`feature reveal delay-${i + 1}`} key={f.title}>
            <div className="icn"><i className={f.icon}></i></div>
            <div className="feature-text"><strong>{f.title}</strong><span>{f.sub}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
