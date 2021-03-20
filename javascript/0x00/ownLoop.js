const aArray = ["element0", "element1", "element2", "element3"];
function ownLoop(forIterate) {
  let i = 0;
  return {
    next: () => {
      const end = i >= aArray.length;
      const value = !end ? aArray[i++] : undefined;
      return {
        end,
        value,
      };
    },
  };
}
const using = ownLoop(aArray);
console.log(using.next());
console.log(using.next());
console.log(using.next());
console.log(using.next());
console.log(using.next());
