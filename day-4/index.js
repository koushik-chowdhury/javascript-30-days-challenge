// Loops

// task 1: write a program to print numbers from 1 to 10 using a for loop

console.log(`--------------- ACTIVITY 1----------------`);

let num = 10;

for (let i = 1; i <= num; i += 1) {
  console.log(`${i}`);
}

// task 2: write a program to print the multiplication table of 5 using a for loop.

let mul = 5;

for (let i = 1; i <= mul; i += 1) {
  for (let j = 1; j <= 10; j += 1) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

// Activity 2:

console.log(`--------------- ACTIVITY 2 ----------------`);

// task 3: write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let add = 100;
let sum = 0;
let i = 1;
while (add) {
  sum = sum + i;
  add--;
  i++;
}
console.log(`Sum = ${sum}`);

// task 4: write a program to print numbers from 10 to 1 using a while loop.

let revNum = 10;

for (let i = 1; i <= revNum; i += 1) {
  console.log(`${revNum - i + 1}`);
}

// Pending Do-While and Nested loops