// Loops

// task 1: write a program to print numbers from 1 to 10 using a for loop

console.log(`\n--------------- ACTIVITY 1----------------\n`);

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

console.log(`\n--------------- ACTIVITY 2 ----------------\n`);

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

console.log(`\n --------------- ACTIVITY 3 ---------------- \n`);

// task 5: write a program to print numbers from 1 to 5 using a do-while loop.

let text = "";
let k = 0;

do {
  text += k;
  k += 1;
} while (k < 5);

console.log(text);


let factOf = 5;
let fact = 1;
let iterate = 1;

do {
  fact *= iterate;
  iterate += 1;
} while(iterate <= factOf);

console.log(`Factorial of ${factOf} is ${fact}`);


console.log(`\n --------------- ACTIVITY 5 ---------------- \n`);

// task 8:

let n = 10;

for (let i = 1; i <= n; i += 1) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}

// task 9:

console.log(`----------`);

let Num = 10;

for (let i = 1; i <= n; i += 1) {
  if (i == 7) {
    break;
  } else {
    console.log(i);
  }
}
