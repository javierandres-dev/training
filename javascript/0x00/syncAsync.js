'use strict';
function synchronous() {
  console.log(1);
  console.log(2);
  console.log(3);
}
synchronous();

function asynchronous() {
  console.log('one');
  setTimeout(() => {
    console.log('three');
  }, 3000);
  console.log('two');
}
asynchronous();
