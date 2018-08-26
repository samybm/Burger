var express = require("express");

var router = express.Router();

//IMPORT MODEL FOR DATABASE function
var burger = require("..models/burger.js");


//CREATE ROUTES 
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "BURGER", "devoured"
    ], [
     req.body.name, req.body.devoured
 ], function(result) {
     //Send back ID of new quote
     res.json({ id: result.insertId });
 });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.chnagedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("api/burger/:id", function(req, res) {
    var condition = "id= " + req.params.id;

    burger.delete(condition, function(results) {
        if (result.affectRows == 0) {

        return res.status(404). end();
        } else {
            res.status(200).end();
        }
    });
});

//EXPORTS ROUTES TO SERVER. JS