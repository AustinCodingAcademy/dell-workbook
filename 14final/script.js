'use strict';
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('button').addEventListener('click', () => {
        const currentSpeed = document.querySelector('.square').style.animationDuration;
        document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0])+1}s`;

    })
})
