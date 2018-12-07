'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var move;

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  //use pop to return the end piece of the array; tells you what you popped off and return it
  //use push to put something on the end of an array; this returns the number of items in the array now
  //if you know the key, you can use a variable. if not, you have to use hard brackets.
  move = stacks[startStack].pop();
  stacks[endStack].push(move);
}

function isLegal(startStack, endStack) {
  // Your code here
  //if the number popped off is smaller than the last number on the array of end stack, it's a valid move
  //also if the array is empty, it's a valid move
  let popValue = stacks[startStack][startStack.length -1];
  let pushValue = stacks[endStack][endStack.length -1];
  if (
    popValue < pushValue ||
    stacks[endStack].length === 0
  ) {
    return true;
  } else return false;

}

function checkForWin() {
  // Your code here
  //check the length of b or c for 4
  return (stacks.b.length === 4 || stacks.c.length === 4)

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
 } 
 if(checkForWin()){
   return true;
 }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}