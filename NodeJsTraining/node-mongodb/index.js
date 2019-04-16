/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/demo_db";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/
var http = require ('http');
var MongoClient = require('mongodb');

http.createServer(function (req, res) {
  var url = "mongodb://mudb.learn.mulesoft.com:3306/training";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("listening on 8080");
    console.log("connected!");
    //db.close();
    res.write("connected");
   res.end();
  });
}).listen(8080);
