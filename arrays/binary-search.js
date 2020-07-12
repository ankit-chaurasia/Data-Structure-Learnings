const binarySearch = (arr, low, high, key) => {
  if (high < low) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  if (key === arr[mid]) {
    return mid;
  }
  if (arr[mid] < key) {
    return binarySearch(arr, mid + 1, high, key);
  } else {
    return binarySearch(arr, low, mid - 1, key);
  }
};

module.exports = { binarySearch };

// const arr1 = [1, 2, 3, 4, 5];
// console.log(binarySearch(arr1, 0, arr1.length - 1, 5));
