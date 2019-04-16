
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demo_db");
  //find is just like select in my sqlstring
  //findOne get the 1st value of the document
  //find{} search all but return 1st
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result); // it will give 1st document
    //console.log("Name: " +result.name+" "+"Address:" +result.address);
    // you can also give by . and the field


  //find() means find All like select * in my sql
  //get everything from collection
dbo.collection("customers").find({}).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);


//find some means find some specific here we use projection
//here we give id 0 so it will not show id name and address of all show
dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);

    //here we give address 0 so it will not sho name and id show
    dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
   if (err) throw err;
   console.log(result);

//here id will not show only name show that is one
   dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);

    //id weill not show bith show name and Address
    dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);

// dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray(function(err, result) {
//^this is wrong we can no give any one to 1 or any one to 0 its for id only

    db.close();
//Return the address of the third document:
//console.log(result[2].address);
  });
});
});
});
});
});
});
