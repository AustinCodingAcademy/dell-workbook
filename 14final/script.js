"use strict";
var data = {
  totalRevs: 360,
  totalCurrent: 0,
  totalRPS: 0
};

setInterval(goGo, 1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  document.querySelector("#wheel").style["transform"] =
    "rotate(" + data.totalRevs + "deg)";
  updateReport();
}

function changeImage(imgName) {
  var image = document.getElementById("wagonimg");
  image.src = imgName;
}

function wagonSpeedCheck() {
  if (data.totalRPS > 1 && data.totalRPS < 2) {
    //change image to 1 horse team
    changeImage("./1horseteam.jpg");
  }
  if (data.totalRPS > 2 && data.totalRPS < 3) {
    //change image to 2 horse team
    changeImage("./2horseteam.jpg");
  }
  if (data.totalRPS > 3 && data.totalRPS < 10) {
    //change image to 8 horse team
    changeImage("./8horseteam.jpg");
  }
  if (data.totalRPS > 10) {
    //change image to fire horse team
    changeImage("./runawayteam.jpg");
  }
}

function updateReport() {
  wagonSpeedCheck();
  document.querySelector("#currentTotal").innerText = Math.floor(
    data.totalCurrent
  );
  document.querySelector("#rps").innerText = (data.totalRPS / 70.4).toFixed(3);
}

document.querySelector("#wheel").addEventListener("click", function() {
  data.totalRevs++;
  data.totalCurrent++;
  updateReport();
});

document.querySelectorAll(".button").forEach(function(button) {
  button.addEventListener("click", function() {
    var cost = parseInt(this.getAttribute("data-cost"));
    if (cost < data.totalCurrent) {
      var value = parseFloat(this.getAttribute("data-val"));
      var newCost = Math.round(cost * 1.15);
      var power = this.innerText.split(" - ")[0];
      data.totalCurrent -= cost;
      data.totalRPS += value;
      this.innerText = power + " - " + newCost;
      this.setAttribute("data-cost", newCost);
    }
    updateReport();
  });
});
