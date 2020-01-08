const LocalStrategy = require("passport-local").Strategy;
const db = require("../../models");
const bCrypt = require('bcrypt-nodejs');

module.exports = new LocalStrategy(

    {

        // by default, local strategy uses username and password, we will override with email

        usernameField: 'username',

        passwordField: 'password',

        passReqToCallback: true // allows us to pass back the entire request to the callback

    },
    function (req, username, password, done) {

        // var User = db.user;

        var isValidPassword = function (userpass, password) {

            return bCrypt.compareSync(password, userpass);

        }

        // db.User.findOne({
        db.User.findOne({
            where: {
                username: username
            }
        }).then(function (user) {

            if (!user) {

                return done(null, false, {
                    message: 'Username does not exist'
                });

            }

            if (!isValidPassword(user.password, password)) {

                return done(null, false, {
                    message: 'Incorrect password.'
                });

            }


            var userinfo = user.get();
            return done(null, userinfo);


        }).catch(function (err) {

            console.log("Error:", err);

            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });

        });


    }
)