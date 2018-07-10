//REVIEW CODE

var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {
  // Authenticate Login
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });

  

  // Add a dog entry
  app.post("/api/signup", function(req, res) {
    console.log("newDog Data:");
    console.log(req.body);
    db.Dogs.create({
    
      name: req.body.name,
      dogName: req.body.dogName,
      favorite_park: req.body.dogParks,
      preferred_time: req.body.preferredTime,
      size: req.body.dogSize,
      dogPhoto: req.body.dogPhoto,
      personality: req.body.personality,
      activity_level: req.body.activityLevel,
      UserId: 8
      //change user id from 8 to req.body.UserId when authentication is included
    })
      .then(function() {
        // res.json("/members");
      });
  });

  // Add new user
  app.post("/api/newuser", function(req, res) {
    console.log("newUser Data:");
    console.log(req.body);
    db.User.create({
    
      email: req.body.email,
      password: req.body.password
      
    })
      .then(function() {
        // res.json("/signin");
      });
  });

  // Logout
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Get all dogs
  app.get("/api/all", function(req, res) {
    Dogs.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  

};
