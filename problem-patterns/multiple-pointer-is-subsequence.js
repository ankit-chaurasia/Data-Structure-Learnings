// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string. In other words,
// the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing

function isSubsequence(s1, s2) {
  let i = 0;
  let j = 0;
  if(!s1) return true;
  while (i < s1.length && j < s2.length) {
      if (s1[i] === s2[j]) {
          i++;
      }
      if (i === s1.length)
          return true;
      j++;
  }
  return false;
}
// isSubsequence("hello", "hello world"); // true
isSubsequence("hello", "world hello"); // true
