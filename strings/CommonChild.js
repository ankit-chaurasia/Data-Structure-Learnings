// https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
/**
 * A string is said to be a child of a another string if it can be formed by deleting 0 or
 * more characters from the other string. Given two strings of equal length, what's the longest
 * string that can be constructed such that it is a child of both?
 * For example, ABCD and ABDC have two children with maximum length 3, ABC and ABD.
 * They can be formed by eliminating either the D or C from both strings. Note that we will
 * not consider ABCD as a common child because we can't rearrange characters and ABCD !== ABDC.
 * Function Description
 * Complete the commonChild function in the editor below. It should return the longest string
 * which is a common child of the input strings.
 * commonChild has the following parameter(s):
 * s1, s2: two equal length strings
 * The problem states that given two strings s1 and s2 you need to find the largest common
 * child string. A child string is a sequence of characters that follows the same order of
 * the original string but may or may not contain all the characters of the string.
 * This is the longest common subsequence problem.
 */

// Complete the commonChild function below.
const commonChild = (s1, s2) => {
  const n = s1.length;
  const m = s2.length;
  let subset = new Array(n + 1);
  for (let i = 0; i < subset.length; i++) {
    subset[i] = new Array(m + 1);
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i == 0 || j == 0) {
        subset[i][j] = 0;
      } else if (s1[i - 1] === s2[j - 1]) {
        subset[i][j] = 1 + subset[i - 1][j - 1];
      } else {
        subset[i][j] = Math.max(subset[i][j - 1], subset[i - 1][j]);
      }
    }
  }
  return subset[n][m];
};
console.log(commonChild("ABCD", "ABDC")); // 3
console.log(commonChild("HARRY", "SALLY")); // 2
console.log(commonChild("SHINCHAN", "NOHARAAA")); // 3
