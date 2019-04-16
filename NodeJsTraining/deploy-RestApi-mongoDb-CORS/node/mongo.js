
//var MongoClient = require('mongodb').MongoClient;

var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.bodyParser());

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

var dataSchema = new Schema({
 name: String,
 speed: String
});


//compiling our schema into a Model
var browserModel = mongoose.model('browser', dataSchema); //create browsers collecton on m lab
//A model is a class with which we construct documents.


/**** API Calls Begin Here ****/
app.get('/', function(req, res) {
 res.json(200, {
  'status': "ok",
 
 });
 res.send("Connected with database"); // this will not show you can give multiple output you can put above only one can run at a time
});

//All Records
app.get('/get', function(req, res) {
 console.log("inside get");
 browserModel.find({}, function(err, browsers) {
  if (err) {
   console.log("browser erropr");
   res.json(err);
  } else {
   console.log("data is " + browsers);
   res.json(browsers);
  }
  
}) ; 


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
app.post('/insert', function(req, res) {
 console.log("inside post");

 var newBrowser = new browserModel();

 newBrowser.name = req.body.name,
  newBrowser.speed = req.body.speed;

 newBrowser.save(function(err, newInsteredValue) {
  if (err) {
   console.log("insert error");
   res.json(err);
  } else {
   res.json(newInsteredValue)
  }
 })

});


//Update Data - Speed
app.put('/update/:id', function(req, res) {
 console.log("inside put");
 console.log("name is "+req.params.id)
 browserModel.findByIdAndUpdate(
  req.params.id, {
   $set: {
    speed: req.body.speed
   }
  }, {
   new: true
  },
  function(err, updatedBrowser) {
   if (err) {
    console.log("error update")
    res.send("Error Updating!!!")
   } else {
    res.json(updatedBrowser) //convert in json so thtas why we gve in post man in simple way for data or ww 
   }
  });
});

//Delete Data
app.delete('/delete/:id', function(req, res) {
 console.log("inside delete")
    console.log("name is "+req.params.id)
// browserModel.findByIdAndRemove(req.params.id, {}, function(err, deletedVideo) {
     // browserModel.findByIdAndRemove({_id:req.params.id}).then (function(err, deletedVideo) {
     browserModel.findByIdAndRemove({_id:req.params.id}, function(err, deletedVideo) {
  if (err) {
   res.send("error deleting video")
  } else {
  // res.send(deletedVideo);
   //res.json(deletedVideo);
   res.send("The Record for " +req.params.id + " is deleted ");
   res.send(deletedVideo);
  }

 })
})

//Get Specific Browser Details
app.get('/specific/:name', function(req,res){
    console.log("name is "+req.params.name)
    browserModel.find({name:req.params.name}, function(err, browserName){
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