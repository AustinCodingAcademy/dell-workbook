function addNumber(num) {
  document.querySelector("#results").value += num;
}
function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}
function subtraction() {
  document.querySelector("#results").value += "-";
}
function multiplication() {
  document.querySelector("#results").value += "*";
}
function division() {
  document.querySelector("#results").value += "/";
}

function opposite() {
  let sign = Math.sign(document.querySelector("#results").value);
  console.log(sign);
  if (sign == -1) {
    document.querySelector("#results").value = Math.abs(
      document.querySelector("#results").value
    );
  } else if (sign == 1) {
    document.querySelector("#results").value =
      document.querySelector("#results").value * -1;
  }
}

function equals() {
  document.querySelector("#results").value = eval(
    document.querySelector("#results").value
  );
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
