const express = require("express");
const path = require("path");
const app = express();
const port = 3000 | process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
// Pages
// Home
app.get("/", (req, res) => {
  res.render("home");
});
// About
app.get("/about", (req, res) => {
  res.render("about");
});
// Skills
app.get("/skills", (req, res) => {
  res.render("skills");
});
// Contect
app.get("/contect", (req, res) => {
  res.render("contect");
});
// Projects
app.get("/projects", (req, res) => {
  res.render("projects");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
