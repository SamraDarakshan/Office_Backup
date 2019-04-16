var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demo_db");
  //$set is used to set specific values
  //updateone updte only one 1
  var myquery = { address: "Valley 345" }; // where address this update with new values
  var newvalues = { $set: { name: "Michael", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");

//update many start with s update them
    var myquery = { address: /^S/ };
var newvalues = {$set: {name: "Minnie"} };
dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log(res.result.nModified + " document(s) updated");
//  result.nmodified give sthe uodate value
    db.close();
  });
});
});
