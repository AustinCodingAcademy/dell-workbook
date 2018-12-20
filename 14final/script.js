'use strict';

  var data = {
    totalRevs:360, 
    totalCurrent:0, 
    totalRPS: 0
  };
  
  setInterval(goGo, 1000);

  function goGo() {
    data.totalRevs += data.totalRPS;
    data.totalCurrent += data.totalRPS;
    document.querySelector('#pup').style['transform'] = 'rotate(' + data.totalRevs + 'deg)';
    updateReport();
  }
  

  function updateReport() {
    document.querySelector('#currentTotal').innerText = Math.floor(data.totalCurrent);
    document.querySelector('#rps').innerText = (data.totalRPS / 70.4).toFixed(3);
  }
  document.querySelector('#pup').addEventListener('click', function() {
    data.totalRevs ++;
    data.totalCurrent ++;
    updateReport();
  })
  

  document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('click', function() {
      var cost = parseInt(this.getAttribute('data-cost'));
      if (cost < data.totalCurrent ) {
        var value = parseFloat(this.getAttribute('data-val'));
        var newCost = Math.round(cost * 1.15);
        var power = this.innerText.split(' - ')[0];
        data.totalCurrent -= cost;
        data.totalRPS += value;
        this.innerText = power + ' - ' + newCost;
        this.setAttribute('data-cost', newCost)
      }
      updateReport();
    })
  })