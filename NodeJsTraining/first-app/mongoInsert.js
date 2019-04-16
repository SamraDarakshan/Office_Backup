var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demo_db");
//1 document means 1 record
  var myobj1= { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj1, function(err, res) {
    if (err) throw err;
    console.log( res.insertedCount+" document inserted " );
    //console.log(res.toString()); toString for simple text
    console.log(JSON.stringify(myobj1)); //stringify for json
    //console.log(res); // it will show whole response

    var myobj2 = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj2, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    //console.log(res[2].address);
  console.log(res); // sho hole res
    //console.log(JSON.stringify(res));

    var myobj3 = [
   { _id: 11, name: 'Chocolate Heaven'},
   { _id: 22, name: 'Tasty Lemon'},
   { _id: 33, name: 'Vanilla Dream'}
 ];
 dbo.collection("customers").insertMany(myobj3, function(err, res) {
   if (err) throw err;
  console.log("Number of documents inserted with id's: " + res.insertedCount);
   console.log(res);
    db.close();
//  });

});

});

});
