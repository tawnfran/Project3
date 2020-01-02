var authController = require('../controllers/authcontroller.js');
// const passport = require("../config/passport/passport.js")
const passport = require("passport");


// module.exports = function (app, passport) {
module.exports = function (app) {

    console.log("auth.js ran");

    // app.get("/api/signup", authController.signup);
    app.get("/signup", authController.signup);

    // app.get("/api/signin", authController.signin);
    // app.get("/signin", authController.signin);

    // app.post("/api/signup", passport.authenticate("local-signup", {
    //     successRedirect: "/guests",

    //     failureRedirect: "/signup"
    // }

    // ));

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/guests",

        failureRedirect: "/signup"
    }

    ));

    app.get('/dashboard', authController.dashboard);

    app.get('/logout', authController.logout);

    app.get("/signin", authController.signin);
 
 
    app.post('/signin', passport.authenticate("local-signin", {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signin'
        }
 
    ));
 
 
    function signedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }

}