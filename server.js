//NPM Dependencies
var express = require('express');
//New npm install that is required for the burger app
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//Create an instance of the express app.
var app = express();

var PORT = process.env.PORT || 3000;

//Express middleware needed for serving static files. For more details
//See here: http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/public'));

//Bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

//Override with POST having ?_method=DELETE or PUT
//This was not in the cats app
app.use(methodOverride('_method'));

//Set Handlebars as the default templating engine.
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Now import the routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
