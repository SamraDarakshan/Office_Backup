
const os = require('os');

var totalMemory=os.totalmem();
var freeMemory=os.freemem();
//console.log ('Total Memory :' +totalMemory);

//Template string
//ES6 ECMAscript6

console.log(`Total Memory: ${totalMemory}`); //backtick
console.log(`Free Memory: ${freeMemory}`);
