var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "demodb"
});
//When query values are variables provided by the user, you should escape the values.

//This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.
con.connect(function(err) {
  if (err) throw err;
/*
  var adr = 'Highway 37';
  //Escape the address value:

  var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
*/
//You can also use a ? as a placeholder for the values you want to escape.
   var adr = 'Highway 37';
    var sql = 'SELECT * FROM customers WHERE address = ?';
    con.query(sql, [adr], function (err, result) {
      if (err) throw err;
      console.log(result);

//If you have multiple placeholders, the array contains multiple values, in that order:
/*      var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});

}); */
});
});
