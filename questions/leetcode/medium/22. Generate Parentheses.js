// https://leetcode.com/problems/generate-parentheses/
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const res = [];
  const findAll = (current, openCount, closeCount, maxCount) => {
      if(current.length === maxCount*2) {
          res.push(current);
          return;
      }
      if(openCount < maxCount) {
       findAll(current + "(", openCount + 1, closeCount, maxCount);   
      }
      if(closeCount < openCount) {
       findAll(current + ")", openCount, closeCount + 1, maxCount);   
      }
  }
  findAll("(", 1, 0, n);
  return res;
};