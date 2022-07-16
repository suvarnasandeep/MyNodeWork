let fs = require('fs');

//fs.writeFileSync('out.txt', 'sandeep suvarna');
//console.log('this should get printed after prev line');



fs.writeFile('out.txt', 'xxxxxxxxxxxxx', (err) =>{
    console.log('this is printed after file is written');
});

console.log('this should get printed after prev line.....');

let myLoggerApr = function(logMessage, callback){
    fs.writeFile('out.log', logMessage, callback);
}

myLoggerApr('Log this', () =>{
    console.log('callback demo');
});

console.log('sandeeep....');