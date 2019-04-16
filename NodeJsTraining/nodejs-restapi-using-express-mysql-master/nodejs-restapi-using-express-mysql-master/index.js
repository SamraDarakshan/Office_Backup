var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
//var tab = require("./customer.sql");

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'test', //mysql database password
  database : 'demodb' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')


})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
//http.createServer(function (req, res) {
var server = app.listen(3000,  "127.0.0.1", function (req,res) {

  var host = server.address().address
  var port = server.address().port
// res.send("connected");
  console.log("Example app listening at http://%s:%s", host, port)
})
  //res.write("Connected");
   //res.end();

//}).listen(3000);


//rest api to get all customers
app.get('/customers', function (req, res) {
   connection.query('select * from customers', function (error, results, fields) {
	  if (error) throw error;
    console.log(results);
    res.send(results);
	  //res.end(JSON.stringify(results));
	});
});



//rest api to get a single customer data
app.get('/customers/:id', function (req, res) {
   connection.query('select * from customers where Id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to create a new customer record into mysql database
app.post('/customers', function (req, res) {
   var params  = req.body;
   console.log(params);
   connection.query('INSERT INTO customers SET ?', params, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to update record into mysql database
//,`Country`=?,`Phone`=?
// /req.body.Country, req.body.Phone, where `Id`=?' ,  req.body.Id
app.put('/customers', function (req, res) {
  connection.query('UPDATE `customers` SET `address`=?  where  `name`=?' , [req.body.name,req.body.address], function (error, results, fields) {
  // connection.query("UPDATE customers SET address = 'Highway 37' WHERE  address = 'Canyon 123'", function (error, results, fields) {
    if (error) throw error;
	  res.end(JSON.stringify(results));
    res.send(results);
	});
});

//rest api to delete record from mysql database
app.delete('/customers', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `customers` WHERE `name`=?', [req.body.name], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});
