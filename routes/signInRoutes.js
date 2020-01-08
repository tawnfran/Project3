const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport/passport.js");





//     app.use(passport.initialize());
// app.use(passport.session());
// require("../config/passport/passport.js")(passport);

//get route
// app.get("/");

// app.post("/api/signin", passport.authenticate("passport-local"), function(req, res, err) {

//     app.post("/api/signin", passport.authenticate("local"), function(req, res, err) {
//         console.log("signInRoutes.js app.post /api/signin ran");



//     // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
//     // So we're sending the user back the route to the members page because the redirect will happen on the front end
//     // They won't get this or even be able to access this page if they aren't authed
//     // console.log(`req user from the api/login route: ${req.user}`);
//     res.json(req.user);
//   });

router.post(
    "/api/signin",
    function (req, res, next) {
        console.log("signInRoutes.js app.post /api/signin ran, req.body is:");
        console.log(req.body);
        next()
    },
    passport.authenticate("local-signin"),
    (req, res) => {
        console.log("logged in, inside signInRoutes", req.user);
        var userInfo = {
            username: req.user.username,
            fullname: req.user.fullname,
            id: req.user.id
        };
        res.send(userInfo);
    }
)



// Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
// So we're sending the user back the route to the members page because the redirect will happen on the front end
// They won't get this or even be able to access this page if they aren't authed
//     // console.log(`req user from the api/login route: ${req.user}`);
//     res.json(req.user);
//   });


router.post("/api/signup", function (req, res) {
    console.log(req.body);

    console.log("req.body.fullname is " + req.body.fullname);

    db.User.create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(function () {
            console.log("New user created!");
            res.json(req.body);
        })
        .catch(function (err) {
            console.log(err);
        });

    // db.User.create({
    //     fullname: req.body.fullname

    // })
});


router.get("/user", (req, res, next) => {
    console.log("req.user is");
    console.log(req.user)
    if (req.user) {
        res.json(req.user)
    } else {
        res.json({ username: "Not signed in" })
    }
})

router.get("/signout", (req, res) => {
    console.log("************* /signout ran");
    req.session.destroy(function (err) {
        console.log("SIGNING OUT");
        res.send("Signed out");
    });
})

module.exports = router