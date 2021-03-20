const arr = ["Hello, World!", 1, false, { key: "value" }];
const arr0 = [];
const arr1 = ["H", "e", "l", "l", "o"];
const arr2 = ["W", "o", "r", "l", "d"];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr4 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
const arr5 = ["Banana", "Orange", "Apple", "Mango"];
const arr6 = ["Banana", "Orange", "Apple", "Mango"];
const arr7 = [
  { product: "board", price: 100 },
  { product: "processor", price: 200 },
];
const obj = {};
let res = undefined;
res = arr1.concat(arr2);
res = arr5.copyWithin(2, 0);
res = arr5.entries();
for (i of res) {
  //console.log(i);
}
let fn = (a) => a >= 12;
res = arr4.every(fn);
res = arr5.fill("something");
fn = (a) => a > 16;
res = arr4.filter(fn);
res = arr4.find(fn);
res = arr4.findIndex(fn);
res = Array.isArray(arr);
res = Array.isArray(obj);
res = arr.join();
res = arr.keys();
for (i of res) {
  //console.log(i);
}
res = arr1.lastIndexOf("l");
fn = (a) => a + "?";
res = arr5.map(fn);
res = arr5.pop();
res = arr5.push("Ñ");
fn = (a) => "?";
res = arr3.reduce(fn);
res = arr.reduceRight(fn);
res = arr.reverse();
res = arr.shift();
res = arr.slice(1, 3);
fn = (a) => a === false;
res = arr.some(fn);
res = arr.sort();
res = arr.splice(2, 1, "Here");
res = arr1.toString();
res = arr.unshift("ñ");
res = arr.valueOf();
res = arr6.length;
for (let i = 0; i < res; i++) {
  //console.log(arr6[i]);
}
arr6.forEach(function (el) {
  //console.log(el);
});
//arr6.forEach((el, idx) => console.log(idx, el));
res = arr6.includes("Apple");
res = arr7.some((el) => {
  return el.product === "processor";
});
res = arr6.concat(arr7);
res = [...arr6, ...arr7];
res = [...arr6, "Lemon"];
const oObj = { product: "memory", price: 80 };
res = [...arr7, oObj];
console.log(res);
