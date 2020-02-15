// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var food = {
  selectAll: function(cb) {
    orm.selectAll("food", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("food", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("food", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("food", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (food.js).
module.exports = food;
