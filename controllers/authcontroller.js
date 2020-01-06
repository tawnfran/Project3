var db = require("../models");
// const passport = require("../config/passport/passport.js")
// const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

exports.signup = function (req, res) {
  res.render("signup");
};

// exports.signin = function (req, res) {
//   console.log("inside authcontroller.js, this ran")
//   res.render("signin");
// };

exports.user = function (req, res) {
  if (req.user) {
    db.user
      .findOne({
        where: {
          id: req.user.id
        }
      })
      .then(function (dbUser) {
        var userObject = {
          user: req.user,
          fullname: dbUser.fullname,
          username: dbUser.username,
          email: dbUser.email,
          password: dbUser.password
        };
        res.json(userObject);
      });
  }
  else {
    res.json({
      username: "Not signed in   -from authcontroller"
    })
  }
};

exports.signin = function (req, res) {
  if (req.user) {
    db.user
      .findOne({
        where: {
          id: req.user.id
        }
      })
      .then(function (dbUser) {
        var userObject = {
          // user: req.user,
          // username: dbUser.username,
          // firstname: dbUser.firstname,
          // lastname: dbUser.lastname,
          // image: dbUser.image
          username: dbUser.username,
          password: dbUser.password,
          fullname: dbUser.fullname,
          email: dbUser.email
        };
        res.render("signin", userObject);
      });
  }
};

// exports.shelf = function(req, res) {
//   res.render("shelf");
// };

exports.logout = function (req, res) {
  // eslint-disable-next-line no-unused-vars
  req.session.destroy(function (err) {
    res.redirect("/signin");
  });
};
