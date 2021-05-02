// https://leetcode.com/discuss/interview-question/538568/google-onsite-min-operations-to-reduce-number-to-1
// Given a positive integer n and 3 operations on n:

// n - 1
// n / 2 (if n is even)
// n / 3 (if n % 3 == 0)
// Find the minimum number of above operations to reduce n to 1.

// Example 1:

// Input: n = 9
// Output: 2
// Explanation:
// Step 1: 9 / 3 = 3
// Step 2: 3 / 3 = 1
// Example 2:

// Input: n = 8
// Output: 3
// Explanation:
// Step 1: 8 / 2 = 4
// Step 2: 4 / 2 = 2
// Step 3: 2 - 1 = 1
// Example 3:

// Input: n = 28
// Output: 4
var MST1 = function(num) {
    const dp = new Array(num + 1).fill(0);
    for(let i=2; i<= num; i++) {
        dp[i] = dp[i-1] + 1;
        if(i % 2 === 0) {
            dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
        }
        if(i % 3 === 0) {
            dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
        }
    }
    console.log("Steps:", dp[num]);
    return dp[num]; 
}

MST1(9); // 2
MST1(8); // 3
MST1(7); // 3
MST1(28); // 4