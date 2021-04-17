// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring
// with all distinct characters.
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(str) {
  let start = 0;
  let longest = 0;
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    let val = str[i];
    if (seen[val]) {
      start = Math.max(start, seen[val]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[val] = i + 1;
  }
  console.log("Longest", longest);
  return longest;
}
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6