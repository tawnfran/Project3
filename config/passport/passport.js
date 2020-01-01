
const bCrypt = require('bcrypt-nodejs');


module.exports = function (passport, user) {
    console.log("from top of passport.js, passport is");
    console.log(passport);

    console.log("From the top of passport.js, user is ");
    console.log(user);

    const User = user;
    const LocalStrategy = require("passport-local").Strategy;

        //serialize
        passport.serializeUser(function (user, done) {

            done(null, user.id);
    
        });
    
        // deserialize user 
        passport.deserializeUser(function (id, done) {
    
            User.findById(id).then(function (user) {
    
                if (user) {
    
                    done(null, user.get());
    
                } else {
    
                    done(user.errors, null);
    
                }
    
            });
    
        });

    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'username',
            passwordField: 'password',
            fullnameField: 'fullname',
            emailField: 'email',
            passReqToCallback: true // allows us to pass back the entire request to the callback

        },
        function (req, username, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {

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


                    User.create(data).then(function (newUser, created) {

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




}