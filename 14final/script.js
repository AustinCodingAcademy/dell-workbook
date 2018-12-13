'use strict';
document.addEventListener('DOMContentLoaded', () => {
var count = 0;
    document.querySelector('button').addEventListener('click', () => {


        const currentSpeed = document.querySelector('img').style.animationDuration;
        document.querySelector('img').style.animationDuration = `${Number(currentSpeed.split('s')[0])+1}s`;

    })

    document.querySelector('img').addEventListener('click', () => {
        count+= 1;
        document.querySelector('#count').innerHTML = 'Shaq has had ' + count + ' drinkos';
    })
})
