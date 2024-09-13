// converting html collection into array
/* 
Array.from(item)
*/

const parent = document.querySelector(".parent")
console.log(parent);
// console.log(parent.children);
console.log(parent.children[0].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML)
}
parent.children[1].style.color = "red"

console.log(parent.childNodes);
