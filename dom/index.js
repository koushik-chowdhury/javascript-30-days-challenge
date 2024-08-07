function getElement() {
  const Title = document.getElementById("title");
  const colors = ["#FF0000", "blue", "yellow", "white", "violet", "grey"];
  return [Title, colors];
}
function colorChange() {
  const [Title, colors] = getElement();
  const max = 5;
  const min = 0;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  Title.style.backgroundColor = colors[rand];
  Title.style.transition = "0.6s all";
  Title.style.color = "black";
}
setInterval(colorChange, 1000);
