
var express = require("express");
var mysql = require('mysql');

var app = express();

var con = mysql.createConnection({
host:'localhost',
user:'root',
password:'test',
database: 'demodb'
})


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    var sql = "INSERT INTO users (name, address) VALUES ('Company Inc', 'Highway 37')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");

        var sql = "select * from users";
          con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
          });
        });
      });
    });
