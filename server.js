const express = require("express");
const exphbs = require("express-handlebars");

const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Require all models
const db = require("./models");

var PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));


const path = require('path');
// view engine setup
// Use Handlebars as default express template engine
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');


// Connect to the Mongo DB
// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
// var uristring =
//   process.env.MONGOLAB_URI ||
//   process.env.MONGOHQ_URL ||
//   'mongodb://localhost/robotics';

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/robotics";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function (err, res) {
//   if (err) {
//     console.log ('ERROR connecting to: ' + MONGODB_URI + '. ' + err);
//   } else {
//     console.log ('Succeeded connected to: ' + MONGODB_URI + '. ' + res);
//   }
// });

// Routes
require("./routes/htmlRoutes")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
