var http = require('http');
var fs = require('fs')
//var express = require('express');
//var app = express();
/*app.get('/', function(req, res) {
   // console.log(fs.readdirSync(__dirname))
    //res.send('Hello from Express');
    //res.send(fs.readdirSync(__dirname + '/test.js' ));
});

app.listen(3000); */

/*fs.readFile(__dirname + '/test.js','utf8',  function (err, data) {
 if (err) throw err;
   //console.log('test data err'+ err);
// console.log('test data'+data);
 res.write(data);
});  // should work with Sync aswell */

http.createServer(function (req, res) {
  fs.readFile(__dirname + '/demofile.txt','utf8', function(err, data) {
   // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
