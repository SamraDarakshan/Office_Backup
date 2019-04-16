
const http = require ('http');

const server = http.createServer((req,res)=> {
  if (req.url=='/'){
  res.write('Hello World');
  res.end();
  }
  if (req.url=='/api/courses'){
 /*var obj ={  // extra through new video
      people: [
    {
      name : "Alex",
      online: true
      },
      {
      name:"Billy",
      online: false
      }
    ]
  }; */
    //var string = JSON.stringify(obj)
    var obj = { name: "John", age: 30, city: "New York" };
    res.write(JSON.stringify(obj));
    res.end();
  //  console.log(string);

  //  res.write(JSON.stringify([1, 2 ,3]));
      //aray of objects using json
    //  res.end();
  }
});



/*server.on('connection',(socket) =>){ // connection we can find them in documents
  //call back function is socket of connection
console.log('New Connection...')

} ); is was the socket response */

server.listen(3000);
console.log('Listening on port 3000..');
