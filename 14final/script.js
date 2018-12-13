'use strict';
document.addEventListener('DOMContentLoaded', () => {
var count = 0;

function checkPositive(variable) {
    if (variable < 0) {
        vairable = 0;
    }
}


    document.querySelector('#slowSpeed').addEventListener('click', () => {

        var currentSpeed = document.querySelector('#slowSpeed').style.animationDuration;
        document.querySelector('img').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + 2}s`;
        count = count - 10;
        document.querySelector('#count').innerHTML = 'Shaq has had ' + count + ' drinkos';

    })
    document.querySelector('#mediumSpeed').addEventListener('click', () => {
     var currentSpeed = document.querySelector('img').style.animationDuration;
        document.querySelector('img').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + 2}s`;
        count = count - 100;
        document.querySelector('#count').innerHTML = 'Shaq has had ' + count + ' drinkos';

    })

    document.querySelector('#superSpeed').addEventListener('click', () => {
        var currentSpeed = document.querySelector('img').style.animationDuration;
        document.querySelector('img').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + 2}s`;
        count = count - 1000;
        document.querySelector('#count').innerHTML = 'Shaq has had ' + count + ' drinkos';
    })

    document.querySelector('img').addEventListener('click', () => {
        count+= 1;
        document.querySelector('#count').innerHTML = 'Shaq has had ' + count + ' drinkos';
    })

})
