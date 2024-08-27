// for of

const friendName = ["Koushik", "Chowdhury", "Simran", "Prosad"];
console.log("for of loop--------");

for (const [index, value] of friendName.entries()) {
  console.log(`${index} ${value}`);
}

const myObject = {
  name: "Koushik",
  surname: "Chowdhury",
};
// for (const [key, value] of myObject) {
//     console.log(`${key} - ${value}`);
// }
console.log("for in loop ------------");

for (const key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}

for (const key in friendName) {
  console.log(`${key} ${friendName[key]}`);
}
console.log("for each loop -----------");

friendName.forEach(function (item) {
  console.log(item);
});
console.log("using Arrow Function");

friendName.forEach((item) => {
  console.log(item);
});

console.log("Function");

function printMe(item) {
  console.log(item);
}
friendName.forEach(printMe);

console.log("-------");
friendName.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    name: "koushik",
    surname: "chowdhury",
  },
  {
    name: "Rita",
    surname: "chowdhury",
  },
  {
    name: "Gaddu",
    surname: "chowdhury",
  },
];

myCoding.forEach((item) => {
  console.log(`${item.name}`);
});
