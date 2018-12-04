"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
// code goes here, but what code??
    let player1 = 'X';
    document.querySelectorAll('[data-cell]').forEach(cell => {
        cell.addEventListener('click', (event) => {
            event.target.innerHTML = 'X';
    let player2 = 'O';
     document.querySelectorAll('[data-cell]').forEach(cell => {
        cell.addEventListener('click', (event) => {
            event.target.innerHTML = 'O';
            })
        })

 })
 })
function checkForWin() {
    const winningCombos = [
        [0, 1, 2],
        // write out each combo
    ]
}
})