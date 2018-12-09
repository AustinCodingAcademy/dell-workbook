'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function movePiece(fromStack, toStack) {
  // pop the top element from fromStack and push it into the toStack
  const disc = stacks[fromStack].pop();
  stacks[toStack].push(disc);
}

function isLegal(fromStack, toStack) {
  // check that a valid move occurs when a small disc(numbers) follows a larger disc(number)
  const fromStackValue = stacks[fromStack];
  const toStackValue = stacks[toStack];


  if ((fromStackValue.length < 1) || (fromStackValue[fromStackValue.length - 1] > toStackValue[toStackValue.length - 1])) {
    return false;
  }

  return true;
}

function checkForWin() {
  // if stacks b or c is equal to initial stacks a array, then there is a winner. 
  const winningCombo = JSON.stringify([4, 3, 2, 1]);

  if (winningCombo === JSON.stringify(stacks['b']) || (winningCombo === JSON.stringify(stacks['c']))) {
    console.log("Congrats!. You won! ");
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  //  if the move is legal then proceed to move the item and check for a winner each time
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
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