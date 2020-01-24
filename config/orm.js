var connection = require("./connections.js");

var orm = {
    selectAll: function (tableName,cb) {
        var queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, function (err, res) {

            if (err) {
                throw err;
            }
            cb(res);

            console.log(res);
        })
    },
    insertOne: function (tableName, columnNmaes, columnValues, cb) {
        var querySting = "INSERT INTO" + tableName + "NAMES: (" + columnNmaes + ")" + "VALUES (" + columnValues + ")";
        console.log(querySting)
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
      delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}

module.exports = orm;