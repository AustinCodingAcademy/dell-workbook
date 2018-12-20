'use strict';

var UID = {
  _current: 0,
  getNew: function(){
	  this._current++;
	  return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
  var _this = this;
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName('head')[0];
  var _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  var className = "pseudoStyle" + UID.getNew();

  _this.className +=  " "+className; 

  _sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
  _head.appendChild(_sheet);
  return this;
};

document.addEventListener('DOMContentLoaded', () => {

  var data = {
    totalCranks:0, 
    totalRPS: 0,
    currentSpeedMltiplyr: .05,
    currentRoadMltiplyr: .009

  };
  var frontwheel = document.querySelector('.front');
  var backwheel = document.querySelector('.back'); 

  function addMultiplyer(bspeed, rspeed) {
    frontwheel.pseudoStyle("after","animation-Duration",`${Number(bspeed.split('s')[0]) - data.currentSpeedMltiplyr}s`);
    frontwheel.pseudoStyle("before","animation-Duration",`${Number(bspeed.split('s')[0]) - data.currentSpeedMltiplyr}s`);
    backwheel.pseudoStyle("after","animation-Duration",`${Number(bspeed.split('s')[0]) - data.currentSpeedMltiplyr}s`);
    backwheel.pseudoStyle("before","animation-Duration",`${Number(bspeed.split('s')[0]) - data.currentSpeedMltiplyr}s`);

    document.querySelector('.main-gear').style.animationDuration = `${Number(bspeed.split('s')[0]) - data.currentSpeedMltiplyr}s`;
    document.querySelector('.road-line').style.animationDuration = `${Number(rspeed.split('s')[0]) - data.currentRoadMltiplyr}s`;
  }

  function takeHealth(item) {
    var currentHealth = parseInt(document.querySelector('#health').innerText);
    var newHealth = currentHealth - parseInt(item);
    document.querySelector('#health').innerText = newHealth;
  }

  document.querySelector('.bike').addEventListener('click', () => {
    var currentSpeed = getComputedStyle(document.querySelector('.front'), ':after').animationDuration;
    var roadSpeed = getComputedStyle(document.querySelector('.road-line')).animationDuration;

    if (currentSpeed.split('s')[0] == 0) {
      
      frontwheel.pseudoStyle("after","animation-Duration","70s");
      frontwheel.pseudoStyle("before","animation-Duration","70s");
      backwheel.pseudoStyle("after","animation-Duration","70s");
      backwheel.pseudoStyle("before","animation-Duration","70s");

      document.querySelector('.main-gear').style.animationDuration = '70s';
      document.querySelector('.road-line').style.animationDuration = '12s';

      currentSpeed = getComputedStyle(document.querySelector('.front'), ':after').animationDuration;


    } else {
      addMultiplyer(currentSpeed, roadSpeed);
    }

    data.totalRPS = `${Number(currentSpeed.split('s')[0])}`;
    data.totalCranks++;
    if (data.totalCranks >= 10) {
      document.getElementById("gelbtn").disabled = false;
    }
    if (data.totalCranks >= 30) {
      document.getElementById("ibubtn").disabled = false;
    }
    if (data.totalCranks >= 50) {
      document.getElementById("stimbtn").disabled = false;
    }
    if (data.totalCranks >= 100) {
      document.getElementById("dopebtn").disabled = false;
    }

    document.querySelector('#crankcount').innerText = data.totalCranks;
  });

  document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {

      var currentSpeed = getComputedStyle(document.querySelector('.front'), ':after').animationDuration;
      var roadSpeed = getComputedStyle(document.querySelector('.road-line')).animationDuration;

      var hcost = parseInt(this.getAttribute('health-cost')) * data.currentSpeedMltiplyr;
      console.log(parseFloat(this.getAttribute('speed-mltipyr') * data.currentSpeedMltiplyr));
      data.currentSpeedMltiplyr = parseFloat(this.getAttribute('speed-mltipyr') * data.currentSpeedMltiplyr);
      data.currentSpeedMltiplyr = parseFloat(this.getAttribute('speed-mltipyr') * data.currentSpeedMltiplyr);
      
      addMultiplyer(currentSpeed, roadSpeed);

      if (this.getAttribute('health-cost') != 0) {
        takeHealth(parseInt(this.getAttribute('health-cost')));
      }

    });
  });
  console.log(data.totalCranks);
  

  setInterval(goGo, 1000);
  var time = 1
  function goGo() {
    time+= .0166;
    document.querySelector('#speed').innerText = (((60/ data.totalRPS)* time)/60).toFixed(3);

    if (document.querySelector('#health').innerText != '150') {
      document.querySelector('#health').innerText = parseInt(document.querySelector('#health').innerText) + 1;
    }
    
  }

});
