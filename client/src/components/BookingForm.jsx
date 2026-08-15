import { useState } from "react";
import axios from "axios";

const initialState = {
  fullname: "",
  mobile: "",
  email: "",
  checkin: "",
  checkout: "",
  guests: "2 Adults, 1 Child",
  roomtype: "Deluxe Room (₹2,000/night)",
  specialrequest: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "submitting", message: "" });
    try {
      const res = await axios.post("/api/bookings", form);
      setStatus({ state: "success", message: res.data.message || "Booking Confirmed Successfully" });
      setForm(initialState);
    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong. Please try again.";
      setStatus({ state: "error", message });
    }
  };

  return (
    <form className="book-form reveal-left" onSubmit={handleSubmit}>
      <h3>Booking Details</h3>
      <p className="sub">All fields are required to confirm your reservation.</p>

      {status.state === "success" && (
        <div style={{ background: "#e6f4ea", color: "#1e7a34", padding: "12px 16px", borderRadius: 12, marginBottom: 16, fontSize: 14 }}>
          {status.message}
        </div>
      )}
      {status.state === "error" && (
        <div style={{ background: "#fbe7e7", color: "#a11", padding: "12px 16px", borderRadius: 12, marginBottom: 16, fontSize: 14 }}>
          {status.message}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullname" placeholder="John Doe" value={form.fullname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input type="tel" name="mobile" placeholder="+91 98765 43210" value={form.mobile} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row single">
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Check-in Date</label>
          <input type="date" name="checkin" value={form.checkin} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Check-out Date</label>
          <input type="date" name="checkout" value={form.checkout} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Guests</label>
          <select name="guests" value={form.guests} onChange={handleChange} required>
            <option>2 Adults, 1 Child</option>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>Family (4+)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Room Type</label>
          <select name="roomtype" value={form.roomtype} onChange={handleChange} required>
            <option>Deluxe Room (₹2,000/night)</option>
            <option>Standard Room (₹1,500/night)</option>
            <option>Family Room (₹2,800/night)</option>
            <option>AC Room (₹2,200/night)</option>
          </select>
        </div>
      </div>

      <div className="form-row single">
        <div className="form-group">
          <label>Special Request (Optional)</label>
          <textarea
            name="specialrequest"
            placeholder="Any special requirements, dietary needs or arrival time…"
            value={form.specialrequest}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <button type="submit" className="submit-book" disabled={status.state === "submitting"}>
        <i className="fa-solid fa-lock"></i> {status.state === "submitting" ? "Booking..." : "Confirm Booking"}
      </button>
    </form>
  );
}
