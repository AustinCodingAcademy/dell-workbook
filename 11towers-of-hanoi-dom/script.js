'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

  function el(element) {
    if (element.charAt(0) === "." || element.charAt(0) === "#")
      return document.querySelector(element);
    return document.querySelectorAll(element);
  };

  var stack = el("[data-stack]"),
    block = el("[data-block]");

  const numOfBlocks = block.length;
  let startStack = stack[0];
  stack.forEach(cell => cell.addEventListener('click', towersOfHanoi));

  let counter = 0, moves = 0;

  function towersOfHanoi() {
    // is even
    if (counter % 2 == 0)
      getTopBlock(this).classList.add("selected");

    // is odd 
    if (counter % 2 == 1) {
      stack.forEach(cell => cell.classList.remove("selected-stack"));
      this.classList.add("selected-stack");
      if (isValid(this))
        addBlock(this, el(".selected"));
    }
    counter++;
  }

  function isValid(newStack) {
    // insert if no blocks exist in new stack
    if (newStack.children.length == 0)
      return true

    let n = Number(getDataValue(getTopBlock(newStack))),
      o = Number(getDataValue(el(".selected")));
    // insert if block in new stack is greater than selected stack
    if (o < n)
      return true

    // if false for both then remove css for selected objects
    stack.forEach(cell => cell.classList.remove("selected-stack"));
    block.forEach(cell => cell.classList.remove("selected"));
  }

  function addBlock(selectedStack, selectedBlock) {
    selectedBlock.classList.remove("selected");
    selectedStack.appendChild(selectedBlock);
    moves++;
    checkForWin(selectedStack, moves)
  }

  function checkForWin(stack, num){
    el("#announce-game-won").style.visibility = "hidden";
    block.forEach(cell => cell.classList.remove("game-win"));
    
    if(stack.children.length == numOfBlocks && stack != startStack){
      // add animation when user wins 
      block.forEach(cell => cell.classList.add("game-win"));
      el("#announce-game-won").style.visibility = "visible";
      el("#announce-game-won").innerHTML = "completed! in " + num + " moves";
      // reset moves and starting stack
      moves = 0;
      startStack = stack;
    }  
  }

  function getTopBlock(id) {
    // convert id to number if an object was passed 
    if (typeof id == 'object')
      id = getDataValue(id);

    let len = stack[Number(id) - 1].children.length;
    // return the last node
    if (len > 0)
      return stack[Number(id) - 1].children[len - 1];
    return 0;
  }

  function getDataValue(e) {
    if (typeof e == "object") {
      // this returns the first attribute of the passed object
      let objAttr = e.attributes[0].name;
      return Number(e.getAttribute(objAttr));
    }
    // if not an object then return back what was sent
    return e;
  }

});