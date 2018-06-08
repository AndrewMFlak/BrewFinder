var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3306;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



$(function () {
    var tourInfo = {tourName: 'Cape Cod Brew Tour',
    tourDescription: 'Enjoy Bad Ass Massess Breweries',
    tourInstructions: 'Must Be 21 Years or Older To Consume Alcohol.'};
    $.ajax({
        type: "POST",
        data :JSON.stringify(tourInfo),
        url: "api/tourInfo",
        contentType: "application/json"
    });
});


// $.ajax({
// 	type: "GET",
// 	headers: {tourName: 'Cape Cod Brew Tour',
//     tourDescription: 'Enjoy Bad Ass Massess Breweries',
//     tourInstructions: 'Must Be 21 Years or Older To Consume Alcohol.'},
// 	url: "http://localhost:8080/api/tourInfo",
// 	data: sMessage,
// 	dataType: datatype,
// 	processData: false
//  })
//  .done(function(result) 
//  {
// 	myObj = result;
// 	if (myObj["links"])
// 	{
// 		var queryURL = myObj["links"][0].href;
// 		getResults(queryURL);
// 	}
//  })

module.exports = tourInfo;