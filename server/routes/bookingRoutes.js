const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST /api/bookings  -> create a new booking (replaces booking.php)
router.post("/", async (req, res) => {
  try {
    const {
      fullname,
      mobile,
      email,
      checkin,
      checkout,
      guests,
      roomtype,
      specialrequest,
    } = req.body;

    const booking = await Booking.create({
      fullname,
      mobile,
      email,
      checkin,
      checkout,
      guests,
      roomtype,
      specialrequest,
    });

    res.status(201).json({
      success: true,
      message: "Booking Confirmed Successfully",
      data: booking,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
});

// GET /api/bookings -> list all bookings (for a future admin view)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, count: bookings.length, data: bookings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Could not fetch bookings" });
  }
});

module.exports = router;
