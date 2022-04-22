console.log("Hello world")

let a = 1;
let b = 9;

console.log(`The result of a + b is ${a + b}`);


if (a + b === 10) {
    console.log("The sum is 10! Congrats! (?)")
} else {
    console.log("The sum is less than 10! Great! (?)");
}

// Just checking some global variables
console.log(__dirname);
console.log(__filename);
console.log(module);

const juan = 'juan'
const pedro = 'pedro'

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi('Susana')
sayHi(juan)
sayHi(pedro)