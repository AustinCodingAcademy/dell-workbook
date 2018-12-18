"use strict";

document.addEventListener("DOMContentLoaded", event => {

  // document.querySelectorAll('.button').forEach((button) => {
  //   button.addEventListener('click', function(event) {

  // document.querySelector("#fun").addEventListener("click", event => {slowDown());
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

  function slowDown() {
    const currentSpeed = getComputedStyle(document.querySelector(".image")).animationDuration;
    console.log("current speed" + currentSpeed);
    document.querySelector(".image").style.animationDuration = `${Number(currentSpeed.split("s")[0]) + 1}s`;
    console.log (document.querySelector(".image").style.animationDuration);
    document.querySelector("#make-comment").innerHTML = "Slow is good!";
  }

  function speedUp() {
    const currentSpeed = getComputedStyle(document.querySelector(".image")).animationDuration;
    console.log("current speed" + currentSpeed);
    document.querySelector(".image").style.animationDuration = `${Number(currentSpeed.split("s")[0]) - 1}s`;
    console.log (document.querySelector(".image").style.animationDuration);
    document.querySelector("#make-comment").innerHTML = "Getting Dizzy!";
  }

  function speedBarf() {
    const currentSpeed = getComputedStyle(document.querySelector(".image")).animationDuration;
    console.log("current speed" + currentSpeed);
    document.querySelector(".image").style.animationDuration = `${Number(currentSpeed.split("s")[0]) - 2}s`;
    console.log (document.querySelector(".image").style.animationDuration);
    document.querySelector("#make-comment").innerHTML = "Heeeeelp!";
  }

});
