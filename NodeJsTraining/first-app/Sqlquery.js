var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "demodb"
});

con.connect(function(err) {
  if (err) throw err;

 con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  /*Select all customers with the address "Park Lane 38":*/


  con.query("SELECT name, address FROM customers", function (err, result, fields) {
     if (err) throw err;
     console.log(result);
     //console.log(result[2].address);
     //return the adddress of the 3rd record

     if (err) throw err;
      con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
        //gives the fileds like name, address only field name
      ///  Return the name of the second field:
        //console.log(fields[1].name); i.e Address

  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);

//star with letter s, use it for end and including by chnging %
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
       if (err) throw err;
       console.log(result);




    con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
   if (err) throw err;
   console.log(result);

   con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
  if (err) throw err;
  console.log(result); // show in descending

   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Highway 37'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
 });
});
  });

});
});
});
});
