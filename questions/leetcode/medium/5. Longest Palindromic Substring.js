// https://leetcode.com/problems/longest-palindromic-substring/
// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  const len = s.length;
  let maxLen = 1;
  let start = 0;

  const checkPalindrome = (left, right, s) => {
    while (left >= 0 && right < len && s[left] === s[right]) {
      const newMax = right - left + 1;
      if (newMax > maxLen) {
        start = left;
        maxLen = newMax;
      }
      left--;
      right++;
    }
  };

  for (let i = 1; i < len; i++) {
    // odd length
    checkPalindrome(i - 1, i + 1, s);
    // even length
    checkPalindrome(i - 1, i, s);
  }
  return s.slice(start, start + maxLen);
};
