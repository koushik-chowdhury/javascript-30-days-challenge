// collecting elements

// ------------- GLOBAL ---------------
const elements = JSON.parse(localStorage.getItem("elements")) || [];
let evenNumber = [];
let evenIndex = 0;
let lastProcessedIndex = 0;
let state = 0;

// ------------- GLOBAL END ---------------

// ----------- LOCAL STORAGE --------------
function saveToLocalStorage() {
  localStorage.setItem("elements", JSON.stringify(elements));
}

// ----------- LOCAL STORAGE END --------------

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
      showToast("error3");
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

// --------------- DISPLAYING THE ARRAY IN WEB PAGE ------------
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
    if (state !== elements.length) {
      displayArrayShow.style.display = "block";
      // evenDisplay.style.display = "none";
      for (let i = state; i < elements.length; i++) {
        const list = document.createElement("li");
        list.textContent = elements[i];
        items.appendChild(list);
        // console.log("clicked");
      }
      state = elements.length;
    } else {
      showToast("error2");
    }
  }
}
displayElements();
// --------------- DISPLAYING THE ARRAY IN WEB PAGE END ------------

// ---------CALCULATE EVEN NUMBER --------------
function evenNum() {
  if (evenIndex !== elements.length) {
    // console.log("Inside even cal fun");
    for (let i = evenIndex; i < elements.length; i++) {
      if (elements[i] % 2 === 0) {
        evenNumber.push(elements[i]);
        // console.log(evenNumber);
      }
    }
    evenIndex = elements.length;
  } else {
    console.log("No new Elements");
  }
}
// ---------CALCULATE EVEN NUMBER END --------------

// --------- EVEN ARRAY DISPLAY ---------
const evenArray = document.getElementById("evenArray");
const evenDisplay = document.getElementById("evenDisplay");

function showEvenArray() {
  const evenArrayDisplay = document.getElementById("evenArrayDisplay");
  evenArray.addEventListener("click", function () {
    evenNum();
    evArray();
  });

  function evArray() {
    if (elements.length === 0) {
      showToast("error1");
      return;
    }
    if (lastProcessedIndex !== evenNumber.length) {
      for (let i = lastProcessedIndex; i < evenNumber.length; i++) {
        evenDisplay.style.display = "block";
        // displayArrayShow.style.display = "none";
        const evList = document.createElement("li");
        evList.textContent = evenNumber[i];
        evenArrayDisplay.appendChild(evList);
        // console.log("It should print");
      }
      lastProcessedIndex = evenNumber.length;
    } else {
      showToast("error2");
    }
  }
}
showEvenArray();
// --------- EVEN ARRAY DISPLAY END ---------

const clearStorage = document.getElementById("clearStorage");

function Reset() {
  clearStorage.addEventListener("click", function () {
    console.log("clicked");

    localStorage.clear();
  });
}
Reset();
function showToast(errorType) {
  const toast = document.getElementById("toast");

  // Customize the toast message and appearance based on the error type
  if (errorType === "error1") {
    toast.textContent = "Error: No Elements to show";
    toast.className = "toast show error1";
  } else if (errorType === "error2") {
    toast.textContent = "Updated!";
    toast.className = "toast show error2";
  } else if (errorType === "error3") {
    toast.textContent = "You are Trying to insert NULL!";
    toast.className = "toast show error3";
  }

  // Show the toast notification
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000); // Hide after 3 seconds
}
