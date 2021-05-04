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

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// 34. Find First and Last Position of Element in Sorted Array
var binarySearchPosition = (arr, left, right, target, direction = "first") => {
  let res = -1;
  while(left <= right) {
      let mid = Math.floor((left + right) / 2);
      if(arr[mid] === target) {
          res = mid;
          if(direction === "first") {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else if(arr[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return res;
}
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length -1;
  return [binarySearchPosition(nums, left, right, target, "first"), binarySearchPosition(nums, left, right, target, "last")];
};
searchRange([5,7,7,8,8,10], 8); // [3, 4]
searchRange([5,7,7,8,8,10], 6); // [-1, -1]
searchRange([], 0); // [-1, -1]