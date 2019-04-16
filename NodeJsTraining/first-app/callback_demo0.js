
var fs = require ('fs');

/*console.log("Reading File");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("content Read");*/

console.log("Reading File");

var data = fs.readFile('input.txt', function(err, res){
//  if (err) throw err;
  if(err){
    return console.log(err);
  }
  console.log(res.toString());
} );
 console.log ("Conetent Read");
