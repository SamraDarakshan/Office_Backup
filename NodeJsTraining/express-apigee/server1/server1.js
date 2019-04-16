
/*var express = require ('express');
var app = express();

app.get('/', function (err,res) {
  if (err) throw err;
res.send('Hello World');
});
 var server = app.listen(8081, function(){
   var host = server.address().address;
   var port = server.address().port;
   console.log("Listenining at http://%s:%s", host,port);
 });
*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});
app.get('/aboutus', function (req, res) {
  console.log("Got a get request for about us");
   res.send('About Us');
});
app.get('/*list', function (req, res) {
  console.log("Got a get request for list");
   res.send('page listing');
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
