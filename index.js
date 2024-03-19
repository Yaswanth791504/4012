require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoute");

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(require("morgan")("dev"));
app.use(require("cors")());
app.set("view engine", "pug");

// api Routes
app.use("/api/auth", express.urlencoded({ extended: true }), authRoutes);

// views Routes
app.get("/login", (req, res) => {
  res.render("index", { title: "Hey" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign up" });
});

app.get("/home", (req, res) => {
  res.render("home", { title: "Home" });
});

app.use("*", (_, res) => {
  res.redirect("/login");
});
module.exports = app;
