var path = require("path");

var tourInfo = require("../models/tourInfo");

module.exports = function (app) {

    // Routes //
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

    // router.post("/api/cats", function(req, res) {
    //     cat.create([
    //       "name", "sleepy"
    //     ], [
    //       req.body.name, req.body.sleepy
    //     ], function(result) {
    //       // Send back the ID of the new quote
    //       res.json({ id: result.insertId });
    //     });
    //   });
      

    app.post("/api/newTour", function (req, res) {
        table = "tourInfo";
        col = ["tourName", "tourDescription", "tourInstructions"];
        val = [
            req.body.tourName, 
            req.body.tourDescription, 
            req.body.tourInstructions,
        ];

        console.log("TourName: ", val),

        tourInfo.create(table, col, val, function(data){
            res.json({ id: data.insertId, tour: data.inserttourName});
            // res.json(data)
            console.log(data);
        })
    });

        app.put("/api/tourInfo/:id", function (req, res) {
            table = "tourInfo";
            condition = "id = " + req.params.id;
            console.log("Updating: ", condition);
            objColVals = {
                tourName: req.body.tourName,
                tourDescription: req.body.tourDescription,
                tourInstructions: req.body.tourInstructions,
            }
        });

        app.delete("/api/tourInfo/:id", function (req, res) {
            table = "tourInfo";
            var condition = "id = " + req.params.id;
            // console.log("Deleting: ", condition);

                tourInfo.delete(condition, function(result) {
                    if (result.affectedRows == 0) {
                      // If no rows were changed, then the ID must not exist, so 404
                      return res.status(404).end();
                    } else {
                      res.status(200).end();
                    }
            })
        });
    };

