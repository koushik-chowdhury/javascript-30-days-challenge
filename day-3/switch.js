// Switch Case

// Write a program that uses a switch case to determine the daay of the week based on a number (1-7)
try {
let Switch = 6;

  switch (Switch) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("You have pressed wrong key");
  }
} catch (err) {
  console.log(err.message);
}
