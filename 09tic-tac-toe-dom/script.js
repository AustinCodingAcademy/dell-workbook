"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let player = "X";

  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      changePlayer();

      if (cell.innerHTML === ""){
        cell.innerHTML = player;
      } //only allows empty cell to be updated
    });

    checkWin ();
  });

  // !--toggle between x and
  // clear board
  // after each play - check for a win
  //dont overwrite

  function changePlayer() {
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  }

  function checkWin (){

    // switch (key) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
    // if ([data-cell]="0".innerHTML === [data-cell]="1".innerHTML ) &&  ([data-cell]="1".innerHTML === [data-cell]="2".innerHTML ))
    //   console.log ('win')
    // }
    
  }
  
});
