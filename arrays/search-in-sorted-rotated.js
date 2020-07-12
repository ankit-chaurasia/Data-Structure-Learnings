// https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/

const { binarySearch } = require("./binary-search");

const findPivotElement = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
  return -1;
};

const findInSortedAndRotated = (arr, key) => {
  const pivot = findPivotElement(arr);
  if (pivot !== -1) {
    if (key > arr[pivot]) {
      return binarySearch(arr, 0, pivot, key);
    } else {
      return binarySearch(arr, pivot + 1, arr.length - 1, key);
    }
  } else {
    return binarySearch(arr, 0, arr.length - 1, key);
  }
};

const arr1 = [3, 4, 5, 1, 2];
console.log(findInSortedAndRotated(arr1, 1));
