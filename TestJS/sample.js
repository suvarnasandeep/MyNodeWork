
var addFn = require('./add.js');

function greet(name){
    console.log("Hello there, " + name + "!");
}

greet("sandeep");

console.log(addFn.add(10, 20));
console.log(addFn.subtract(10, 20));
console.log("*****************************");


console.log("*****************************");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {  
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

