//Streams are objects that let you read data from a source or write data to a destination in continuous fashion

/*
Readable − Stream which is used for read operation.

Writable − Stream which is used for write operation.

Duplex − Stream which can be used for both read and write operation.

Transform − A type of duplex stream where the output is computed based on input.*/
var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt','UTF8');//wuthout utf8 it will show binary values form buffer
// Set the encoding to be utf8.
//readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   //data += chunk;
   console.log(chunk);
});

/*readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
}); */

console.log("Program Ended");
