var db = require("../models");

module.exports = function(app){

    //get route
    // app.get("/");

    app.post("/api/user", function(req, res) {
        console.log(req.body);

        // db.User.create({
        //     fullname: req.body.fullname

        // })
    })

}