


var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // for post
//middleware

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/form', function (req, res) {
   res.sendFile( __dirname + "/" + "formPost.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
  /* if(1req.body) return res.sendStatus(400);
   res.send('Welcome, ' + req.body.username) */
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   //console.log(req.body);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
