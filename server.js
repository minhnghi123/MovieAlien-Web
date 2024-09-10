const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT;
//view engine configuration
app.set("views", "./views");
app.set("view engine", "pug");

//middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home/pages/index");
});

app.get("/batman", (req, res) => {
  res.render("home/pages/batman.pug");
});

app.get("/eternals", (req, res) => {
  res.render("home/pages/eternals.pug");
});

app.get("/jumanji", (req, res) => {
  res.render("home/pages/jumanji.pug");
});

app.get("/junglecruise", (req, res) => {
  res.render("home/pages/junglecruise.pug");
});

app.get("/shangchi", (req, res) => {
  res.render("home/pages/shangchi.pug");
});

app.get("/uncharted", (req, res) => {
  res.render("home/pages/uncharted.pug");
});

app.get("/wolverine", (req, res) => {
  res.render("home/pages/wolverine.pug");
});

app.get("/flash", (req, res) => {
  res.render("home/pages/flash.pug");
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
