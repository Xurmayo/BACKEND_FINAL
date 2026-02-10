const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

/* CREATE MESSAGE (PUBLIC) */
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newMessage = await Message.create({
    name,
    email,
    subject,
    message
  });

  res.status(201).json(newMessage);
});

/* GET ALL MESSAGES (ADMIN) */
router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

/* MARK AS READ */
router.patch("/:id/read", async (req, res) => {
  await Message.findByIdAndUpdate(req.params.id, {
    status: "read"
  });
  res.json({ success: true });
});

/* DELETE MESSAGE (RESPONDED) */
router.delete("/:id", async (req, res) => {
  await Message.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
