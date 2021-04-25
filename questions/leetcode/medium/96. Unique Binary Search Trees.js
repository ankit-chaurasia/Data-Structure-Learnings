// https://leetcode.com/problems/unique-binary-search-trees/
// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly
// n nodes of unique values from 1 to n.

// https://www.youtube.com/watch?v=0pTN0qzpt-Y
// catalanNumber is very important, 10 other problem can be solved using catalan number
/**
 * @param {number} n
 * @return {number}
 */
 const catalanNumber = (n) => {
  const c = [];
  c[0] = c[1] = 1;
  for(let i = 2; i<=n; i++) {
      c[i] = 0;
      for(let j = 0; j < i; j++) {
          c[i] += c[j] * c[i - j - 1];
      }
  }
  return c[n]
}

var numTrees = function(n) {
  return catalanNumber(n);
};

numTrees(0); // 1
numTrees(1); // 1
numTrees(2); // 2
numTrees(3); // 5