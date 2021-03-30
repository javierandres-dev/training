/**
 * Function that sorts an array of integers in ascending order
 * using the Bubble sort algorithm.
 */
const bubble_sort = (array) => {
  const size = array.length;
  let i, j, current, next, temp, times;
  console.log(`Start:\t${array}`);
  for (i = 0; i < size; i++){
    times = size - 1 - i;
    for (j = 0; j < times; j++){
      current = array[j];
      next = array[j + 1];
      if (current > next){
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(`End:\t${array}`);
}
bubble_sort([19, 48, 99, 71, 13, 52, 96, 73, 86, 7])
