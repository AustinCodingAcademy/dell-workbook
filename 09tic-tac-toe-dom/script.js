"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  var state = "black";
  document.querySelectorAll("[data-cell]").forEach(function(box) {
    box.addEventListener("click", function() {
      //   document.getElementsByClassName("box").innerHTML="<img src='x.png' />";
      this.insertAdjacentHTML("afterbegin", `<div class="${state}"></div>`);
      state = state === "black" ? "red" : "black";
    });
  });
});

function checkForWinner() {}
