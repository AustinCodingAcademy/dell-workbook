function clearResults() {
  document.querySelector("#results").value = "";
}
function addNumber(num) {
  document.querySelector("#results").value = num;
}
function addition() {
  document.querySelector("#results").value += "+";
}
function Subtraction() {
  document.querySelector("#results").value += "-";
}
function Multiplication() {
  document.querySelector("#results").value += "*";
}
function Division() {
  document.querySelector("#results").value += "/";
}
function Negate() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = -Math.abs(current.slice(0, -1));
}
function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}
function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}


