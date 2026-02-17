// 1) Simple Functions
function tickUp() {
  const counterEl = document.getElementById("counter");
  let counter = parseInt(counterEl.textContent, 10);
  counter++;
  counterEl.textContent = counter;
}

function tickDown() {
  const counterEl = document.getElementById("counter");
  let counter = parseInt(counterEl.textContent, 10);
  counter--;
  counterEl.textContent = counter;
}

// 2) Simple For Loop
function runForLoop() {
  const counter = parseInt(document.getElementById("counter").textContent, 10);
  const resultEl = document.getElementById("forLoopResult");

  let output = "";
  for (let i = 0; i <= counter; i++) {
    output += i + (i === counter ? "" : " ");
  }

  resultEl.textContent = output;
}

// 3) Repetition with Condition
function showOddNumbers() {
  const counter = parseInt(document.getElementById("counter").textContent, 10);
  const resultEl = document.getElementById("oddNumberResult");

  let output = "";
  for (let i = 1; i <= counter; i += 2) {
    output += i + (i + 2 > counter ? "" : " ");
  }

  resultEl.textContent = output;
}

// 4) Arrays
function addMultiplesToArray() {
  const counter = parseInt(document.getElementById("counter").textContent, 10);
  const arr = [];

  // "If the number is < 5, print an empty array"
  if (counter < 5) {
    console.log(arr);
    return;
  }

  for (let i = 5; i <= counter; i += 5) {
    arr.unshift(i); // reverse order by adding to the front
  }

  console.log(arr); // print the array itself
}

// 5) Objects and Form Fields
function printCarObject() {
  const cType = document.getElementById("carType").value;
  const cMPG = document.getElementById("carMPG").value;
  const cColor = document.getElementById("carColor").value;

  const carObj = { cType, cMPG, cColor };
  console.log(carObj);
}

// 6) Objects and Form Fields pt. 2
function loadCar(carNum) {
  let selectedCar;

  if (carNum === 1) selectedCar = carObject1;
  else if (carNum === 2) selectedCar = carObject2;
  else if (carNum === 3) selectedCar = carObject3;
  else return;

  document.getElementById("carType").value = selectedCar.cType;
  document.getElementById("carMPG").value = selectedCar.cMPG;
  document.getElementById("carColor").value = selectedCar.cColor;
}

// 7) Changing Styles
function changeColor(colorNum) {
  const p = document.getElementById("styleParagraph");

  if (colorNum === 1) p.style.color = "red";
  else if (colorNum === 2) p.style.color = "green";
  else if (colorNum === 3) p.style.color = "blue";
}
