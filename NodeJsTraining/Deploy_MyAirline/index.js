

var express = require('express');
var mongoose = require('mongoose');
var date = require('date-and-time');
//mongoose.Promise = global.Promise;
var dateFormat = require('dateformat');

//var now = new Date();

var app = express();
var bodyParser = require('body-parser');
app.use(express.bodyParser());

//db
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
var date = new Date();
date.toString();
var dataSchema = new Schema
({
 source: String,
 destination:	String,
 time: {
  type: Date,
   default: date.toString(),
   //india default: Date.now("<YYYY-mm-dd>"),
  required: 'Must have start date - default value is the created date'
},
});

//compiling our schema into a Model
var browserModel1 = mongoose.model('pakairline', dataSchema); //create Employees collecton on m lab
var browserModel2 = mongoose.model('indiaairline', dataSchema);
//A model is a class with which we construct documents.

/**** API Calls Begin Here ****/
app.get('/', function(req, res) {
 res.json(200, {
  'status': "ok",
 });
 res.send("Connected with database"); // this will not show you can give multiple output you can put above only one can run at a time
});

//All Records of pakistan
app.get('/pak', function(req, res) {
 console.log("inside get");
 browserModel1.find({}, function(err, browsers) {
  if (err) {
   console.log("browser erropr");
   res.json(err);
  } else {
   console.log("data is " + browsers);
 res.json(browsers);
   res.json(time);
  }

}) ;
}); //end

//All Records of india
app.get('/india', function(req, res) {
 console.log("inside get");
 browserModel2.find({}, function(err, brow) {
  if (err) {
   console.log("browser erropr");
   res.json(err);
  } else {
   console.log("data is " + brow);

   //var tempArrayTwo = brow.map((item) => {
    var tempArrayTwo = brow.map(function (item) {
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
}
  }
); //end browsermondel2
});  //end india get

//Insert Data in pakistan
app.post('/pak', function(req, res) {
 console.log("inside post");

 var newBrowser1 = new browserModel1();

  newBrowser1.source = req.body.source,
  newBrowser1.destination = req.body.destination;

 newBrowser1.save(function(err, newInsteredValue) {
  if (err) {
   console.log("insert error");
   res.json(err);
  } else {
   res.json(newInsteredValue);
      res.json(time);
  }
 })
}); //end


//Insert Data in india
app.post('/india', function(req, res) {
 console.log("inside post");

 var newBrowser2 = new browserModel2();

 newBrowser2.source = req.body.source,
  newBrowser2.destination = req.body.destination;
  //newBrowser.department = req.body.department;

 newBrowser2.save(function(err, newInsteredValue) {
  if (err) {
   console.log("insert error");
   res.json(err);
  } else {
   res.json(newInsteredValue);
      res.json(time);
  }
 })

});

app.listen(5000, function() {
 console.log('Node HTTP server is listening');
});
