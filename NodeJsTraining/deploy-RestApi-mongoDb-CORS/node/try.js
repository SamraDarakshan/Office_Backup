 
var mongoose = require('mongoose');
var express = require("express")
var app = express()
app.listen("3010",()=>{
    console.log("I just started listening!.")
})

var conString ="mongodb://Samra:Samra4!)@ds145573.mlab.com:45573/demodb";
//var conString = "mongodb://admin:admin@ds038319.mlab.com:38319/mylearning"
/**
 * Models 
 */
/*var User = mongoose.model("User", {
    firstName: String,
    lastName: String
}) */


//here sam is the collection which will save there on m lab name sams"
var Samra = mongoose.model("Sam", {
    firstName: String,
    lastName: String
})

mongoose.connect(conString, { useMongoClient: true }, () => {
    console.log("DB is connected")
})

var dummyUser = {
    firstName: "Samra",
    lastName: "jawaid"
}

mongoose.connect(conString, { useMongoClient: true }, () => {
    console.log("DB is connected")
    saveData()
})

function saveData() {
    var samra = new Samra(dummyUser); //Samra is your model
    samra.save();
}



/*
function saveData() {
    var user = new User(dummyUser);
    user.save();
}*/

app.get('/', function(req, res) {
 res.jsonp(200, {
  'status': "ok",
 });
});

//All Records
app.get('/get', function(req, res) {
 console.log("inside get");
 Samra.find({}, function(err, browsers) { // call with the model name
  if (err) {
   console.log("browser erropr");
   res.jsonp(err);
  } else {
   console.log("data is " + browsers);
   res.jsonp(browsers);
  }
 });
}) ; 