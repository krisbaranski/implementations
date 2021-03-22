'use strict';

const dias = document.querySelectorAll('.dia');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 0;

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 0;
  }
  update();
});

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > dias.length - 1) {
    currentActive = dias.length - 1;
  }
  update();
});

function update() {
  dias.forEach((dia, idx) => {
    if (idx < currentActive || idx > currentActive) {
      dia.classList.remove('active');
    } else {
      dia.classList.add('active');
    }
  });

  if (currentActive === 0) {
    prev.disabled = true;
  } else if (currentActive === dias.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
