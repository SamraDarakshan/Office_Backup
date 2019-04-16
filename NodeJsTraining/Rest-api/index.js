const express = require('express');
//const Logger= require('./loggerevent');
//export here
// for post req that if we add something it show on response
//install body-parser
const bodyParser= require('body-parser');
const mongoose = require ('mongoose');

//const loc = mongoose.model('location');


const routes = require ('./routes/api'); // givig this in middleware for use

//using middle ware for req and request
//setup express app
const app = express();

//---------connect to mongodb
mongoose.connect('mongodb://localhost/restdb');
mongoose.Promise = global.Promise;

//middlewares
//this api will add in all the req by just giving here

app.use(express.static('public')); // for html and css files

app.use(bodyParser.json());
app.use('/api',routes);// using that routes bcox we are taking from the folder

//middleware for error handling
app.use(function(err,req,res,next){
console.log(err);
res.status(422).send({error:err.message});
});

//app.use(loc);

/*or we can drirectly give in this way
app.use('/api',require ('./routes/api')); */

//app.use(express.static('routes'));

//app.use('/api',require ('./routes/api'));

/*
app.get('/api',function(req,res){
console.log("Get request");
var obj = { name: "John", age: 30, city: "New York" };
res.send(JSON.stringify(obj));
//res.write(JSON.stringify(obj));
//res.end();
res.send({name:'samra'});
// try that json stringify here
});
*/

app.listen(4000,function(){
  console.log("Now listening for requests on 4000");
});
