"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  initialize();
  addEvent();

  function initialize() {
    let count = Number(document.querySelector("#counter").innerHTML);
    if (count === 0) {
      for (var i = 0; i <= 10; i++) {
        createBaloon();
      }
    }
  }

  function createBaloon() {
    const colorArray = {
      1: "red",
      2: "purple",
      3: "green",
      4: "orange",
      5: "yellow"
    };
    let min = 1;
    let max = 5;

    var randomNumber = min + Math.floor(Math.random() * (max + 1 - min));

    var leftposition = Math.floor(Math.random() * 100);
    var baloon = '<div class="baloon ' + colorArray[randomNumber];
    baloon += '" style="left:' + leftposition + "%;";
    baloon += "z-index:" + leftposition + ";";
    baloon += '"></div>';

    document
      .querySelector(".baloon-container")
      .insertAdjacentHTML("beforeend", baloon);
  }

  function addEvent() {
    var colorArray = ["none", "red", "purple", "green", "orange", "yellow"];

    document.addEventListener("click", function(e) {
      let className = e.target.classList[0];
      if (className === "baloon") {
        console.log(e.target.classList[1]);

        var colorValue = colorArray.indexOf(e.target.classList[1]);

        let count = Number(document.querySelector("#counter").innerHTML);

        document.querySelector("#counter").innerHTML = count + colorValue;
        e.target.className += " bounce";
        e.target.parentNode.removeChild(e.target);

        createBaloon();
      }
    });
  }
});
