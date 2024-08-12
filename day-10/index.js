function getElement() {
  const container = document.querySelector(".container");
  const dbl = document.querySelector(".dblclick");
  const hover = document.querySelector(".hover");
  const getText = document.getElementById("getText");
  const writeText = document.getElementById("downWrite");
  const writeTextUp = document.getElementById("upWrite");
  return [container, dbl, hover, getText,  writeText, writeTextUp];
}
const [container, dbl, hover, getText, writeText, writeTextUp] = getElement();

function getEvent(dbl, hover, getText) {
  document.getElementById("btn").addEventListener("click", changeBgColor);
  dbl.addEventListener("dblclick", doubleFun);
  hover.addEventListener("mouseover", hoverBgChange);
  hover.addEventListener("mouseout", hoverReset);
  getText.addEventListener("keydown", keydown);
  getText.addEventListener("keyup", keyup);
  return [dbl, hover, getText];
}

getEvent(dbl, hover, getText); // got stuck here.

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
function keydown(){
  writeText.innerHTML = `Keydown event : ${getText.value}`;
}

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
function keyup(){
  writeTextUp.innerHTML = `KeyUp event: ${getText.value}`;
}

// Task 7: Add a change event listener to a select dropdown that displays the selected value in a paragraph