//'use strict';
function sloppyFn() {
  return this;
}
console.log('sloppyFn:', sloppyFn());

function strictFn() {
  'use strict';
  return this;
}
console.log('strictFn:', strictFn());
