const express = require("express");
const app = express();
const Router = express.Router();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.json());
const callback = (c) => {
  console.log("credential is " + c);
};
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/contact", (req, res, next) => {
  res.render("contact");
});

app.get("/services", (req, res, next) => {
  res.render("services");
});

app.listen(PORT, () => {
  console.log("app is listen on port " + PORT);
});
