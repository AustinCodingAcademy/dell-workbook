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

let isGameOver = false;


function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  var number = stacks[startStack].pop();
  stacks[endStack].push(number);

}

function isLegal(startStack, endStack) {  
  let isLegalMove = false;  
  let stack1 = stacks[startStack];
  let stack2 = stacks[endStack];  
  if(stack2.length < 1)   isLegalMove = true;
  if (stack2[stack2.length-1] > stack1[stack1.length-1]) {
    isLegalMove = true;    
  }
  return isLegalMove;
}

function checkForWin() {  
  let win = false;    
  if(stacks.a.length === 0 && (stacks.b.length === 0 || stacks.b.length === 4) && (stacks.c.length === 0 || stacks.c.length === 4)){
    win = true;
  }     
  return win;
}

function towersOfHanoi(startStack, endStack) {
  movePiece(startStack, endStack);
  isLegal(startStack, endStack);
  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      if (!isGameOver) getPrompt();
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
      assert.equal(isLegal('a','b'), false);
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