const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

// HTML 적용
app.set("views", __dirname + "/views");
app.set("View Engine", "ejs");
app.engine("html", require("ejs").renderFile);

// CSS 적용
app.use(express.static("public"));

app.use(function (req, res, next) {
  res.status(404).send("404 Error");
});

// route, routing
app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/about", function (req, res) {
  res.send("about");
});
