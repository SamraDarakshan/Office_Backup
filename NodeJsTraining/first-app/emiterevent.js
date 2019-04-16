
var events = require ('events');
var emitter = new events.EventEmitter();

var uid ='samra';
var pwd= '123';
//once only give the 1st one
emitter.on("addUser",function(user,pwd) {
  console.log("Added user "+ user);

});

//emit will call the events
emitter.emit('addUser',uid,pwd);

uid="sam";
pwd="456";
emitter.emit("addUser",uid,pwd);
