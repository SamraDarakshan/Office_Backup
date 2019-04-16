const express = require ('express');
const router = express.Router();

const SamraModel = require("../models/schema");

//get a list of samra from database
router.get('/samra',function (req,res,next){
//res.send({type:'GET'});
SamraModel.find({}).then(function(samra){
  res.send(samra);
});
//this is a func perform geo near query
/*SamraModel.geoNear(
  {type:'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
  {maxDistance:100000, spherical:true}
).then(function(samra){
  res.send(samra);
});*/
});

router.post('/samra',function (req,res,next){
//add a new to the db
/*var samra = new SamraModel(req.body);
samra.save();
res.send(samra); */

//instead of using above two lines you can write
SamraModel.create(req.body).then(function(samra){
res.send(samra);
//save samra db intp this
console.log("Record "+req.body+ " inserted");
}).catch(next);
});

/*
without using mongoose
router.post('/samra',function (req,res){
console.log(req.body);
res.send({
  type:'POST',
  name: req.body.name,
  job: req.body.job
});
});  */

router.put('/samra/:id',function (req,res,next){
//res.send({type:'PUT'});
console.log(req.params.id);
SamraModel.findByIdAndUpdate({_id: req.params.id},req.body).then (function(){



//this wil show bf update in postman bu tin robo it will updated
  //res.send(samra);//findby is mongoose built in
  // show after update in postman
  SamraModel.findOne({_id:req.params.id}).then(function(samra){
  res.send(samra); // shows as it is so thats why we put directly in json format on postmman raw data
  });
  //.catch(next);
});
//.catch(next);
});

//give some specific id in put and del to del anf to update

router.delete('/samra/:id',function (req,res,next){
//res.send({type:'DELETE'});
console.log(req.params.id);
SamraModel.findByIdAndRemove({_id: req.params.id}).then (function(samra){
  res.send(samra);//findby is mongoose built in
  console.log("Record for "+req.params.id +"deleted");
}).catch(next);
//.catch(next);
});

module.exports = router; //import
