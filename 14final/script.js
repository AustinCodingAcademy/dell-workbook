"use strict";

document.addEventListener("DOMContentLoaded", event => {

// Listen for a button being clicke on...either Fun, Dizzy or Puke.
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener("click", event => {
      let text = event.target.innerHTML;
      console.log (text);
      if (text === "Fun") {
        slowDown();
      } else if (text === "Dizzy") {
        speedUp();
      } else {
        speedBarf()
      }
    })
  })

// current speed is captured and the speed is slowed down by 1
// if game has reached zero and is stopped, this function will restart the game
  function slowDown() {
    const currentSpeed = getComputedStyle(document.querySelector(".image")).animationDuration;
    console.log("current speed" + currentSpeed);
    document.querySelector(".image").style.animationDuration = `${Number(currentSpeed.split("s")[0]) + 1}s`;
    console.log (document.querySelector(".image").style.animationDuration);
    document.querySelector("#make-comment").innerHTML = "Slow is good!";
  }

  // current speed is captured and speed is increased by 1
  // if zero is reached, game stops
  function speedUp() {
    const currentSpeed = getComputedStyle(document.querySelector(".image")).animationDuration;
    console.log("current speed" + currentSpeed);
    document.querySelector(".image").style.animationDuration = `${Number(currentSpeed.split("s")[0]) - 1}s`;
    console.log (document.querySelector(".image").style.animationDuration);
    document.querySelector("#make-comment").innerHTML = "Getting Dizzy!";
  }

  // current speed is captured and speed is increased by 2
  // if zero is reached, game stops
  function speedBarf() {
    const currentSpeed = getComputedStyle(document.querySelector(".image")).animationDuration;
    console.log("current speed" + currentSpeed);
    document.querySelector(".image").style.animationDuration = `${Number(currentSpeed.split("s")[0]) - 2}s`;
    console.log (document.querySelector(".image").style.animationDuration);
    document.querySelector("#make-comment").innerHTML = "Heeeeelp!";
  }

});
