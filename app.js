const yargs = require('yargs');
// console.log(yargs.argv);

let command = yargs.argv._[0];
const params = yargs.argv;

if (command = 'fly') {
  console.log('flying');
} else if (command = 'drive') {
  if (params.speed && params.car) {
    console.log(`driving ${params.car} at the speed of ${params.speed}`);
  } else {
    console.log('driving');
  }
}
