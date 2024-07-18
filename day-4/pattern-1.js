// Activity 4: Nested Loops

let row = 5;

for (let i = 0; i <= row; i += 1) {
  let pattern = "";
  for (let j = 0; j <= i; j += 1) {
    pattern += "*";
  }
  console.log("*");
}
