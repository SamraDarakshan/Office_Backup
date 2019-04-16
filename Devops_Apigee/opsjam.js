var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000); // When running local, app
//will listen on port 3000

app.get('/hello', renderHello);

function renderHello(req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("Hello World");

}

var port = 8000;
app.listen(port);

console.log('Server running at http://127.0.0.1:%d/', port);