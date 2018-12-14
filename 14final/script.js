'use strict'

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  let currentCost = 0;
  let delta = 0;
  
  setInterval(() => {
    currentCost += delta;
    document.querySelector('#currentMoney').innerHTML = currentCost;
  }, 5000);

  document.querySelector('#burger').addEventListener('click', () => {
    currentCost += 1;
    document.querySelector("#currentMoney").innerHTML = currentCost;
  });

  document.querySelector('#addFries').addEventListener('click', () => {
    
    if(currentCost >= 10){
      currentCost -= 10;
      delta += 1;
    }
    document.querySelector('#currentMoney').innerHTML = currentCost;
  })

  document.querySelector('#addDrink').addEventListener('click', () => {
    
    if(currentCost >= 20){
      currentCost -= 20;
      delta += 2
    }
    document.querySelector('#currentMoney').innerHTML = currentCost;
  })

  document.querySelector('#addMilkshake').addEventListener('click', () => {
    
    if(currentCost >= 100){
      currentCost -= 100;
      delta += 3;
    }
    document.querySelector('#currentMoney').innerHTML = currentCost;
  })

  document.querySelector('#addCone').addEventListener('click', () => {
    
    if(currentCost >= 1000){
      currentCost -= 1000;
      delta += 4;
    }
    document.querySelector('#currentMoney').innerHTML = currentCost;
  })


});