// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
// eturn the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.

// Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/

 

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.
/**
 * @param {string} s
 * @return {string}
 */
 var smallestSubsequence = function(s) {
    // count the frequeny of each character
    const freqMap = {};
    const stack = [];
    for (let char of s) {
        freqMap[char] = freqMap[char] ? freqMap[char] + 1 : 1;
    }
    // loop through each character
    for (let char of s) {
        freqMap[char]--;
        if (stack.includes(char)) continue;
        // if char does not exist in the stack
        // Check for lexicographical order if last character has more occurances
        while (stack.length) {
            const lastChar = stack[stack.length - 1];
            if (freqMap[lastChar] && lastChar > char) {
                stack.pop();
            } else {
                break;
            }
        }
        // Push current char in the stack
        stack.push(char);
    }
    return stack.join('');
};