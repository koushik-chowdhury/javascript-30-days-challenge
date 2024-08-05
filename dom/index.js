const Title = document.getElementById("title");
const colors = ["red", "blue", "yellow", "white", "violet", "grey"];

function colorChange() {
  const max = 5;
  const min = 0;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  Title.style.backgroundColor = colors[rand];
  Title.style.transition = "0.5s all"
  Title.style.color = "black"
}

setInterval(colorChange, 1000);

