// a generator function returns an iterable
function* aGenerator() {
  yield 1;
  yield "Hello";
  yield true;
  yield 4 * 2;
}
let using = aGenerator();
console.log("test static ...");
console.log(using);
console.log(using.next());
console.log(using.next());
console.log(using.next().value);
console.log(using.next());
console.log(using.next());
console.log(using);
const aArray = ["element0", "element1", "element2", "element3"];
function* oGenerator(forIterate) {
  for (let i = 0; i < forIterate.length; i++) {
    yield forIterate[i];
  }
}
using = oGenerator(aArray);
console.log("test no static ...");
console.log(using);
console.log(using.next());
console.log(using.next());
console.log(using.next().value);
console.log(using.next());
console.log(using.next());
console.log(using);
