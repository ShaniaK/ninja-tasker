//packages
const express = require("express");
const bodyParser = require("body-parser");

//starting express app
const app = express();

//setting view engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));

let list = ["code and watch anime", "slackline tonight"];
// Routes

//Get Home
app.get("/", function(req, res) {
  res.render("home.ejs", { list: list });
});

//Post
app.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  list.push(req.body.taskItem);
  res.render("home.ejs", { list: list });
});

//server listening for request
app.listen(3000, function() {
  console.log("server is Lit!!!!!!!!");
});
