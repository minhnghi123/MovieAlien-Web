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

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
