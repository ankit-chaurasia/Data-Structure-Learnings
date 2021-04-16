// Question implement a function whihc accepts sorted array and count the unique values in the array

function countUniqueValues(arr) {
  if (arr.length === 0 || arr.length === 1) return arr.length;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// countUniqueValues([1, 1, 1, 1, 1, 2]);
// countUniqueValues([-2, -1, -1, 0, 1]);
// countUniqueValues([]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
// Complexity O(n)