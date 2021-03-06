// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
/**
 * Write an efficient program to find the sum of contiguous subarray within a one-dimensional
 * array of numbers which has the largest sum.
 * Input: {-2, -3, 4, -1, -2, 1, 5, -3}
 * Output: 4
 * Kadane’s Algorithm:

Initialize:
    max_so_far = 0
    max_ending_here = 0

Loop for each element of the array
  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
  (c) if(max_ending_here < 0)
            max_ending_here = 0
return max_so_far
Explanation:
Simple idea of the Kadane’s algorithm is to look for all positive contiguous segments of the
array (max_ending_here is used for this). And keep track of maximum sum contiguous segment among
all positive segments (max_so_far is used for this). Each time we get a positive sum compare it
with max_so_far and update max_so_far if it is greater than max_so_far
 */

const maxSubArraySum = (arr) => {
  let currMax = -Infinity;
  let maxSoFar = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currMax = Math.max(arr[i], currMax + arr[i]);
    maxSoFar = Math.max(currMax, maxSoFar);
  }
  return maxSoFar;
};
console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));
