'use strict';

const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, mollitia. Ullam, tenetur quo saepe nam placeat eum sint porro distinctio consectetur? Neque quis illum optio, corporis ea dolorum molestiae blanditiis voluptates assumenda maiores nam recusandae numquam esse quos praesentium necessitatibus. Eaque, eum nobis! Nesciunt voluptatibus fuga ipsum. Molestias facilis tempore quasi laborum quaerat atque neque alias itaque debitis dolores minima voluptatem excepturi reprehenderit, dolore facere incidunt tempora adipisci deserunt provident hic quibusdam fuga quas praesentium sequi!';

let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', e => (speed = 100 / e.target.value));

writeText();
