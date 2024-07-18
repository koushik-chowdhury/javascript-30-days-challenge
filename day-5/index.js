// Functions

console.log(`-------------- Activity 1 --------------\n`);

// task 1: Write a function to check if a number is even or odd and log the result to the console.

let num = 4;
let result = oddEven(num);

function oddEven(num) {
  if (num % 2 == 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is odd`);
  }
}

console.log(`\n square of a number \n`);

// task 2:

let n = 10;
let res = square(n);

function square(n) {
  return n * n;
}

console.log(`Square of ${n} is ${res}`);

console.log(`-------------- Activity 2 --------------\n`);

// Function Expression

// task 3: write a function expression to find the maximum of two numbers and log the result to the console.

let num1 = 5;
let num2 = 7;

let answer = greatest(num1, num2);
function greatest(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(`${answer} is greatest`);

// task 4:

let firstName = "Koushik";
let lastName = "Chowdhury";

let fullName = concat(firstName, lastName);

function concat(firstName, lastName){
    return `${firstName} ${lastName};`
}

console.log(fullName);
