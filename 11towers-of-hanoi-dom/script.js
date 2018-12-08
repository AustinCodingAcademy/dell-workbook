'use strict';

// console.log(this.getAttribute("data-stack"));
// console.log(this.querySelectorAll("[data-block]"));

document.addEventListener("DOMContentLoaded", function (event) {
  let playerTurn = '1';
  let beginStack;
  let endStack;
  let moveCount = 0;
  let startStack = '';

  document.querySelectorAll("[data-stack]").forEach(cell => cell.addEventListener('click', selectObject));

  function selectObject() {
    if (playerTurn === '1' && hasEmptyChild(this)) {
      return;
    }

    if (playerTurn === '1') {
      beginStack = this;
      if (startStack === '')
        startStack = this.getAttribute("data-stack");
    } else if (playerTurn === '2') {
      endStack = this;
      if (Object.is(beginStack, endStack))
        return;

      if (beginStack !== '') {
        movePiece();
        if (checkForWin()) {
          document.querySelector("#announce-game-won").innerHTML = "Congrats! You Win The Game. <br>Move Count:" + moveCount;
          moveCount = 0;
          startStack = '';
        } else {
          document.querySelector("#announce-game-won").innerHTML = "Move Count:" + moveCount;
        }
      }
    }

    playerTurn = playerTurn === '1' ? '2' : '1';
  }

  function movePiece() {
    if (isLegalMove()) {
      endStack.appendChild(getLastElement(beginStack));
      moveCount++;
    }
  }

  function checkForWin() {
    if ((endStack.querySelectorAll("[data-block]").length === 4) && endStack.getAttribute("data-stack") !== startStack)
      return true;

    return false;
  }

  function isLegalMove() {
    if (hasEmptyChild(beginStack))
      return false;

    if (hasEmptyChild(endStack))
      return true;

    if (getLastElementValue(beginStack) > getLastElementValue(endStack)) {
      return false;
    }

    return true;
  }

  function getLastElementValue(element) {
    return parseInt((getLastElement(element)).getAttribute("data-block"));
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