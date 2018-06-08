
var path = require("path");

var tourInfo = require("../models/tourInfo");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // tourInfo.all(function(data) {
        //     console.log(res);
        // })
        res.sendFile(path.join(__dirname, "index.html"));
    });

    
    app.get("/operator", function (req, res) {
        res.sendFile(path.join(__dirname, "operator.html"));
    });


    app.get("/api/tourInfo", function (req, res) {
        table = "tourInfo";
        tourInfo.all(table, function (data) {
            // console.log("tourInfo");
            // res.json(tourInfo);
            return res.json(data);
            // res.render("index",{tours:data});
        })
        // res.status(200).send(res);
        // res.render(this);
    });


    app.get("api/tourInfo/:tourName", function (req, res) {
        table = "tourInfo"; console.log("Request: ", req.params);
        col = "tourName";
        val = req.params.tourName; console.log("TourName: ", val);
        tourInfo.selectWhere(table, col, val, function (data) {
            return res.json(data);
        })
    });


    app.post("/api/newTour", function(req, res) {
        table = "tourInfo";
        cols = ["tourName", "tourDescription", "tourInstructions"];
        vals = ["test name 1", "test description 1", "test instructions 1"];
        tourInfo.create(table, cols, val, function(data){
            res.json({ id: data.insertId, tour: data.inserttourName});
        })
    });


    app.put("/api/tour/:id", function(req, res) {
        table = "tourInfo";
        condition = "id = " + req.params.id;
        console.log("Updating: ", condition);
        objColVals = {
            tourName : "test name 1",
            tourDescription : "test description 1",
            tourInstructions : "test instructions 1"
        }
    });


    app.delete("/api/tour/:id", function (req, res) {
        table = "tourInfo";
        var condition = "id = " + req.params.id;
        console.log("Deleting: ", condition);
        tourInfo.delete(table, condition, function(data){
            if (data.affectedRows == 0) {
                res.status(404).end();
            } else {
                return res.json(data);
                res.status(200).end();
            }
        })
    }); 
};

