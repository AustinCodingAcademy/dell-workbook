"use strict";
(function () {
  // document.addEventListener("DomContentLoaded", (event) => {
  // Shortcut to get elements
  var el = function (element) {
    if (element.charAt(0) === "#") {
      // if passed an ID (hashtag) return single element
      return document.querySelector(element);
    }
    // otherwise, returns a nodelist
    return document.querySelectorAll(element);
  };

  // Variables
  var results = el("#results"),
    equation = el("#equation"),
    test = el("#test"),
    history = el("#history"),
    equals = el("#equals"),
    clear = el("#clear"),
    backspace = el("#backspace"),
    neg = el("#neg"),
    nums = el(".num"),
    operation = el(".ops"),
    resultNum = 0,
    operator,
    historyCount = 1,
    historyCountStr = "[<span class='red'>" + eval(historyCount) + "</span>]: ",
    clearInput = 0;

  history.value = "";
  history.innerHTML = historyCountStr;

  var setNum = function () {
    var dataKey = this.getAttribute("data-key");

    updateResults(clearInput, dataKey);
    clearInput = 0;

    updateHistory(dataKey);
    history.style.opacity = "1";
  };

  var getOps = function () {
    operator = this.getAttribute("data-key");
    clearInput = 1;
    updateResults(clearInput, operator);
    history.value += ",";
    history.innerHTML += " ";
    updateHistory(operator);
    history.innerHTML += " ";
    history.value += ",";
  };

  var equal = function () {
    var getHistory = function (x = history.value) {
      var arr = x.replace(/(=|,)/, ",");
      return arr.split(",").filter(Number);
    };

    var histArr = getHistory();

    var one = histArr[histArr.length - 2];
    var two = histArr[histArr.length - 1];

    if (isNaN(one)) {
      one = resultNum;
    }

    history.value += ",";
    history.innerHTML += "<span class='blue'> = </span>";
    calcEquation(one, two, operator);
  };

  var calcEquation = function (firstVal, secondVal, operationVal) {
    equation.innerHTML = "= ";
    equation.innerHTML += Number(firstVal) + operationVal + Number(secondVal);

    clearInput = 1;
    calculate(firstVal, secondVal, operationVal);
  };

  var calculate = function (first, second, op) {
    switch (op) {
    case "+":
      var result = Number(first) + Number(second);
      break;

    case "-":
      var result = Number(first) - Number(second);
      break;

    case "*":
      var result = Number(first) * Number(second);
      break;

    case "/":
      var result = Number(first) / Number(second);
      break;
    }

    if (!isNaN(result) && result % 1 !== 0) {
      result = result.toFixed(2);
    }

    results.value = result;
    resultNum = result;

    historyCount += 1;
    updateHistory(result);
    history.innerHTML += "<br>[<span class='red'>" + historyCount + "</span>]: ";
    history.value += ",";
  };

  var clearAll = function () {
    history.value = "";
    historyCount = 1;
    history.innerHTML = historyCountStr;
    history.style.opacity = "0";
    results.value = "";
    equation.innerHTML = "= ";
  };

  var getShortcode = function (data) {
    var rv = results.value,
      hv = history.value,
      hi = history.innerHTML;

    return {
      rv,
      hv,
      hi
    };

  };


  var reverseSign = function () {

    var {
      rv,
      hv,
      hi
    } = getShortcode();
    var negNum = rv * -1;

    results.value = negNum;
    history.value = hv.substring(0, hv.lastIndexOf(",") + 1) + negNum;

    var start = hi.lastIndexOf(":") - (historyCount.length + 1);
    var end = hi.lastIndexOf(" ") + 1;
    history.innerHTML = hi.substring(start, end) + negNum;
  };

  var backOne = function () {

    var {
      rv,
      hv,
      hi
    } = getShortcode();

    results.value = rv.substr(0, rv.length - 1);
    history.value = hv.substr(0, hv.length - 1);
    history.innerHTML = hi.substr(0, hi.length - 1);
  };

  var updateHistory = function (str) {
    history.value += str;
    history.innerHTML += str;
    // scroll to bottom of div
    history.scrollTop = history.scrollHeight;
  };

  var updateResults = function (clear, str) {
    if (clear == 1) {
      results.value = "";
    }
    results.value += str;
  };

  /* click events *****************************/

  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  for (var i = 0, l = operation.length; i < l; i++) {
    operation[i].onclick = getOps;
  }

  neg.onclick = reverseSign;
  backspace.onclick = backOne;
  equals.onclick = equal;
  clear.onclick = clearAll;
})();
