// Activity 3: Array Methods (Intermediate)

console.log(`------Activity 2-------`);

// task 7: Use the map method to create a new array where each number is doubled and log the new array.

const array = [1, 2, 3, 4, 5];

squareNum = (num) => {
  return num + num;
};

const doubleArray = array.map(squareNum);
console.log(doubleArray);

console.log(`------Activity 3-------`);

// task 8: Use the filter method to create a new array with only even number and log the new array.

const evenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = evenArray.filter(checkEven);

function checkEven(num) {
  if (num % 2 == 0) {
    return num;
  }
}
console.log(result);

// task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((callbak, initialValue) => {
  return callbak * initialValue;
});

console.log(sum);

console.log(`------Activity 4-------`);

// Array Iteration

// task 10: Use a for loop to iterate over the array and log each element to the console.

const arrayNum = [5, 6, 8, 9, 10, 15];

for (let i = 0; i < arrayNum.length; i += 1) {
  console.log(arrayNum[i]);
}

