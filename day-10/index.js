function getElement() {
  const container = document.querySelector(".container");
  const dbl = document.querySelector(".dblclick");
  const hover = document.querySelector(".hover");
  const getText = document.getElementById("getText");
  const writeText = document.getElementById("downWrite");
  const writeTextUp = document.getElementById("upWrite");
  const colors = document.getElementById("colors");
  const myList = document.getElementById("myList");
  return [
    container,
    dbl,
    hover,
    getText,
    writeText,
    writeTextUp,
    colors,
    myList,
  ];
}
const [container, dbl, hover, getText, writeText, writeTextUp, colors, myList] =
  getElement();

function getEvent(dbl, hover, getText, colors, myList) {
  document.getElementById("btn").addEventListener("click", changeBgColor);
  dbl.addEventListener("dblclick", doubleFun);
  hover.addEventListener("mouseover", hoverBgChange);
  hover.addEventListener("mouseout", hoverReset);
  getText.addEventListener("keydown", keydown);
  getText.addEventListener("keyup", keyup);
  colors.addEventListener("change", boxBgChange);
  myList.addEventListener("click", eventDelegant);
  return [dbl, hover, getText, colors, myList];
}

getEvent(dbl, hover, getText, colors, myList); // got stuck here.

// Task 1: Add a click event listener to a button that changes the text content of a paragraph
function changeBgColor() {
  if (container.style.backgroundColor == "") {
    container.style.backgroundColor = "red";
  } else {
    container.style.backgroundColor = "";
  }
}

// Task 2: Add a double-click event listener to an image that toggles its visibility
function doubleFun() {
  if (dbl.style.backgroundColor == "blue") {
    dbl.style.backgroundColor = "";
  } else {
    dbl.style.backgroundColor = "blue";
  }
}

// Task 3: Add a mouseover event listener to an element that changes its background color.
function hoverBgChange() {
  hover.style.backgroundColor = "pink";
}

// Task 4: Add a mouseout event listener to an element that resets its background VideoColorSpace.
function hoverReset() {
  hover.style.backgroundColor = "";
}

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
function keydown() {
  writeText.innerHTML = `Keydown event : ${getText.value}`;
}

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
function keyup() {
  writeTextUp.innerHTML = `KeyUp event: ${getText.value}`;
}

// [ TASK 7 IS PENDING]
// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph

function boxBgChange() {
  // basic way
  const bg = document.querySelector(".box");
  if (colors.value == "default") {
    bg.style.backgroundColor = "";
  } else {
    bg.style.backgroundColor = colors.value;
  }
  console.log(colors.value);
}


function eventDelegant(){
    alert(`${event.target.textContent} clicked`);
}

const add = document.getElementById("addItem");
add.addEventListener("click", (event) => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${myList.children.length + 1}`;
  myList.appendChild(newItem);
  
  // Use setTimeout with a delay of 0 to allow the DOM to update before showing the alert
  setTimeout(() => {
    alert(`Item ${myList.children.length} added`);
  },200);
});
