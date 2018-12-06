'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

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
  // Your code here
  var row;
  for (row=0;row<3;row++){
    if (board[row][0]==='X' && board[row][1] ==='X' && board[row][2] ==='X'){
      return true;
    } else if (board[row][0]==='O' && board[row][1] ==='O' && board[row][2] ==='O'){
      return true;
    }
  }
  return false;

}

function verticalWin() {
  // Your code here
  board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
  var col;
  for (col=0;col<3;col++){
    if (board[0][col]==='X' && board[1][col] ==='X' && board[2][col] ==='X'){
      return true;
    } else if (board[0][col]==='O' && board[1][col]==='O' && board[2][col]==='O'){
      return true;
    }
  }
  return false;
}

function diagonalWin() {
  // Your code here
  if (board[0][0]==='X' && board[1][1] ==='X' && board[2][2] ==='X'){
    return true;
  } else if (board[0][2]==='X' && board[1][1] ==='X' && board[2][0] ==='X'){
    return true;
  } else if (board[0][0]==='O' && board[1][1] ==='O' && board[2][2] ==='O') {
    return true;
  } else if (board[0][2]==='O' && board[1][1] ==='O' && board[2][0] ==='O') {
    return true;
  }
  return false;
}

function checkForWin() {
  // Your code here
  let win = (horizontalWin()|verticalWin()|diagonalWin()) ? true : false;
  return win;
}

function ticTacToe(row, column) {
  console.log('*****row: ', row, 'column:', column );
  board[row][column] = playerTurn;
  if (playerTurn = 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
  // Your code here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
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
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}