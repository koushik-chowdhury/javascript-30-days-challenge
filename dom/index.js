const Title = document.getElementById("title");
const colors = ["red", "blue", "yellow"];
const max = 2
const min = 0
const rand = Math.floor(Math.random() * (max - min + 1)) + min
Title.style.backgroundColor = colors[rand];




