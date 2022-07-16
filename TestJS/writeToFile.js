const fs = require("fs");
const readline = require('readline');

const writeToFile = (name) =>{
    fs.writeFile('Greeting.txt', 'Hello, ' + name + ' !!!!', err =>{
        if(err){
            console.log("Error while writing...!!!");
        }    
    });
}

//writeToFile('sandeep suvarna');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  rl.close();
  writeToFile(answer);
});
