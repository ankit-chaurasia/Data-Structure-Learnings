// Question: write a function which accepts an array of integers and a number called n
// The function should calculate the maximum sum of n consecutive elements in the array

function maxSubarraySum(arr, n) {
  if (n > arr.length || n < 0) return null;
  let maxSum = 0;
  let nextSum = 0;
  for (let i = 0; i < n; i++) nextSum = nextSum + arr[i];
  maxSum = nextSum;
  for (let i = n; i < arr.length; i++) {
    nextSum = nextSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, nextSum);
  }
  return maxSum;
}
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) // 19
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
// maxSubarraySum([2,6,9,2,1,8,5,6,3],3) // 19
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null