let r = require('readline-sync');
let name = r.question("Enter your Name: ");
let age = r.question("Enter your Age: ");
console.log(`Hello ${name} and your age is ${age}`);

let num1 = r.questionInt("Enter a number: ");
let num2 = r.questionInt("Enter another number: ");
let result = num1 + num2;
console.log(`Result = ${result}`);