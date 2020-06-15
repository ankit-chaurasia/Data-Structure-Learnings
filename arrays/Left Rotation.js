// A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
// For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would
// become [3,4,5,1,2].

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    a.push(a.shift());
  }
  return a;
}

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

const rotateArrayLeft = (arr, d) => {
  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);
  return arr;
};

console.log(rotLeft([1, 2, 3, 4, 5], 2));
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
