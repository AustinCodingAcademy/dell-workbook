"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  // document.querySelector('.cookie').addEventListener('click',()=>{
  //   document.querySelector('.cookie').className += ' bounce';
  //   let count = Number(document.querySelector('#counter').innerHTML);
  //   document.querySelector('#counter').innerHTML = count + 1;
  // });

  // for (var i = 0; i <=10; i++) {
  //   createBaloon('red');
  // }

  initialize();
  var colorArray = ["red", "green", "yellow", "purple", "orange"];
  var min = 0;
  var max = 4;

  document.querySelectorAll(".baloon").forEach(baloon => {
    baloon.addEventListener("click", function(event) {
      this.parentNode.removeChild(this);
      //Create Random baloon
      var randomNumber = min + Math.floor(Math.random() * (max + 1 - min));
      createBaloon(colorArray[randomNumber]);

      let count = Number(document.querySelector("#counter").innerHTML);
      document.querySelector("#counter").innerHTML = count + 1;
    });
  });

  function initialize() {
    let count = Number(document.querySelector("#counter").innerHTML);
    if (count === 0) {
      for (var i = 0; i <= 10; i++) {
        createBaloon("red");
      }
    }
  }

  function createBaloon(color) {
    var leftposition = Math.floor(Math.random() * 100);
    var baloon = '<div class="baloon ' + color;
    baloon += '" style="left:' + leftposition + "%;";
    baloon += "z-index:" + leftposition + ";";
    baloon += '"></div>';
    document.querySelector(".baloon-container").innerHTML += baloon;
  }
});
