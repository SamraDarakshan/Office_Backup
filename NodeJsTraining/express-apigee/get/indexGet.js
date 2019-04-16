
/*var express = require("express");
var app = express();

app.get('/form', function(req,res) {
res.sendFile (__dirname + "/" +"form.html");
});

app.get("/process_get",function (req, res){
   response ={
     first_name: req.query.first_name,
     last_name: req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
*/

var express = require('express');
var app = express();

// it is a middle ware ,used when we are usinga n ither static files, like css js

app.use(express.static('public'));
/*function log (req,res,next){
  console.log('Log');
  next(); this is used when static is not using means middle ware using next function also
} */
app.get('/form', function (req, res) {
   res.sendFile( __dirname + "/" + "formGet.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
