const db = require("../models");
//const passport = require("./config/passport");

module.exports = function(app){

    //get route
    // app.get("/");

    app.post("/api/user", function(req, res) {
        console.log(req.body);

        console.log("req.body.fullname is " + req.body.fullname);

        db.User.create({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(function (){
            console.log("New user created!");
            res.json(req.body);
        })
        .catch(function(err) {
            console.log(err);
        });

        // db.User.create({
        //     fullname: req.body.fullname

        // })
    });

}