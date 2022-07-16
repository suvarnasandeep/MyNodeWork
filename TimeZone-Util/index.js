const moment = require('moment-timezone');

moment.tz.setDefault('India/Bangalore');

console.log(process.argv);
let targetTimezone;

if(process.argv.length != 3){
    console.log('Invalid input');
    process.exit(1);
}
else {
    targetTimezone = process.argv[2];
}


console.log('The time at the ' +  targetTimezone + 'is ' + moment().tz(targetTimezone).format());


