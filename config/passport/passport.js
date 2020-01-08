const passport = require('passport')
const localSignIn = require('./localSignIn')
const localSignUp = require('./localSignUp')
const db = require("../../models");

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

passport.use('local-signup', localSignUp)
passport.use('local-signin', localSignIn)

module.exports = passport;