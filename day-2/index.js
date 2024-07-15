// Activity 1: Arithmetic Operations

// task 1: Write a program to add two numbers and log the result to the console.

console.log(`----------- Activity 1 ---------------- \n`);

let num1 = 10;
let num2 = 5;

let add = num1 + num2;
console.log(`Addition - ${add}`);

// write a program to subtract two numbers and log the result to the console.

let sub = num1 - num2;
console.log(`Substraction - ${sub}`);

// write a program to multiply two numbers and log the result to the console.

let mul = num1 * num2;
console.log(`Multiplication - ${mul}`);

// write a program to devided two numbers and log the result to the console.

let div = num1 / num2;
console.log(`Division - ${div}`);

// write a program to remainder two numbers and log the result to the console.

let remain = num1 % num2;
console.log(`Remainder - ${remain}`);

console.log(`\n----------- Activity 2 ----------------\n`);

num1 += 100;
console.log(`Addition - ${num1}`);

num1 -= 3;
console.log(`Substraction - ${num1}`);

// Comparison Operators

console.log(`\n----------- Activity 3 ----------------\n`);

let math = 85;
let computer = 90;

if (math > computer) {
  console.log(`You got highest mark in math - ${math}`);
} else {
  console.log(`You got highest mark in computer - ${computer}`);
}

let bng = 80;
let eng = 80;

if (bng >= eng) {
  console.log(`Your Bengali mark either equal to english or greater than it`);
  console.log(`Bengali - ${bng}, English ${eng}`);
} else {
  console.log(`Your English mark is highest ${eng}`);
}

// Logical operator

console.log(`\n----------- Activity 4 ----------------\n`);

let age = 21;
let license = true;

if (age > 18 && license) {
  console.log(`You can drive`);
} else {
  console.log(`You can not drive`);
}

let religion = "hindu";
let country = "india";

if (religion == "hindu" || country == "india") {
  console.log(`You can visit a temple`);
} else {
  console.log(`You can not visit a temple`);
}

let digit = 21;

if (digit % 2 != 1) {
    console.log(`${digit} is even number`);
} else {
    console.log(`${digit} is odd number`);
}

// Ternary operator