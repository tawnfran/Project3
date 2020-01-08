require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;





//DO I NEED
//const dbConnection = require('./database')
//OR SOMETHING LIKE IT?
//???????
//The tutorial says "database/index.js" opens the connection to mongo(sequelize for me)
//But I don't have a "database" folder, and "models" lives in the root folder
//(In the tutorial, "models" lives inside of "database")
//So where should the index.js file go? Is it the one inside models?



// app.use("/user", user);





// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// For Passport

//Models
var models = require("./models");
const session = require("express-session");
const passport = require("./config/passport/passport.js");
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


var routes = require('./routes');
app.use(routes)

// require("./routes/auth")(app, passport);
// require("./routes/auth.js")(app);
// require("./routes/signInRoutes")(app, passport);






//log the req.session:
// app.use( (req, res, next) => {
//   console.log('req.session', req.session);
//   return next();
// });

// app.get('/', function(req, res) {    
//   res.send('Welcome to Passport with Sequelize and without HandleBars');
// });

app.post('/user', (req, res) => {
  console.log('user signup');
  // console.log("Hi")
  // console.log("req is ");
  // console.log(req);
  // console.log("res is ");
  // console.log(res);
  console.log("req.body.username is:");
  console.log(req.body.username);
  req.session.username = req.body.username;
  console.log("req.session.username is ");
  console.log(req.session.username);
  res.end();
})


// app.get('/welcome', function(req, res) {

//   res.send('Welcome to Passport with Sequelize');

// });

//not sure if I need the below app.get and app.listen or not









//  //routes
// app.use('/user', user);



// app.get('/test', function(req, res) {

//   console.log("Welcome to Passport with Sequelize");

//   res.send('Welcome to Passport with Sequelize');

// });



// app.listen(PORT, function(err) {

//   if (!err)
//       console.log("Site is live");
//   else console.log(err)

// });

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
var syncOptions = { force: false };

models.sequelize.sync(syncOptions)
  .then(function () {
    app.listen(PORT, function () {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  }).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!");
  });;
