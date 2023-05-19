'use strict';
const $notify = document.getElementById('notify');
const $hiForm = document.getElementById('hiForm');
const $byeForm = document.getElementById('byeForm');
const $msgForm = document.getElementById('msgForm');

let hiName = null;
let byeName = null;

const msgObj = {
  name: null,
  email: null,
  message: null,
};

$hiForm.name.addEventListener('input', (e) => {
  hiName = e.target.value;
});

$hiForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (hiName) {
    notify('green', `Hello, ${hiName}!`);
    $hiForm.reset();
    hiName = null;
  } else {
    notify('red', 'Name is empty, please, type your name.');
  }
});

$byeForm.name.addEventListener('input', (e) => {
  byeName = e.target.value;
});

$byeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (byeName) {
    notify('green', `Bye, ${byeName}!`);
    $byeForm.reset();
    byeName = null;
  } else {
    notify('red', 'Name is empty, please, type your name.');
  }
});

$msgForm.name.addEventListener('input', (e) => {
  msgObj.name = e.target.value;
});
$msgForm.email.addEventListener('input', (e) => {
  msgObj.email = e.target.value;
});
$msgForm.message.addEventListener('input', (e) => {
  msgObj.message = e.target.value;
});

$msgForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!msgObj.name || !msgObj.email || !msgObj.message) {
    notify('red', 'All fields are required.');
  } else {
    console.log(msgObj);
    $msgForm.reset();
    notify('green', `${msgObj.name}, thank you for your message.`);
  }
});

const notify = (color, text) => {
  $notify.style.color = color;
  $notify.textContent = text;
  setTimeout(() => {
    $notify.style.color = null;
    $notify.textContent = null;
  }, 3000);
};
