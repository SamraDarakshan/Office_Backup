

//var MongoClient = require('mongodb').MongoClient;
//var config = require('./config');
var express = require('express');
  //var methodOverride = require('method-override');
var mongoose = require('mongoose');

var date = require('date-and-time');

mongoose.Promise = global.Promise;

//middlewares
//this api will add in all the req by just giving here

//app.use(express.static('public')); // for html and css files

//app.use(bodyParser.json());
//var path = require('path');
var app = express();
var bodyParser = require('body-parser');
//app.use(express.bodyParser());
//var app = express();
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());


//app.use(express.static(__dirname + '/public'));

/*app.use(bodyParser.urlencoded({
   extended: false})); */
//connecting to mLab
//var db = "mongodb://sid:sid@ds038319.mlab.com:38319/test_db";
var db= "mongodb://Samra:Samra4!)@ds145573.mlab.com:45573/demodb";
mongoose.connect(db, function(err) {
 if (err) {
  console.log("error!! " + err)
 } else {
  console.log("COnnection Successfull")
 }
})



//defining Schema
var Schema = mongoose.Schema;

var dataSchema = new Schema
({
 source: String,
 destination:	String,
 time: {
   type: Date,
  // default: Date.now,
  default: Date.now("<YYYY-mm-dd>"),

   required: 'Must have start date - default value is the created date'
 },
 /*const now = new Date();
    // => '2015/01/02 23:14:05'
date.format(now, 'ddd MMM DD YYYY');        // => 'Fri Jan 02 2015'
*/
// time : { type: Number, default: (new Date()).getTime() }
});
//var time = new Date("<YYYY-mm-dd>");

 //var time = Date.now("<YYYY-mm-dd>");


// myDateString = Date();
// time = new Date("<dd-mm-YYYY>");



//compiling our schema into a Model
var browserModel = mongoose.model('indiaairline', dataSchema); //create Employees collecton on m lab
//A model is a class with which we construct documents.


/**** API Calls Begin Here ****/
app.get('/', function(req, res) {
 res.json(200, {
  'status': "ok",

 });
 res.send("Connected with database"); // this will not show you can give multiple output you can put above only one can run at a time
});

//All Records
app.get('/india', function(req, res) {
 console.log("inside get");
 browserModel.find({}, function(err, browsers) {
  if (err) {
   console.log("browser erropr");
   res.json(err);
  } else {
   console.log("data is " + browsers);

   var tempArrayTwo = browsers.map((item) => {
    if(item.source){
        console.log(item.source.substr(0, 3))
        item.source = item.source.substr(0, 3);
    }
    if(item.destination){
        console.log(item.destination.substr(0, 3))
        item.destination = item.destination.substr(0, 3);
    }
    return item
  })
  console.log(tempArrayTwo);
  res.send(tempArrayTwo);

 //var s1 = source.substr(0, 3);
 //res.json(s1);

//res.send(browsers);
//var user = JSON.parse(browsers);
//res.send(user);
//   var s = source.substr(0, 3);
//let temparray = browsers.map(()=)

  // var s1 = destination.substr(0, 3);
  /*var str = res(browsers);
  var res = str.toString();
   var s1 = res.substr(0, 3); */
  //var s =browesers.ToString(substr(0, 3));
//  var s1 = s.substr(0, 3);
//var d = new Date();

//var d = new Date(year, month, day);
//var d = new Date();

  //for current date
//  function myFunction() {
  //var str = "Hello world!";
  //var result = browsers.substr(0, 3);
  //document.getElementById("demo").innerHTML = res;
}

 //res.json(result);
// var s =browesers.ToString;
  //res.send(s);
 //res.json(s1);
 //res.json(browsers);
  //res.json(time);
  }

) ;


//trying
/*MongoClient.connect(db, function(err, db) {
  if (err) throw err;
 var dbo = db.db("demodb");
 dbo.collection("customers").find({}).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
     res.jsonp(result);
 });
 }); */


});


//Insert Data
app.post('/india', function(req, res) {
 console.log("inside post");

 var newBrowser = new browserModel();

 newBrowser.source = req.body.source,
  newBrowser.destination = req.body.destination;
  //newBrowser.department = req.body.department;

 newBrowser.save(function(err, newInsteredValue) {
  if (err) {
   console.log("insert error");
   res.json(err);
  } else {
   res.json(newInsteredValue);



      res.json(time);
  }
 })

});



//Update all Data
app.put('/:id', function(req, res) {
 console.log("inside put");
 //console.log("name is "+req.params.id)
 browserModel.findByIdAndUpdate(
  req.params.id, {
   $set: {
    source: req.body.source,
    destination: req.body.destination,
    //var time = new Date("<dd-mm-YYYY>");


   // department: req.body. department
   }


    //  res.json(time);
  }, {
   new: true
  },
  function(err, updatedBrowser) {
   if (err) {
    console.log("error update")
    res.send("Error Updating!!!")
   } else {
    res.json(updatedBrowser)
   }
  });
});

//Delete Data
app.delete('/:id', function(req, res) {
// console.log("inside delete")
 //   console.log("name is "+req.params.id)
 browserModel.findByIdAndRemove(req.param.id, {}, function(err, deletedVideo) {
  if (err) {
   res.send("error deleting video")
  } else {
       res.send("The Record for " +req.params.id + " is deleted ");
   res.send(deletedVideo);

  }

 })
})

//Get Specific Browser Details
app.get('/london', function(req,res){
    //console.log("source is "+req.params.source)
    browserModel.find({source:req.params.source}, function(err, browserName){
        if(err){
            console.log("some err");
            res.send("Error in specificbrowser")
        }else{
            console.log("result is "+browserName );
            res.send(browserName);
        }
    })
})


app.listen(9000, function() {
 console.log('Node HTTP server is listening');
});
