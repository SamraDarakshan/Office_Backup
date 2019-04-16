var express= require('express');
var app = express();

app.get("/products/:productId", function(req, res){
 res.send("Requested " + req.params.productId );
});
//res.render("/products/:productId");

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

});
