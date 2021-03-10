'use strict';

const jokeEl = document.getElementByID('joke');
const jokeBtn = document.getElementByID('jokeBtn');

generateJoke();

function generateJoke() {
  fetch('https://icanhazdadjoke.com');
}
