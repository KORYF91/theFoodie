var express = require("express");
var router = express.Router();

var db = require("../models/foodie.js");

router.get("/", function(req, res){
    db.all(function(foodData){
        console.log(foodData);
        var hbsObject = {food: foodData}
         res.render("index", hbsObject);
    })
})
router.get("/api/food", function(req, res){
    db.create([food_name,"devoured"],[req.body.food_name,req.body.devoured],function(foodData){
        console.log(foodData);
        var hbsObject = {food: foodData}
         res.render("index", hbsObject);
    })
})

module.exports = router;