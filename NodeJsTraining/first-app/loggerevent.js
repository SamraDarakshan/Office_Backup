

const EventEmitter = require ('events');
// no need of objec creation here
//var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
   //now logger class has all the features that is in event emmiter classs
  // upercase for class
  log (message){
  //  function log (message) when we use funcion inside class no need to write function

    console.log(message);
    //console.log('samra'); if you gave in that file lo.log('message')
//ye wala output aur method same hoga ya wo wo wala calling and ye method
    //Rasise an  event
this.emit('messageLoggged', {id:1, url: 'http://'}); //raise event here
     //instead of using object now we directly
     // call raise this even by using this in class ClassName {

     }
     abc(msg){
       console.log(msg);
     }

  }




module.exports = Logger;
// instead of exporting log funtion now we export class
