var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "mydb",
  //insecureAuth : true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});

module.exports= con; // for others use just export this
