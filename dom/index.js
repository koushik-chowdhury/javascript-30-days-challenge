// DOM MANIPULATION
// Activity 1: Selecting and Manipulating Elements

// Select an HTML element by its ID and change its text content.
document.getElementById("title").innerHTML = "Dom Manipulation";

// select an HTML element by its class and change its background color
document.getElementsByClassName("container")[0].style.backgroundColor = "Red";

// Activity 2: Creating and Appending Elements

// task 3: Create a new div element with some text and appent it to the body.

const body = document.querySelector("body");
const div = document.createElement("div");
div.textContent = "This is a div, created using js";
body.appendChild(div);

// task 4: Create a new li element and add it to and esisting ul list.

const node = document.querySelector(".list");
const li = document.createElement("li");
li.textContent = "This is some data that will be appended";
node.appendChild(li);

// Activity 3: Removing Elements
// task 5: Select an HTML element and remove it from the DOM.

const del = document.querySelector(".list");
if (del.hasChildNodes()) {
  del.removeChild(del.children[0]);
} else {
  alert("no element");
}

// task 6: delete last child
if (del.hasChildNodes()) {
  del.removeChild(del.lastChild);
} else {
  alert("no element");
}

// Activity 4: Modifying Attributes and Classes
// tas 7: Select an HTML element and change one of its attribute

document
  .getElementById("profileImg")
  .setAttribute("style", "border: 2px solid white");

// task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector(".yellow").setAttribute("class", "blue");

// Activity 5:

const x = document
  .getElementById("title")
  .addEventListener("mouseover", mouseOver);
const y = document
  .getElementById("title")
  .addEventListener("mouseout", mouseOut);

function mouseOver() {
  this.style.color = "blue";
}
function mouseOut() {
    this.style.color = "";
  }
  