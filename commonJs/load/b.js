
var counter = require('./a').counter;
var getCounter = require('./a').getCounter;
var incCounter = require('./a').incCounter;

/* console.log(counter);
incCounter();
console.log(counter); */

console.log(getCounter()); 
incCounter();
console.log(getCounter()); 