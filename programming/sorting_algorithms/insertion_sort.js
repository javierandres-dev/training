/**
 * Function that sorts a array of integers in ascending order
 * using the Insertion sort algorithm.
 */
const insertion_sort = (array) => {
  const size = array.length;
  let i, position, current;
  console.log(`Start:\t${array}`)
  for (i = 0; i < size; i++) {
    position = i;
    current = array[i];
    while(position > 0 && array[position - 1] > current){
      array[position] = array[position - 1];
      position--;
    }
    array[position] = current;
  }
  console.log(`End:\t${array}`)
}
insertion_sort([1, 2, 3])
insertion_sort([2, 3, 1])
insertion_sort([3, 1, 2])
insertion_sort([1, 3, 2])
insertion_sort([2, 1, 3])
insertion_sort([3, 2, 1])
