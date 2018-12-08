'use strict';

// console.log(this.getAttribute("data-stack"));
      // console.log(this.querySelectorAll("[data-block]"));

document.addEventListener("DOMContentLoaded", function(event) {
  let playerTurn = '1';
  let beginStack;
  let endStack;

  document.querySelectorAll("[data-stack]").forEach(cell => cell.addEventListener('click', selectObject));

  function selectObject(){
    if(playerTurn === '1'){
      beginStack = this;
    }else if(playerTurn === '2'){
      endStack = this;
      if(beginStack !== '')
        movePiece()
    }

    playerTurn = playerTurn === '1' ? '2' : '1'; 
  }

  function movePiece(){
    let beginStackElements = beginStack.querySelectorAll("[data-block");
    endStack.appendChild(beginStackElements[beginStackElements.length - 1]);
  }

  function isLegal(){
    let moveElement = beginStack.querySelectorAll("[data-block");
    
  }
});


//Const in javascript/c#