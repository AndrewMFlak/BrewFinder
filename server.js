var express = require("express");

var path = require("path");

var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());


require(path.join(__dirname, "./controllers/controller.js"))(app);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });