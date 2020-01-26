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
router.post("/api/food", function(req, res){
    db.create([
      "food_name","devoured"
    ],[
      req.body.food_name,req.body.devoured
    ],function(result){
        console.log(result);
        var hbsObject = {food: foodData}
         res.render({id: result.insertId});
    });
});
router.put("/api/foodie/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    db.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/foodie/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    db.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  

module.exports = router;