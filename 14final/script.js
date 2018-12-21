"use strict";
var num = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("counter").innerHTML =
    "c o o k i e   c o u n t e r : " + num;
  document.querySelector("#speedup").addEventListener("click", () => {
    if (num < 24) {
      speedUp();
    }
    document.getElementById("counter").innerHTML =
      "c o o k i e   c o u n t e r : " + num;
    num++;
  });
});

function speedUp() {
  const currentSpeed = getComputedStyle(document.querySelector(".cookie"))
    .animationDuration;
  console.log("current speed" + currentSpeed);
  document.querySelector(".cookie").style.animationDuration = `${Number(
    currentSpeed.split("s")[0]
  ) - 1}s`;
  console.log("current speed" + currentSpeed);
}
