

const EventEmitter = require ('events');
const emitter = new EventEmitter();

//Register a listner , if we dont raise this we cant see the output
//for simple call
/*emitter.on('messageLogged', function(){ // calback function or addlistener
  console.log('Listener called');  // for simple call wwrite only function

} );
emitter.emit('messageLogged'); // emit is used to raise an event
*/
//1st name of the event then function
//orde is imp if we 1st call emit an then listner it will not work
//on and addlistener is same but for oftem we use on
//Raise an event

 //making  a noise, produce - signalling
 // emit is used to , //mesagelogged listner

//----------
//if you want to add multiple argements with event keep them in object and properties not direct

//for event argument
//emitter.on('messageLogged', function(arg){ // we can write e, arg or eventArg
//in ES6 or ecma we have the feature called aeerow function
emitter.on('messageLogged', (arg) =>{ // we can write e, arg or eventArg
//replace function with aerowfor making simple
  console.log('Listener called',arg);
});

emitter.emit('messageLogged', {id: 1, url:'http://'});
