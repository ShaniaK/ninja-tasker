const express = require("express");
const routes = express.Router();
const db = require("../models/index.js");
const passport = require("../config/passport");
const authentication = require("../config/middleware/isAuthenticated");

let list = ["code and watch anime", "slackline tonight"];


//ROUTES

//routing for tasks 

routes.get("/", authenticate, function(req,res){
  //console.log(req,user);
  db.Tasks.findAll({ where: { user:ID req.user.id }}).then ( function (results) {
    //console.log(results);
    res.render("home.ejs", { list: list });
  });
});


//Post/Ninja
routes.post("/ninja", function(req, res) {
todoExample.push(req.body.todoInputField);
db.Tasks.create({
  taskItem: req.body.todoInputField
  userID: req.user.id
}).then(function(results){
  res.redirect("/");
});
});

routes.delete("/delete/:index", function(req, res) {
  // let index = req.params.index;
  // todoExample.splice(index, 1);
  db.Tasks.destroy({ where: { id: req.params.index } }).then(function(results) {
    res.json(results);
  });
 });
 // routing for user: GET and POST for login, GET and POST for signup
 routes.get("/user/login", function(req, res) {
  res.render("login.ejs");
 });
 routes.post(
  "/user/login",
  passport.authenticate("local", {
    failureRedirect: "/user/login",
    successRedirect: "/"
  })
  /* function(req, res) {
    console.log("Hitting the post route for the login page");
    res.redirect("/");
  } */
 );
 routes.get("/user/registration", function(req, res) {
  res.render("registration.ejs");
 });
 routes.post(
  "/user/registration",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/user/registration"
  })
 );
 // profile page
 routes.get("/user/profile", authenticate, function(req, res) {
  res.render("profile.ejs", { user: req.user });
 });
 routes.get("/user/logout", function(req, res) {
  console.log("hitting the logout route");
  req.logout();
  res.redirect("/");
 });
 module.exports = routes;