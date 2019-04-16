var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demo_db");
  //deleteone delete only one record
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n+" document deleted");
//Most of the information is not important to understand,
// but one object inside the object is called "result" which tells us if the execution went OK, and how many documents were affected.

//delete many delete more than One
var myquery = { address: /^O/ }; // address start with o record
 dbo.collection("customers").deleteMany(myquery, function(err, obj) {
   if (err) throw err;
   console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});
});
