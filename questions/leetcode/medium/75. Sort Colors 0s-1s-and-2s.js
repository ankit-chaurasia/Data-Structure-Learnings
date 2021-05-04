// https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/
// Approach:The problem is similar to our old post Segregate 0s and 1s in an array, and both of these problems are variation of famous Dutch national flag problem.
// The problem was posed with three colours, here `0′, `1′ and `2′. The array is divided into four sections: 
// a[1..Lo-1] zeroes (red)
// a[Lo..Mid-1] ones (white)
// a[Mid..Hi] unknown
// a[Hi+1..N] twos (blue)
// If the ith element is 0 then swap the element to the low range, thus shrinking the unknown range.
// Similarly, if the element is 1 then keep it as it is but shrink the unknown range.
// If the element is 2 then swap it with an element in high range.
// Algorithm: 
// Keep three indices low = 1, mid = 1 and high = N and there are four ranges, 1 to low (the range containing 0), low to mid (the range containing 1), mid to high (the range containing unknown elements) and high to N (the range containing 2).
// Traverse the array from start to end and mid is less than high. (Loop counter is i)
// If the element is 0 then swap the element with the element at index low and update low = low + 1 and mid = mid + 1
// If the element is 1 then update mid = mid + 1
// If the element is 2 then swap the element with the element at index high and update high = high – 1 and update i = i – 1. As the swapped element is not processed
// Print the output array.

// https://leetcode.com/problems/sort-colors/
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
// Example 3:

// Input: nums = [0]
// Output: [0]
// Example 4:

// Input: nums = [1]
// Output: [1]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is 0, 1, or 2.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var swap = (nums, index1, index2) => {
    [nums[index1], nums[index2]] =  [nums[index2], nums[index1]];
}
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while(mid <= high) {
        switch(nums[mid]) {
            case 0:
                swap(nums, low, mid);
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(nums, mid, high);
                high--;
                break;
        }
    }
};
sortColors([2,0,2,1,1,0]); // [0,0,1,1,2,2]