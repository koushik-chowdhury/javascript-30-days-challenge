// Control Structures

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negetive, or zero, and log the result to the console.
console.log(`\n---------Activity 1--------\n`);
let num = 20;
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num < 0) {
  console.log(`${num} is negetive`);
} else {
  console.log(`${num} - Zero`);
}

// Nested If-Else

console.log(`\n---------Activity 2--------\n`);

let num1 = 1;
let num2 = 6;
let num3 = 3;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is greatest`);
  }
  return;
} else if (num2 > num3) {
  console.log(`${num2} is greatest`);
} else {
  console.log(`${num3} is greatest`);
}
