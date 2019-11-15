//packages
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index.js");
//starting express app
const app = express();

//setting view engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let list = ["code and watch anime", "slackline tonight"];

// Routes

//Get Home
app.get("/", function(req, res) {
  res.render("home.ejs", { list: list });
});

//Post/Ninja
app.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  list.push(req.body.taskItem);
  res.render("home.ejs", { list: list });
});

app.delete("/delete/:home", function(req, res) {
  console.log(req.params.home);

  list.splice(req.params.home, 1);

  res.json(list);
});

//server listening for request

db.sequelize.sync().then(function() {
  app.listen("3000", function(err) {
    if (err) {
      console.log(err);
    }
    console.log("listening on port 3000");
  });
});
