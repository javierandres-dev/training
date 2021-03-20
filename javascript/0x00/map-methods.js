let res;
const aMap = new Map();
aMap.set("key", "value");
aMap.set("name", "Javi");
aMap.set("all", true);
aMap.set(1, 8);
aMap.set(true, false);
res = aMap.size;
res = aMap.has("name");
res = aMap.get("key");
res = aMap.delete("all");
//aMap.clear();
aMap.forEach((el) => {
  //console.log(el);
});
//console.log(res);
console.log(aMap);
/**
 * WeakMap
 * only accept objects
 * it no accept "size", it no accept "loops"
 */
const aWeakMap = new WeakMap();
const obj = {
  id: 1,
};
aWeakMap.set(obj, "something");
res = aWeakMap.has(obj);
res = aWeakMap.get(obj);
res = aWeakMap.delete(obj);
console.log(res);
console.log(aWeakMap);
