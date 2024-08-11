function getElement() {
  const container = document.querySelector(".container");
  const dbl = document.querySelector(".dblclick");
  return [container, dbl];
}
const [container, dbl] = getElement();

function getEvent(dbl) {
  document.getElementById("btn").addEventListener("click", changeBgColor);
  dbl.addEventListener("dblclick", doubleFun);
  return dbl;
}

getEvent(dbl); // got stuck here.

function changeBgColor() {
  if (container.style.backgroundColor == "") {
    container.style.backgroundColor = "red";
  } else {
    container.style.backgroundColor = "";
  }
}

function doubleFun() {
  if (dbl.style.backgroundColor == "blue") {
    dbl.style.backgroundColor = "";
  } else {
    dbl.style.backgroundColor = "blue";
  }
}
