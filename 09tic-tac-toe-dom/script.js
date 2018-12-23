"use strict";

/*document.addEventListener("DOMContentLoaded", function(event) {
  let player = "X";

  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      if (player === "X" && event.target.innerHTML === "") {
        event.target.innerHTML = "X";
        player = "Y";
        event.target.innerHTML.alert("Winner X")
                
      } else if (player === "Y" && event.target.innerHTML === "") {
        event.target.innerHTML = "O";
        player = "X";
        event.target.innerHTML.alert("Winner X")
      }
    });
  });

  document.querySelector("#clear").addEventListener("click", function() {
    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
      event.target.innerHTML.alert("Winner clear")
    });
    
  });
});*/






// document.addEventListener("DOMContentLoaded", function (event) {
//   document.querySelectorAll('.button').forEach((button) => {
//     button.addEventListener('click', (event) => {
//       let text = event.target.innerHTML;
//       if (text === '=') {
//         equals();
//       } else if (text === '+/-') {
//         PlusMinus();
//       }

//       else if (text === 'Delete') {
//         deleteLast();
//       } else if (text === 'Clear') {
//         clearResults();
//       }

//       else {
//         addNumber(text);
//       }

//     })

//   })


document.addEventListener('DOMContentLoaded', function () {
  var board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
  var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] ];
  var turn = 0;
  Array.from(document.querySelectorAll('td a'), function (link, i) {
    link.addEventListener('click', gotClicked.bind(null, link, i));
  });

  function gotClicked(link, i, e) {
    e.preventDefault();
    if (doMove(i, 'You won!')) return;
    randomAi();
  }

 
  function doMove(i, msg) {
    var td = document.querySelectorAll('td')[i];
    var player = turn % 2;
    td.textContent = 'XO'[player];
    board[i] = player;
    turn++;
    if (isWinFor(player)) {
        alert(msg);
        return true; 
    }
    if (turn == 9) {
        alert("It's a draw");
        return true; 
    }
  }

  function randomAi() {
    var randomPick = Math.floor(Math.random()*(9-turn));
    for (var i in board) {
        if (board[i] !== -1) continue; // used cell -- skip it
        if (randomPick == 0) break; // found it
        randomPick--;
    }
    doMove(i, 'You lost');
  }

  function isWinFor(player) {
    for (var win of wins) {
      var count = 0;
      for (var index of win) {
        if (board[index] !== player) break; 
        count++;
      }
      if (count == 3) {
        Array.from(document.querySelectorAll('td a'), function (link, i) {
          link.parentNode.innerHTML = ''; 
        });
        return true;
      }
    }
  }
  
  
}

);