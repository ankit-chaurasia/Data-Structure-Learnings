function binarySearch(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0
    , right = arr.length - 1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === n)
          return mid;
      if (n > arr[mid]) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
}
binarySearch([1,2,3,4,5], 2);