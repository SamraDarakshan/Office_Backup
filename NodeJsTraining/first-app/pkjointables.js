
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

/*  var sql ="drop table users";
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log("Table dropped"); */


/*  var sql ="create table users (id varchar(255), name  varchar(255) , favorite_product varchar(255))";
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log("Table created"); */

    var sql = "CREATE TABLE user(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table user created");

      //console.log("Table users created"+JSON.stringify(result));





      var sql = "CREATE TABLE product (id INT, name VARCHAR(255))";
      con.query(sql, function (err, result) {
        if (err) throw err;
            console.log("Table product created");
        //console.log("Table products created"+JSON.stringify(result));
//insert VALUES
//for one record var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//for many use array in sql




/*    var sql = "ALTER TABLE users ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table altered"); */
  //var sql = "insert into users (id,name,favorite_product) values ()"
});
});
});
