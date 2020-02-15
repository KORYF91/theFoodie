var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  host: "c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ewlorud6md6jtwse",
  password: "drtdve0058h7ivcs",
  database: "ar8cgeihd4po6xgj"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
