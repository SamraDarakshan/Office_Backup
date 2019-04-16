var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//delok gives true for deleted and false for not deleted
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");

/*
we can also use this dropCollection function
    dbo.dropCollection("customers", function(err, delOK) {
   if (err) throw err;
   if (delOK) console.log("Collection deleted"); */
    db.close();
  });
});
