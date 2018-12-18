'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for (var i = 0; i < board.length; i++) {
    //for loop says continue each time i fits the profile of starting at 0 and ending with the length of the board or 2
    if (
      // for loop to check that if any of those combos have a matching entry at the same time, that entry player has won
      board[i][0] === playerTurn &&
      board[i][1] === playerTurn &&
      board[i][2] === playerTurn
    ) {
      return true;
    }
  }
  return false;
}

function verticalWin() {
  for (var i = 0; i < board.length; i++) {
    //for loop says continue each time i fits the profile of starting at 0 and ending with the length of the board or 2
    if (
      // for loop to check that if any of those combos have a matching entry at the same time, that entry player has won
      board[0][i] === playerTurn &&
      board[1][i] === playerTurn &&
      board[2][i] === playerTurn
    ) {
      return true;
    }
  }
  return false;
}

function diagonalWin() {
  // for loop to check that if any of the below two combos have a matching entry at the same time, that entry player has won
  if (
    board[0][0] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][2] === playerTurn
  ) {
    return true;
  } else if (
    board[0][2] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][0] === playerTurn
  ) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  //if the any combos labeled with these function titles return true, then return that player has one
  if (horizontalWin || verticalWin || diagonalWin) {
    console.log(`Player ${playerTurn} wins`);
    return true;
  }
}

function ticTacToe(row, column) {
  //explains how the game should work
  console.log('row:', row, 'column:', column); //returns the titles row and columns
  board[row][column] = playerTurn; //definition of the varible playerTurn, whenever the player enters the the loacation of where they want to place a marker
  playerTurn = playerTurn === 'X' ? 'O' : 'X'; //if the player adds a X marker, then the next turn should place a O marker
  console.log(checkForWin()); //after each move, the game needs to check for a win and return the statement here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', row => {
    rl.question('column: ', column => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {
  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [[' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' ']];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X']];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
