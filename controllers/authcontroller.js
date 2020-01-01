var db = require("../models");

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  console.log("inside authcontroller.js, this ran")
  res.render("signin");
};

exports.dashboard = function(req, res) {
  if (req.user) {
    db.user
      .findOne({
        where: {
          id: req.user.id
        }
      })
      .then(function(dbUser) {
        var hbsObject = {
          user: req.user,
         fullname: dbUser.fullname,
          username: dbUser.username,
         email: dbUser.email,
          password: dbUser.password
        };
        res.render("dashboard", hbsObject);
      });
  }
};

exports.shelf = function(req, res) {
  if (req.user) {
    db.user
      .findOne({
        where: {
          id: req.user.id
        }
      })
      .then(function(dbUser) {
        var hbsObject = {
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
        res.render("signin", hbsObject);
      });
  }
};

// exports.shelf = function(req, res) {
//   res.render("shelf");
// };

exports.logout = function(req, res) {
  // eslint-disable-next-line no-unused-vars
  req.session.destroy(function(err) {
    res.redirect("/signin");
  });
};
