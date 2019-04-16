
//MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.

//The $lookup stage lets you specify which collection you want to join with the current collection, and which fields that should match.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

//toArray()
//Returns an array of each value in this collection.
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demo_db");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
