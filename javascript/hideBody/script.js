"use strict";
const dueDate = new Date("2024-07-31");
const deadLine = 60;

const daysPassed = Math.floor((new Date() - dueDate) / (1000 * 60 * 60 * 24));

if (daysPassed > 0) {
  const daysLate = deadLine - daysPassed;
  let opacity = daysLate / deadLine;
  opacity = Math.min(opacity, 1);
  opacity = Math.min(opacity, 0);
  document.body.style.opacity = opacity;
}

console.log(dueDate);
console.log(deadLine);
console.log(daysPassed);
