var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "demodb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    //var sql = "SELECT * FROM customers LIMIT 2, 5"; youu can
    //also write this start from 3 and get 5 record

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  });
});
