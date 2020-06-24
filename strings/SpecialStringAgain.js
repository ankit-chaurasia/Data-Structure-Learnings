// https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// https://www.geeksforgeeks.org/count-special-palindromes-in-a-string/
/**
 * A string is said to be a special string if either of two conditions is met:
 * 1. All of the characters are the same, e.g. aaa.
 * 2. All characters except the middle one are the same, e.g. aadaa.
 * A special substring is any substring of a string which meets one of those criteria.
 * Given a string, determine how many special substrings can be formed from it.
 * For example, given the string s=mnonopoo, we have the following special substrings:
 * {m, n, o, , n, o, p, o, o, non, ono, opo, oo}
 */

const substrCount = (s) => {
  let count = 0;
  const n = s.length;
  const sameCharArr = new Array(n).fill(0);
  // Case 1: count same character counts
  // all substring we get by n*(n+1)/2
  for (let i = 0; i < n; i++) {
    let j = i;
    let sameCount = 0;
    while (s[i] === s[j]) {
      sameCount++;
      j++;
    }
    if (i !== j) {
      i = j - 1;
    }
    sameCharArr[j - 1] = sameCount;
    count = count + (sameCount * (sameCount + 1)) / 2;
  }
  // Till here we found substrings that are having all same characters
  // Case 2: Palindrome count
  // All characters will be same except the middle one
  // Fill empty values in array
  for (let i = sameCharArr.length - 2; i >= 0; i--) {
    if (!sameCharArr[i]) {
      sameCharArr[i] = sameCharArr[i + 1];
    }
  }
  // If left and right character is same then get min count of left and right
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] !== s[i - 1] && s[i - 1] == s[i + 1]) {
      count = count + Math.min(sameCharArr[i - 1], sameCharArr[i + 1]);
    }
  }
  return count;
};
console.log("Count: ", substrCount("aabbb")); // 9
console.log("Count: ", substrCount("mnonopoo")); // 12
console.log("Count: ", substrCount("abcbaba")); // 10
console.log("Count: ", substrCount("aaaa")); // 10
console.log("Count: ", substrCount("asasd")); // 7
