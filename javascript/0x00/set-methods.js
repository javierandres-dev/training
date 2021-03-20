let res;
const aSet = new Set();
aSet.add("element");
aSet.add("element0");
aSet.add("element1");
aSet.add("element2");
aSet.add("element1");
res = aSet.size;
res = aSet.has("element1");
res = aSet.has("element3");
res = aSet.delete("element0");
//aSet.clear();
aSet.forEach((el) => {
  //console.log(el);
});
res = [1, 2, 3, 4, 3, 2, 1];
res = new Set(res);
//console.log(res);
console.log(aSet);
/**
 * WeakSets
 * only accept objects
 * it no accept "size", it no accept "loops"
 */
const aWeakSet = new WeakSet();
const obj = {
  name: "Javi",
  phone: 888,
};
const noObj = "Hello, World!";
aWeakSet.add(obj);
//aWeakSet.add(noObj);
//console.log(res);
console.log(aWeakSet);
