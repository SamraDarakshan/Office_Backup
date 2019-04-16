
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demo_db");
  var q = { address: "Park Lane 38", name:"Ben" }; // like wehere clause
  dbo.collection("customers").find(q).toArray(function(err, result) {
    if (err) throw err;
    console.log(result); */

    //search that recordwhich adress start with s
   var query = { address: /^S/ };
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
    console.log(result);

//not taking this
/*var query = [
  {name: 'Hannah', address: 'Mountain 21'},
  { name: 'Peter', address: 'Lowstreet 4'}
];
     dbo.collection("customers").find(query).toArray(function(err, result) {
       if (err) throw err;
     console.log(result); */

    db.close();
//  });
});
});
