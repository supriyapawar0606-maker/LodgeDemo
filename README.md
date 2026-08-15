# Bhaktyanivas — MERN Stack Version

A lodge/homestay booking website for Bhaktyanivas (near the temple in Akkalkot, Maharashtra),
converted from the original PHP + MySQL version into the MERN stack (MongoDB, Express, React, Node.js).

## What changed from the PHP version

| Original (PHP) | New (MERN) |
|---|---|
| `Home.html` (single static file, inline CSS/JS) | React app (`client/`), split into components |
| `booking.php` + `db.php` (MySQL insert) | Express API `POST /api/bookings` (`server/`) |
| MySQL `bookinginfo.booking` table | MongoDB `Booking` collection via Mongoose |
| No input validation | Mongoose schema validation (required fields, email/mobile format, check-out > check-in) |
| Alert + redirect on submit | Inline success/error message in the form (React state) |

All original sections (Hero, Quick Booking Widget, About, Facilities, Rooms, Nearby Places,
Booking Form, Gallery/Testimonial, Footer) and the original design/CSS/animations were preserved.

## Project structure

```
bhaktyanivas-mern/
├── client/              # React app (Vite)
│   ├── public/images/   # Local images (rooms, temple, palace, etc.)
│   └── src/
│       ├── components/  # One component per section
│       ├── data/        # Rooms / facilities / nearby-places content
│       ├── hooks/       # Scroll-reveal + ripple-effect hooks
│       ├── App.jsx
│       └── index.css    # Ported 1:1 from the original inline <style>
└── server/               # Express + MongoDB API
    ├── config/db.js
    ├── models/Booking.js
    ├── routes/bookingRoutes.js
    └── server.js
```

## Setup

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
# edit .env if your MongoDB URI is different (defaults to mongodb://127.0.0.1:27017/bhaktyanivas)
npm run dev        # nodemon, or: npm start
```

Server runs on `http://localhost:5000`.

You need MongoDB running locally, or set `MONGO_URI` in `.env` to a MongoDB Atlas connection string.

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

Client runs on `http://localhost:5173` and proxies `/api/*` requests to `http://localhost:5000`
(configured in `vite.config.js`), so the booking form talks to your local Express server automatically.

### 3. Try it

Open `http://localhost:5173`, scroll to **Book Your Stay**, fill the form and submit — it POSTs to
`/api/bookings`, saves to MongoDB, and shows a success message inline.

You can check saved bookings anytime at: `http://localhost:5000/api/bookings`

## API

| Method | Route | Description |
|---|---|---|
| POST | `/api/bookings` | Create a booking (validated) |
| GET | `/api/bookings` | List all bookings, newest first |

## Notes / next steps

- The quick "Check Availability" widget in the hero is UI-only (same as the original) — it doesn't
  hit any API yet. Wire it up if you want real availability search.
- No admin dashboard yet — `GET /api/bookings` returns raw JSON, useful as a base for one.
- For production, deploy `server/` (e.g. Render/Railway) with MongoDB Atlas, and `client/` (e.g.
  Vercel/Netlify), pointing the client's API calls at your deployed server URL instead of the proxy.
