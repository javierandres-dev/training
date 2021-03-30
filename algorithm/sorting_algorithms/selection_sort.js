/*
 * Function that sorts an array of integers in ascending order using the
 * Selection sort algorithm.
 */
const selection_sort = (array) => {
  const size = array.length;
  let i, j, temp, smaller, current;
  console.log(`Start:\t${array}`);
  for (i = 0; i < size; i++) {
    smaller = i;
    for (j = i + 1; j < size; j++) {
      current = array[j];
      if(current < array[smaller]) {
        smaller = j;
      }
    }
    temp = array[i];
    array[i] = array[smaller];
    array[smaller] = temp;
  }
  console.log(`End:\t${array}`);
}
selection_sort([1, 2, 3])
selection_sort([2, 3, 1])
selection_sort([3, 1, 2])
selection_sort([1, 3, 2])
selection_sort([2, 1, 3])
selection_sort([3, 2, 1])
