var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// Static serve for Public
app.use(express.static("public"));

//parse app for encoding
app.use(bodyParser.urlencoded({ extended: true }));

//parse App-JSON

app.use(bodyParser.json());

//Set HandleBars

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


//Import routes + give acces to servers

var routes = require(".controllers/burgers_controller.js")

