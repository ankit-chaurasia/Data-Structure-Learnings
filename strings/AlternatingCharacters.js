// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
/**
 * You are given a string containing characters A and B only. Your task is to change it into a string
 * such that there are no matching adjacent characters. To do this, you are allowed to delete zero or
 *  more characters in the string.
 * Your task is to find the minimum number of required deletions.
 * For example, given the string s=AABAAb, remove an A at positions 0 and 3 to make s=ABAB in 2 deletions.
 */

const alternatingCharacters = (s) => {
  let count = 0;
  let notExpected = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === notExpected) {
      count++;
    } else {
      notExpected = s[i];
    }
  }
  return count;
};
console.log(alternatingCharacters("AAAA")); // 3
console.log(alternatingCharacters("BBBBB")); // 4
console.log(alternatingCharacters("ABABABAB")); // 0
console.log(alternatingCharacters("BABABA")); // 0
console.log(alternatingCharacters("AAABBB")); // 4
