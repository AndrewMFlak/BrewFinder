
// var express = require("express");

// var router = express.Router();

$(function () {
    $("#save").on("click", function (event) {
        // prevent default on submission
        event.preventDefault();

        var newTour = {
            tourName: $("#tourname").val(),
            tourDesc: $("#tourdescription").val(),
            tourSpInstr: $("#specialinstructions").val(),
            tourAdd1: $("#address-1").val(),
            tourAdd2: $("#address-2").val(),
            tourCity: $("#address-city").val(),
            tourState: $("#address-states").val(),
            tourZip: $("#address-zipcodes").val(),
          };

        })

        console.log(newTour);
        $.ajax("/api/tourInfo",{
            type: "POST",
            data: newTour
        }).then(function() {
            console.log("HELLO")
        });



    });

        $("#cancel").on("click", function (event) {
            var id = $(this).data("id");
            $.ajax("api/tourInfo" + id, {
                type: "DELETE"
            }).then(
                function () {
                    console.log("deleted tour", id);
                    location.reload();
                })
            });
    

module.exports = newTour;

