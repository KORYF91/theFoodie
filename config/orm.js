var connection = require("./connection.js");

var orm = {
selectAll: function(tableName){
    var queryString = "SELECT * FROM " +tableName;
    connection.query(queryString, function(err, res){
        console.log(res);
    })
},
insertOne: function(tableName, columnNmaes, columnValues, callback){
var querySting = "INSERT INTO" + tableName + "(" + columnNmaes +")" +"VALUES (" +columnValues +")";
console.log(querySting)

}
}

module.exports = orm;