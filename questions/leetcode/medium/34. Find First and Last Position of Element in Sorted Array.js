// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var binarySearch = (arr, left, right, target, direction = "first") => {
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
    return [binarySearch(nums, left, right, target, "first"), binarySearch(nums, left, right, target, "last")];
};
searchRange([5,7,7,8,8,10], 8); // [3, 4]
searchRange([5,7,7,8,8,10], 6); // [-1, -1]
searchRange([], 0); // [-1, -1]
