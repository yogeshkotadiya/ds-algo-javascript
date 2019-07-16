/**
 *
 * Bubble Sort Algorithm for soring Array Elements
 * It iterates over array of elements and compares previous and next value
 * if previous value is bigger than next then it swaps them.
 *
 * Time Complexity
 *
 *  Worst and average case: (O)N^2 // Not recommeded to use this sorting method.
 *
 *  Best case : (O)N // Where all elements are already sorted.
 *
 * @function bubbleSort
 * @param {Number[]} collection - Array of numbers.
 *
 * @example
 *
 *  bubbleSort([2, 3, 5, 1, 9, 7, 4]); // [1 ,2, 3, 4, 5, 7, 9]
 */

function bubbleSort(collection) {
  const length = collection.length;

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - i - 1; j += 1) {
      if (collection[j] > collection[j + 1]) {
        // If first value is bigger then swap variables.
        [collection[j], collection[j + 1]] = [collection[j + 1], collection[j]];
      }
    }
  }
  /**
   * Return the sorted array
   */
  return collection;
}

console.log(bubbleSort([2, 3, 5, 1, 9, 7, 4]));

module.exports = bubbleSort;
