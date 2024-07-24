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

console.log(`\n-------------- Activity 2 --------------\n`);

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

// task 4: Write a function expression to concatenate two strings and return the result.

let firstName = "Koushik";
let lastName = "Chowdhury";

function concat(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let fullName = concat(firstName, lastName);

console.log(fullName);

console.log(`\n-------------- Activity 3 --------------\n`);

// task 5: Write an arrow function to calculate the sum of two nubers and return the result.

arrowFunAdd = (num1, num2) => {
  return num1 + num2;
};
console.log(`Using arrow function ${arrowFunAdd(num1, num2)}`);

// task 6: write an arrow function to check if a string contains a specific character and return a boolean.

let myName = "Koushik Chowdhury";
let target = "b";
checkString = (myName, target) => {
  if (myName.includes(target)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkString(myName, target));

console.log(`\n-------------- Activity 4 --------------\n`);

// task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

let mul1 = 10;
let mul2 = 10;

defaultParam = (mul1, mul2 = 5) => {
  return `Product of ${mul1} & ${mul2} is ${mul1 * mul2}`;
};

console.log(`${defaultParam(6, 12)}`);
// little bug. if we don't pass anything then it will print undefined || SOLVED

// task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

let personName = "Koushik Chowdhury";
let age;

person = (personName, age = 18) => {
  return `Hello, ${personName} Your age is ${age}.`;
};

console.log(person(personName, age));
