
const bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require("passport-local").Strategy;
// const passport = require("passport");
const db = require("../../models");


module.exports = function (passport, user) {

    // const User = user;

    console.log("db.User is ");
    console.log(db.User);
    // console.log(User);
    // const LocalStrategy = require("passport-local").Strategy;
    // const LocalStrategy = require("passport-local");
    

    //serialize
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {


        db.User.findOne({
            where: {
                id: id
            }
        }).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });



    // passport.use("local-signup", new LocalStrategy(
        passport.use(new LocalStrategy(

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

    ));

    //LOCAL SIGNIN
    // passport.use('local-signin', new LocalStrategy(
        
        passport.use(new LocalStrategy(

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

    ));







}