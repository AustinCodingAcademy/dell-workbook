'use strict';

// console.log(this.getAttribute("data-stack"));
// console.log(this.querySelectorAll("[data-block]"));

document.addEventListener("DOMContentLoaded", function (event) {
  let playerTurn = '1';
  let beginStack;
  let endStack;

  document.querySelectorAll("[data-stack]").forEach(cell => cell.addEventListener('click', selectObject));

  function selectObject() {
    if (playerTurn === '1' && hasEmptyChild(this)) {
      return;
    }

    if (playerTurn === '1') {
      beginStack = this;
    } else if (playerTurn === '2') {
      endStack = this;
      if (beginStack !== '')
        movePiece()
    }

    playerTurn = playerTurn === '1' ? '2' : '1';
  }

  function movePiece() {
    if (isLegalMove()) {
      endStack.appendChild(getLastElement(beginStack));
    }
  }

  function isLegalMove() {
    if (hasEmptyChild(beginStack))
      return false;

    if (hasEmptyChild(endStack))
      return true;
    
    if ( parseInt((getLastElement(beginStack)).getAttribute("data-block")) > parseInt((getLastElement(endStack)).getAttribute("data-block"))) {
      return false;
    }

    return true;
  }

  function hasEmptyChild(element) {
    return (element.querySelectorAll("[data-block]")).length === 0;
  }

  function getLastElement(element) {
    let childrenElements = element.querySelectorAll("[data-block]");
    if (childrenElements.length > 0)
      return (childrenElements[childrenElements.length - 1]);
    return null;
  }
});