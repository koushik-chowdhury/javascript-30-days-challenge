// collecting elements
const elements =  JSON.parse(localStorage.getItem("elements")) || [];
let state = 0;

function saveToLocalStorage() {
  localStorage.setItem("elements", JSON.stringify(elements));
}

function getElements() {
  const arrayElements = document.getElementById("arrayElements");
  const pushArray = document.getElementById("pushArray");

  function addElement() {
    if (arrayElements.value != "") {
      elements.push(arrayElements.value);
      console.log(elements);
      saveToLocalStorage();
      arrayElements.value = "";
      arrayElements.focus(); // USEFULL FOR USER EXPERIENCE
    } else {
      console.log("Enter any element..");
    }
  }
  pushArray.addEventListener("click", addElement);
  arrayElements.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addElement();
    }
  });
}
getElements();

// Display function
const display = document.getElementById("display");
const displayArrayShow = document.getElementById("displayArrayShow");
function displayElements() {
  display.addEventListener("click", creatAndDisplay);
  function creatAndDisplay() {
    const items = document.getElementById("displayArray");
    if (elements.length === 0) {
      showToast("error1");
      return;
    }
    // items.innerHTML = "";
    if (state !== elements.length) {
      displayArrayShow.style.display = "block";
      for (let i = state; i < elements.length; i++) {
        const list = document.createElement("li");
        list.textContent = elements[i];
        items.appendChild(list);
        console.log("clicked");
      }
      state = elements.length;
    } else {
      showToast("error2");
    }
  }
}
displayElements();

function showToast(errorType) {
  const toast = document.getElementById("toast");

  // Customize the toast message and appearance based on the error type
  if (errorType === "error1") {
    toast.textContent = "Error: No Elements to show";
    toast.className = "toast show error1";
  } else if (errorType === "error2") {
    toast.textContent = "Updated!";
    toast.className = "toast show error2";
  }

  // Show the toast notification
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000); // Hide after 3 seconds
}

// read about
// 1. Function and its parameter, type, what is event
