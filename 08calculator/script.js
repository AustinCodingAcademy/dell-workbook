'use strict';

document.addEventListener("DOMContentLoaded", (funny) => {  
  document.querySelectorAll('.button').forEach((button) => {    
    button.addEventListener('click', function(event) {      
      let text = event.target.innerHTML;
      console.log(text);
      if (text === '=') {
        equals();
      } else if (text === 'Delete'){
        deleteLast();
      } else if(text === 'Clear'){
        clearResults();
      } else if(text === '+/-'){
        changeSign();
      }
      else{
        addNumber(text);        
      }
    })
  })

  function changeSign(){
    document.querySelector("#results").value = "-" + document.querySelector("#results").value;
  }
  
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
    document.querySelector("#results").value = eval(
      document.querySelector("#results").value
    );
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }
});
