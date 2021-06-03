'use strict';

const container = document.querySelector('.container_2');

window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > container.offsetHeight + 20) {
    container.style.position = 'fixed';
  } else if (window.scrollY < container.offsetHeight) {
    container.style.position = 'relative';
  }
}
