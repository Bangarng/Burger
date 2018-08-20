//requiring our NPM items
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//default syntax for express
var app = express();

var orm = require("./config/orm");

//grabbing our controllers 
var controller = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 2747;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(controller);

app.listen(PORT, function(){
    console.log("Started our server and listening on PORT " + PORT + " (BRGR)");
})