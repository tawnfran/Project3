var authController = require('../controllers/authcontroller.js');
const passport = require("../config/passport/passport.js");
const router = require('express').Router()



console.log("auth.js ran");

// app.get("/api/signup", authController.signup);
router.get("/signup", authController.signup);

// app.get("/api/signin", authController.signin);
// app.get("/signin", authController.signin);

// app.post("/api/signup", passport.authenticate("local-signup", {
//     successRedirect: "/guests",

//     failureRedirect: "/signup"
// }

// ));

router.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/guests",

    failureRedirect: "/signup"
}

));

// app.get('/user', authController.user);

// app.get('/logout', authController.logout);

router.get("/signin", authController.signin);


router.post('/signin', passport.authenticate("local-signin", {
    successRedirect: '/user',

    failureRedirect: '/signin'
}

));

module.exports = router;


function signedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/signin');

}