const LocalStrategy = require("passport-local").Strategy;
const db = require("../../models");
const bCrypt = require('bcrypt-nodejs');

module.exports = new LocalStrategy(

    {
        usernameField: 'username',
        passwordField: 'password',
        // fullnameField: 'fullname',
        // emailField: 'email',
        passReqToCallback: true // allows us to pass back the entire request to the callback

    },
    function (req, username, password, done) {
        var generateHash = function (password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        db.User.findOne({
            where: {
                username: username
                // id: 1
            }
        }).then(function (user) {
            console.log("username was found");

            if (user) {

                return done(null, false, {
                    message: 'That username is already taken'
                });

            } else {

                var userPassword = generateHash(password);

                var data = {
                    username: username,
                    password: userPassword, fullname: req.body.fullname,
                    email: req.body.email
                };

                console.log("From inside passport.js, this is data:");
                console.log(data);


                db.User.create(data).then(function (newUser, created) {

                    if (!newUser) {

                        return done(null, false);

                    }

                    if (newUser) {

                        return done(null, newUser);

                    }

                });

            }

        });

    }

)