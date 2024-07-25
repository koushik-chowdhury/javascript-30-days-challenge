// Activity 5: Higher-Order Functions
// task 9: Write a HOF that takes a function and a number, and calls the function that many times.

function timePrint(fun, time) {
  return function (hofFun) {
    let result = ""
    for (let i = 1; i <= time; i++) {
      result += fun(`${name} ${i} \n`);
    }
    return result;
  };
}
let name = "Koushik Chowdhury";
printMyName = (name) => name;

/* 
const koushik = timePrint(printMyName, 5);
const output = koushik();
console.log(output); 
*/
const output = timePrint(printMyName, 6);
const hofFun = output();
console.log(hofFun);