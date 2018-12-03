'use strict';


document.addEventListener("DOMContentLoaded", (event) => {
  var player = 'X';
  document.querySelectorAll('[data-cell]').forEach((cell) => {
    cell.addEventListener('click', (event) => {
      event.target.insertAdjacentHTML('afterbegin', `<div class="${player}">${player}</div>`);
      announceWinner();
      player = (player === 'X') ? 'O' : 'X';
    });
  });
  document.querySelectorAll('#clear').forEach((button)=> {
    button.addEventListener('click', function(event) {
      clear();
    });
  });



  function announceWinner() {
    // document.querySelectorAll('[data-cell]').forEach((cell) => {
    //   if (cell.innerHTML==="0" && cell.innerHTML==="1" && cell.innerHTML==="2") {
    //     console.log(cell.innerHTML + "WINS");
    //   }
    // });

    let cells = document.querySelectorAll('[data-cell]');
    if ((cells[0].textContent === cells[1].textContent) && (cells[0].textContent === cells[2].textContent))  {
      if (cells[0].textContent !="") {
        alert(cells[0].textContent + " WINS");
      }
    } else if ((cells[3].textContent === cells[4].textContent) && (cells[4].textContent === cells[5].textContent)) {
      if (cells[3].textContent != "") {
        alert(cells[0].textContent + " WINS");
      }
    } else if ((cells[6].textContent === cells[7].textContent) &&  (cells[7].textContent === cells[8].textContent)) {
      if (cells[6].textContent != "") {
        alert(cells[0].textContent + " WINS");
      }
    } else if ((cells[0].textContent === cells[4].textContent) && (cells[4].textContent === cells[8].textContent)) {
      if (cells[0].textContent != "") {
        alert(cells[0].textContent + " WINS");
      }
    } else if ((cells[2].textContent === cells[4].textContent) && (cells[4].textContent === cells[6].textContent)) {
      if (cells[2].textContent != "") {
        alert(cells[2].textContent + " WINS");
      }
    } else if ((cells[0].textContent === cells[3].textContent) && (cells[3].textContent === cells[6].textContent)) {
      if (cells[0].textContent != "") {
        alert(cells[0].textContent + " WINS");
      }
    } else if ((cells[1].textContent === cells[4].textContent) && (cells[4].textContent === cells[7].textContent)) {
      if (cells[1].textContent != "") {
        alert(cells[1].textContent + " WINS");
      }
    } else if ((cells[2].textContent === cells[5].textContent) && (cells[5].textContent=== cells[8].textContent)) {
      if (cells[2].textContent != "") {
        alert(cells[2].textContent + " WINS");
      }
    }
  }

  function clear(){
    document.querySelectorAll('[data-cell]').forEach((cell) => {
      cell.innerHTML = "";
    })
  }


});

