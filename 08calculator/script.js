'use strict';

document.addEventListener("DOMContentLoaded", function(event){

  document.querySelectorAll('.button').forEach((button) => {

    button.addEventListener('click', function(event) {

      let text = event.target.innerHTML;
      if(text === '='){
        equals();
      }
      else if (text === 'Clear'){
        clearResults();
      }
      else if(text === 'Delete'){
        deleteLast();
      }
      else if (text === '+/-'){
        signSwitchAction();
      }
      else{
        addNumber(text);
      }
      
    })
  })

function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

function signSwitchAction(num) {
  document.querySelector("#results").value *= -1;
}

});
