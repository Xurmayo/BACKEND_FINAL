const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST /api/messages
router.post("/", async (req, res) => {
  try {
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

    res.status(201).json({
      success: true,
      message: "Message sent",
      data: newMessage
    });

  } catch (err) {
    console.error("MESSAGE ERROR:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
