const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const session = require("express-session");

const user = require('./routes/user')


// const bodyParser = require("body-parser");


require("dotenv").config();

var models = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//For BodyParser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: false, saveUninitialized:false})); // session secret

 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here


//log the req.session:
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

app.post('/user', (req, res) => {
  console.log('user signup');
  req.session.username = req.body.username;
  res.end();
})

// app.use('/user', user);

// app.get('/welcome', function(req, res) {
 
//   res.send('Welcome to Passport with Sequelize');

// });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
var syncOptions = { force: false };
models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

  models.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
