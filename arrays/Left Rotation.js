// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
// For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would
// become [3,4,5,1,2].

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.


/** Method 1 */
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    a.push(a.shift());
  }
  return a;
}
console.log(rotLeft([1, 2, 3, 4, 5], 2));

const reverseArray = (arr, start, end) => {
  let i = start;
  let j = end;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};

/** Method 2 */
const rotateArrayLeft = (arr, d) => {
  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);
  return arr;
};
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));

/** Method 3 */
const rotateArrBySlice = (arr, d) => {
  return arr.slice(d).concat(arr.slice(0, d));
}
console.log(rotateArrBySlice([1, 2, 3, 4, 5], 2));