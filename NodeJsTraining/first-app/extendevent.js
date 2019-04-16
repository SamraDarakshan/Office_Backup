
//const EventEmitter = require ('events');
//no need of object creation

const Logger= require('./loggerevent'); // logger class requiring
//creating class object
const lo = new Logger();
// put themabove cox we use them below

//Register a Listener // can use on also

//instead of emitter now this object of class calling
/*lo.addListener('messageLogged', function(arg){ // if no arguments then write only function()
console.log('Listener called',arg);


}); //if arguments like in last eg. so give arg, or e or eventArg
lo.emit('messageLoggged', {id:1, url: 'http://'}); */
// load logger module and call log fucntion
lo.on('messageLogged', (arg) =>{ // we can write e, arg or eventArg
//replace function with aerowfor making simple
  console.log('Listener called',arg);
});
//lo.emit('messageLogged', {id: 1, url:'http://'});

lo.log('samra'); // object lo and cunction log used in this
lo.abc('2nd method');
//call log function from loggerevent

//lo.log('message'); if you writing like this then in the log function
// gives the output like before you give samra

// if in logger module.expors.ls=log;
//then call here by this object name =log is log function
//lo.ls('message');
