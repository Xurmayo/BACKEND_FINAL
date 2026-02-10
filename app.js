const express = require("express");
const path = require("path");

const app = express();

/* BODY PARSER */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*  STATIC FILES */
app.use(express.static(path.join(__dirname, "public")));


/* ROUTES */
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const menuRoutes = require("./routes/menuRoutes");
const messageRoutes = require("./routes/messageRoutes");
const reservationRoutes = require("./routes/reservationRoutes");


app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/reservations", reservationRoutes);

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Restaurant API running");
});

module.exports = app;
