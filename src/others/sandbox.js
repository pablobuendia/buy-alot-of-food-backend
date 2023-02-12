// Just a random file with random functions

console.log('Hello world');

const a = 1;
const b = 9;

console.log(`The result of a + b is ${a + b}`);

if (a + b === 10) {
  console.log('The sum is 10! Congrats! (?)');
} else {
  console.log('The sum is less than 10! Great! (?)');
}

setInterval(() => {
  console.log('Hello world');
}, 1000);

// Just checking some global variables
console.log(__dirname); // path to current directory
console.log(__filename); // file name
console.log(process);
// console.log(module);

const { readFile, writeFile } = require('fs');

readFile('./text-examples/example1.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

writeFile('./text-examples/write-example.txt', 'This is the example write data.', { flag: 'a' }, (err) => {
  if (err) {
    console.log(err);
  }
});
