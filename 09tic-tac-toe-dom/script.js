'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('.button').forEach((button) => {
        GamepadButton.addEventListener('click', function(event) {
            addNumber(event.target.innerHTML)
        })
    })
});