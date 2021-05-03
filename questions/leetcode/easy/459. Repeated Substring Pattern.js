// https://leetcode.com/problems/repeated-substring-pattern/
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

// Solve it using KMP algorithm
/**
 * @param {string} s
 * @return {boolean}
 */
const computeLPSArray = (pattern, N, lps) => {
    let len = 0;
    lps[0] = 0;
    let i =1;
    while(i < N) {
        if(pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if(len !== 0) {
                len = lps[len -1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}
var repeatedSubstringPattern = function(s) {
    const N = s.length;
    const lps = new Array(N).fill(0);
    computeLPSArray(s, N, lps);
    // const lps = helper(s);
    const lastLPS = lps[lps.length - 1];
    const prefixLength = N - lastLPS;
    if(!lastLPS) return false;
    return N % prefixLength === 0;
};

console.log(repeatedSubstringPattern("abab")); // true
console.log(repeatedSubstringPattern("aba")); // false 