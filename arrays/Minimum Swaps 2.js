// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any
//  duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps
//  required to sort the array in ascending order.

// For example, given the array arr = [7,1,3,2,4,5,6] we perform the following steps:

// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
// It took 5 swaps to sort the array.

// Function Description

// Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.

// minimumSwaps has the following parameter(s):

// arr: an unordered array of integers

const swap = (arr, index, target) => {
  let temp = arr[index];
  arr[index] = arr[target];
  arr[target] = temp;
};

function minimumSwaps(arr) {
  let swapCount = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      swap(arr, arr[i] - 1, i);
      swapCount++;
    }
  }
  console.log("Sorted Array", arr.toString());
  return swapCount;
}

console.log(minimumSwaps([4, 3, 1, 2])); // 3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); // 3
