const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: 100,
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
      match: [/^[0-9+\-\s()]{7,15}$/, "Enter a valid mobile number"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Enter a valid email address"],
    },
    checkin: {
      type: Date,
      required: [true, "Check-in date is required"],
    },
    checkout: {
      type: Date,
      required: [true, "Check-out date is required"],
      validate: {
        validator: function (value) {
          return value > this.checkin;
        },
        message: "Check-out date must be after check-in date",
      },
    },
    guests: {
      type: String,
      required: [true, "Guests field is required"],
      trim: true,
    },
    roomtype: {
      type: String,
      required: [true, "Room type is required"],
      trim: true,
    },
    specialrequest: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
