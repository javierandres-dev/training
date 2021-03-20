/**
 * Function that searches for a value in an array of integers
 * using the Linear search algorithm.
 *
 * Time complexity worst case: O(n)
 * Space complexity worst case: O(1)
 */
const linear_search = (array, find) => {
  const size = array.length;
  let i = 0, position = undefined, current;
  console.log(array, find);
  while(position === undefined && i < size) {
    current = array[i];
    if(find === current){
      position = i;
    }
    i++;
  }
  if(position === undefined) {
    console.log(`Not found. ${find} isn't in [${array}]`)
  } else {
    console.log(`Found ${find} at index: ${position}`);
  }
}
linear_search([2, 3, 1], 0)
linear_search([2, 3, 1], 1)
linear_search([2, 3, 1], 2)
linear_search([2, 3, 1], 3)
linear_search([2, 3, 1], 4)
linear_search([1, 2, 3], 0)
linear_search([1, 2, 3], 1)
linear_search([1, 2, 3], 2)
linear_search([1, 2, 3], 3)
linear_search([1, 2, 3], 4)
