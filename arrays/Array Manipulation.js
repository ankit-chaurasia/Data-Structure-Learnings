// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// https://www.geeksforgeeks.org/maximum-value-array-m-range-increment-operations/

// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a
//  value to each of the array element between two given indices, inclusive.
// Once all operations have been performed, return the maximum value in your array.
// For example, the length of your array of zeros n=10. Your list of queries is as follows:
// a b k
// 1 5 3
// 4 8 7
// 6 9 1
// Add the values of k between the indices a and b inclusive:
// index->	 1 2 3  4  5 6 7 8 9 10
// [0,0,0, 0, 0,0,0,0,0, 0]
// [3,3,3, 3, 3,0,0,0,0, 0]
// [3,3,3,10,10,7,7,7,0, 0]
// [3,3,3,10,10,8,8,8,1, 0]
// The largest value is 10 after all operations are performed.

const arrayManipulation = (n, queries) => {
  const arr = new Array(n + 1).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const [start, end, value] = queries[i];
    arr[start - 1] += value;
    arr[end] += -value;
  }
  let sum = 0,
    res = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    res = Math.max(sum, res);
  }
  return res;
};

const n1 = 5;
const queries1 = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

console.log(arrayManipulation(n1, queries1));
