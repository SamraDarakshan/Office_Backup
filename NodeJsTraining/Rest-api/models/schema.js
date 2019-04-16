
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
/*
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}

*/
//create geolocation schema for get method
const GeoSchema = Schema({
  type:{
    type:String,
    default:"Point"
  },
  coordinates:{ //longitude and latitude
    type:[Number], //array in numbers
    index:"2dsphere"
  }
});


//create samra schema & model
const SamraSchema = new Schema({
name:  {
    type:String,
    required: [true,'Name field is required']
  },
 job: {
   type:String,
 },
 available:{
   type:Boolean,
   default:false
 },
 geometry:GeoSchema
});

const SamraModel = mongoose.model('samra', SamraSchema );
module.exports = SamraModel;
