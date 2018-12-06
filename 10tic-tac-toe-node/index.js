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
  const winningCombos = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]]
  ];

  return winningCombos.some(combo => {
    return (
      board[combo[0][0]][board[combo[0][1]]][board[combo[0][2]]] ===
        playerTurn &&
      board[combo[1][0]][board[combo[1][1]]][board[combo[1][2]]] ===
        playerTurn &&
      board[combo[2][0]][board[combo[2][1]]][board[combo[2][2]]] === playerTurn
    );
  });
  return horizontalWin;
}

function verticalWin() {
  let winningCombos = [
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]]
  ];

  return winningCombos.some(combo => {
    return (
      board[combo[0][0]][board[combo[1][0]]][board[combo[2][0]]] ===
        playerTurn &&
      board[combo[0][1]][board[combo[1][1]]][board[combo[2][1]]] ===
        playerTurn &&
      board[combo[0][2]][board[combo[1][2]]][board[combo[2][2]]] === playerTurn
    );
  });
  return verticalWin;
}

function diagonalWin() {
  let winningCombos = [[[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]];

  return winningCombos.some(combo => {
    return (
      board[combo[0][0]][board[combo[1][1]]][board[combo[2][2]]] ===
        playerTurn &&
      board[combo[0][2]][board[combo[1][1]]][board[combo[2][0]]] === playerTurn
    );
  });
  return diagonalWin;
}

function checkForWin() {
  return horizontalWin();
  return verticalWin();
  return diagonalWin();
}

function ticTacToe(row, column) {
  console.log('row:', row, 'column:', column);
  board[row][column] = playerTurn;
  playerTurn = playerTurn === 'X' ? 'O' : 'X';
  console.log(checkForWin());
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
