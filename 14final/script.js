"user strict";

document.addEventListener("DOMContentLoaded", () => {
  var eggs = 0,
    num = 1;
  var myassets = [0, 0, 0];

  const reset = document.getElementById("reset_game");

  // click on Start Game button
  document.getElementById("start_game").addEventListener("click", function() {
    // call startEggProduction function defined below
    startEggsProduction(num);
  });

  // click on Reset Game button
  reset.addEventListener("click", function() {
    console.log("Reset button was clicked");
    resetGame();
  });

  //  Deal Panel user's clicks
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", event => {
      let deal = event.target.innerHTML;

      if (deal === "BREAD ($10) 🍞") {
        getDeal(0, 10);
      } else if (deal === "CAKE ($50) 🎂") {
        getDeal(1, 50);
      } else if (deal === "Bakery ($200)🏪") {
        getDeal(2, 200);
      }
    });
  });

  function startEggsProduction(num) {
    console.log("Eggs Production Started ...");

    // start production eggs (click on big egg buttons)
    eggs += num;
    // show egg count in egg_counter field
    document.getElementById("eggs_counter").innerHTML = eggs;

    // rules to activate offers based on number of eggs
    if (eggs >= 10 && eggs < 50) {
      console.log("Bread Deals");
      // show bread deal button on deal panel
      document.getElementById("mydeals_breads").style.visibility = "visible";
    }
    // display cake deals if total of eggs is between 50 and 200
    if (eggs >= 50 && eggs < 200) {
      console.log("Cake Deals");
      document.getElementById("mydeals_cake").style.visibility = "visible";
    }
    // display bakery deal if total of eggs is more than 200 eggs
    if (eggs >= 200) {
      console.log("Bakery Deal");
      document.getElementById("mydeals_bakery").style.visibility = "visible";
    }
  }

  function getDeal(index, $deal) {
    if (eggs > $deal) {
      // display selected deal in myAssets panel
      document.getElementsByClassName("myassets")[index].style.visibility =
        "visible";
      // discount deal value from eggs_count variable
      eggs = eggs - $deal;
      document.getElementById("eggs_counter").innerHTML = eggs;

      myassets[index] = myassets[index] + 1;
      // Update assests count in myAssets array
      document.getElementsByClassName("myassets")[
        index
      ].firstElementChild.innerText = $deal * myassets[index];

      // increse production rate  = fix ratio * total of assets.

      num = Math.floor(Math.pow(1.1, getmyAssetsUnits()));

      // display selected deal in myAssets panel
      document.getElementsByClassName("mydeals")[index].style.visibility =
        "hidden";
    }
  }

  function resetGame() {
    console.log("Game reset!");
    num = 1;
    eggs = 0;
    document.getElementById("eggs_counter").innerHTML = 0;

    // hide remaining deals/assets elements
    hideElemOnDisplay("mydeals");

    hideElemOnDisplay("myassets");
    // set the myasset array values to zero
    myassets.fill(0, 0, 3);
  }

  function hideElemOnDisplay(elem) {
    // clear element present in myasset and deal panel
    var els = document.getElementsByClassName(elem);

    Array.prototype.forEach.call(els, function(el) {
      el.style.visibility = "hidden";
      console.log(el.tagName);
    });
  }

  // function to return total amount of assets Units
  function getmyAssetsUnits() {
    let sum_assets = myassets[0] + myassets[1] + myassets[2];
    console.log(sum_assets);
    return sum_assets;
  }

  // setInterval function will automatically generated eggs.
  window.setInterval(function() {
    let sum_assets = myassets[0] + myassets[1] + myassets[2];
    if (sum_assets > 0) {
      startEggsProduction(num);
    }
  }, 1500);
});
