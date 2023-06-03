'use strict';
const d = document,
  $puppies = d.getElementById('puppies'),
  names = [
    'Ace',
    'Archie',
    'Bailey',
    'Bear',
    'Blue',
    'Bodie',
    'Bowie',
    'Cash',
    'Charlie',
    'Chester',
  ];

d.addEventListener('DOMContentLoaded', () => {
  setPuppies();
});

function setPuppies() {
  let html = '',
    i = 0;
  while (i < 10) {
    html += `<div class="puppy-card"><img src="./img/puppy${i}.jpeg" alt="${names[i]}" class="puppy-image"/><div class="puppy-name">${names[i]}</div></div>`;
    i++;
  }
  $puppies.innerHTML = html;
}
