'use strict';
window.currentDegrees = 0;
var currentDegrees = window.currentDegrees;
document.addEventListener( 'DOMContentLoaded', () => {
  
  //data object for clicker game
  var data = {
    constDegreesPerSec:0, 
    clickCountBank:0, 
    tempClickBoost:0,
  };
  // var strFirstHalf = 'rotate(';
  // var strLastHalf = 'deg)';
  // data.currentDegrees = data.tempClickBoost + data.constDegreesPerSec;
  // var getDegreeFromDOM = getCurrentDegrees(data.currentDegrees);

  // setInterval(() => {
  //   window.currentDegrees = getCurrentDegrees(window.currentDegrees);
  // }, 999);

  function getCurrentDegrees(degrees) {
    //if data.currentDegrees is 0, just return 0
    if (!degrees) {
      return 0;
    } 
    //this gets me the current degree in the DOM (as a string!!!)
    var tmp1 = document.querySelector('#wheel').style.transform.slice(7);
    var tmp2 = tmp1.split('d');
    var getDegree = tmp2[0];
    getDegree = Number(getDegree);
    return getDegree;
  } 


  //this is to add spin to the wheel every 1 second if I have power boosters
  setInterval(() => {
    currentDegrees = window.currentDegrees;
    currentDegrees += data.constDegreesPerSec;
    window.currentDegrees = currentDegrees;
    document.querySelector('#wheel').style['transform'] = 'rotate(' + window.currentDegrees + 'deg)';
  }, 1000);

  //event listener for clicking the wheel.. should add 1 to tempClickBoost & clickCountBank.
  document.querySelector('#wheel').addEventListener('click', function() {
    data.tempClickBoost++;
    data.clickCountBank++;
    window.currentDegrees++;
    // data.currentDegrees = data.tempClickBoost + data.constDegreesPerSec
    document.querySelector('#currentTotal').innerText = data.clickCountBank;  
    this.style['transform'] = 'rotate(' + window.currentDegrees + 'deg)';
  });
  document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('click', function() {
      var cost = parseInt(this.getAttribute('data-cost'));
      //check to see if I've got enough cash in da bank:
      if (cost <= data.clickCountBank ) {
        //parse the data-val atribute to a float
        var additionalDegreesPerSec = parseFloat(this.getAttribute('data-val'));
        var newCost = Math.round(cost * 1.15);
        var powerBoost = this.innerText.split(' - ')[0];
        data.clickCountBank -= cost;
        data.constDegreesPerSec += additionalDegreesPerSec;
        this.innerText = powerBoost + ' - ' + newCost;
        this.setAttribute('data-cost', newCost)
        currentDegrees = window.currentDegrees;
        currentDegrees += data.constDegreesPerSec;
        window.currentDegrees = currentDegrees;
        // data.currentDegrees = data.tempClickBoost + data.constDegreesPerSec
        document.querySelector('#wheel').style['transform'] = 'rotate(' + window.currentDegrees + 'deg)';
        document.querySelector('#currentTotal').innerText = data.clickCountBank; 
      }
    });
  });
});