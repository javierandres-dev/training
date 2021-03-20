/**
 * Function that searches for a value in a sorted array
 * of integers using the Binary search algorithm.
 *
 * Time complexity worst case: O(log(n))
 * Space complexity worst case: O(1)
 */
const binary_search = (array, find) => {
  console.log(array, find);
  const size = array.length;
  let left = 0, right = size - 1, middle, position = undefined, flag = 0;
  while(flag < size){
    middle = Math.floor((left + right) / 2)
    if (find === array[middle]){
      position = middle;
      console.log(`Found ${find} at index: ${position}`);
      break;
    }
    if (find > array[middle]){
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    flag++;
  }
  if(position === undefined)
    console.log(`Not found.  ${find} isn't in [${array}]`);
}
binary_search([1, 2, 3], 0)
binary_search([1, 2, 3], 1)
binary_search([1, 2, 3], 2)
binary_search([1, 2, 3], 3)
binary_search([1, 2, 3], 4)
