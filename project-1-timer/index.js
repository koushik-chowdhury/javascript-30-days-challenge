const time = document.getElementById("time");
const start = document.getElementById("submit");
const show = document.getElementById("show");

let totalTime;

start.addEventListener("click", function() {
  totalTime = time.value * 60; // Initialize totalTime based on user input
  timer(); // Call the timer function once to start the countdown
});

function timer() {
  show.textContent = totalTime;
  totalTime -= 1;

  if (totalTime <= 0) {
    show.textContent = "Time's up!";
    return; // Exit the function to stop further execution
  }

  setTimeout(timer, 1000); // Schedule the next call to timer after 1 second
}
