"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  let player = "X";

  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      if (player === "X") {
        event.target.innerHTML = "X";
        player = "Y";
      } else if (player === "Y") {
        event.target.innerHTML = "O";
        player = "X";
      }
      // if (player === "Z") {
      //   player = "Y";
      // }
    });
  });

  //   document.querySelector("#clear") => {
  //       clear.addEventListener("click",event => {
  //         document.querySelectorAll("[data-cell]").forEach(cell => {
  //             event.target.innerHTML = ""  ;
  //         }
  //       })
  //   }
});
function myFunction() {
  //document.querySelectorAll("[data-cell]").forEach(cell => {
  let p = document.querySelectorAll("[data-cell]");
  for (let i = 0; i < p.length; i++) {
    p[i].innerHTML = "";
  }
}
