function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

function subtractNumber(num){
  document.querySelector("#results").value -= num;
}

function subtraction() {
  document.querySelector("#results").value += "-";
}

function multiplyNumber(num) {
  document.querySelector("#results").value *= num;
}

function multiply() {
  document.querySelector("#results").value += "*";
}

function divideNumber(num) {
  document.querySelector("#results").value /= num;
}

function divide() {
  document.querySelector("#results").value += "/";
}

function switchSigns() {
  document.querySelector("#results").value += "+/-";
}

function signSwitchAction(num) {
  document.querySelector("#results").value *= -1;
}
