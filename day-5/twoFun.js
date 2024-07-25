// // task 10: write a HOF that takes two functions and a value, applies the first function to the value, and then applies the second function to the result

function twoFunction(fun1, fun2, val) {
  const result = fun1(val);
  const finalResult = fun2(result);
  return finalResult;
}
fun1 = (num) => {
  let result = num * 2;
  return result;
};

fun2 = (num) => {
  let result = num + 5;
  return result;
};

console.log(twoFunction(fun1, fun2, 5));
