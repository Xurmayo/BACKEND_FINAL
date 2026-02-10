const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");
const authMiddleware = require("../middleware/authMiddleware");


// ================= USER CREATE RESERVATION =================
router.post("/", authMiddleware, async (req, res) => {

  const { date, time, guests } = req.body;

  if (!date || !time || !guests) {
    return res.status(400).json({ error: "All fields required" });
  }

  const existing = await Reservation.findOne({ date, time });

  if (existing) {
    return res.status(409).json({ error: "Time slot already reserved" });
  }

  const reservation = await Reservation.create({
    user: req.user.id,
    date,
    time,
    guests
  });

  res.status(201).json(reservation);
});


// ================= USER GET THEIR RESERVATIONS =================
router.get("/my", authMiddleware, async (req, res) => {

  const reservations = await Reservation.find({ user: req.user.id });

  res.json(reservations);
});




// ================= ADMIN GET ALL RESERVATIONS =================
router.get("/", async (req, res) => {

  const reservations = await Reservation.find()
    .populate("user", "email");

  res.json(reservations);
});


// ================= ADMIN DELETE RESERVATION =================
router.delete("/:id", async (req, res) => {

  await Reservation.findByIdAndDelete(req.params.id);

  res.json({ message: "Reservation deleted" });
});

// ================= USER DELETE OWN RESERVATION =================
router.delete("/my/:id", authMiddleware, async (req, res) => {

  const reservation = await Reservation.findById(req.params.id);

  if (!reservation) {
    return res.status(404).json({ error: "Reservation not found" });
  }

  // SECURITY CHECK
  if (reservation.user.toString() !== req.user.id) {
    return res.status(403).json({ error: "Not authorized to delete this reservation" });
  }

  await reservation.deleteOne();

  res.json({ message: "Reservation cancelled" });
});



module.exports = router;
