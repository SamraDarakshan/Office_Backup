
var mysql = require ('mysql');

var con = mysql.createConnection({
host:"localhost",
user:"root",
password:"test",
database: "demodb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected to database");
var sql = "INSERT INTO user (name, favorite_product) VALUES ?";
var values = [
  ['John',  154],
  ['Peter',  154],
  [ 'Amy',  155],
  [ 'Hannah',null],
  [  'Michael',null ]
];
/*var values = [
  ['John', 'Highway 71'],
  ['Peter', 'Lowstreet 4'],
  ['Amy', 'Apple st 652'],
  ['Hannah', 'Mountain 21'],
  ['Michael', 'Valley 345'],
  ['Sandy', 'Ocean blvd 2'],
  ['Betty', 'Green Grass 1'],
  ['Richard', 'Sky st 331'],
  ['Susan', 'One way 98'],
  ['Vicky', 'Yellow Garden 2'],
  ['Ben', 'Park Lane 38'],
  ['William', 'Central st 954'],
  ['Chuck', 'Main Road 989'],
  ['Viola', 'Sideway 1633']
]; */
con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records in user inserted: " + result.affectedRows);
  //console.log("Record inserted, ID: " + result.insertId); //giveinserted id
  var sql = "INSERT INTO product (id,name) VALUES ?";
  var value = [
    [ 154,  'Chocolate Heaven' ],
    [  155, 'Tasty Lemons' ],
    [ 156,  'Vanilla Dreams' ]
  ];

  con.query(sql, [value], function (err, result) {
    if (err) throw err;
    console.log("Number of records in product inserted: " + result.affectedRows);
});
});
});
