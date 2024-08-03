function changeHtmlContent() {
  document.getElementById("text").innerHTML = "web Developer";
}

function changeBgColor() {
  document.getElementsByClassName("container")[0].style.backgroundColor =
    "yellow";
}

changeHtmlContent();
changeBgColor();
