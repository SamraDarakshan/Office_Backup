var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);

    var sql = "DROP TABLE customers";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table deleted");

  var sql = "DROP TABLE IF EXISTS customers";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
});

  });
});
