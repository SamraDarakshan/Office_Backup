/*var mysqlConnector = require('volos-mysql');
var http = require('http');
var restMap = require('./queryToRestMap');

var profile = {
    user: 'mule',
    password: 'mule',
    host: "mudb.learn.mulesoft.com",
    port: "3306"
};

 var mysqlConnectorObject = new mysqlConnector.MySqlConnector({"profile": profile, "restMap": restMap});

var svr = http.createServer(function (req, resp) {
    mysqlConnectorObject.dispatchRequest(req, resp);
});

svr.listen(9089, function () {
    mysqlConnectorObject.initializePaths(restMap);
    console.log(mysqlConnectorObject.applicationName + ' node server is listening');
});
*/
var mysql = require('mysql');
var http = require('http');
//var mysqlConnector = require('volos-mysql');
var con = mysql.createConnection({
  host: "mudb.learn.mulesoft.com",
  user: "mule",
  password: "mule",
  port: "3306",
  database: "training"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
/*  http.createServer(function (req, res) {
    res.write("Connected");
    res.end();
}).listen(8080); */
con.connect("SELECT * FROM accounts", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
 });
  /* http.createServer("SELECT * FROM Account", function (err, res, result, fields) {
      if (err) throw err;
      res.write(result);
    }).listen(8080); */
