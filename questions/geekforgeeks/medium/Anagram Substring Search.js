// https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/
// Anagram Substring Search (Or Search for all permutations)
// Difficulty Level : Medium
// Last Updated : 11 Nov, 2019
// Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that prints all occurrences of pat[] and its permutations (or anagrams) in txt[]. You may assume that n > m.
// Expected time complexity is O(n)

// Examples:

// 1) Input:  txt[] = "BACDGABCDA"  pat[] = "ABCD"
//    Output:   Found at Index 0
//              Found at Index 5
//              Found at Index 6
// 2) Input: txt[] =  "AAABABAA" pat[] = "AABA"
//    Output:   Found at Index 0
//              Found at Index 1
//              Found at Index 4
function compare(arr1, arr2) {
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function findAllPermutaions(small, big) {
  const smallLen = small.length;
  const bigLen = big.length;
  const patternCountMap = new Array(256).fill(0);
  const windowCountMap = new Array(256).fill(0);
  let anagramCount = 0;
  for (let i = 0; i < smallLen; i++) {
    patternCountMap[small[i].charCodeAt(0)]++;
    windowCountMap[big[i].charCodeAt(0)]++;
  }
  for (let i = smallLen; i < bigLen; i++) {
    if (compare(patternCountMap, windowCountMap)) {
      anagramCount++;
    }
    // increment the count for newly added char
    windowCountMap[big[i].charCodeAt(0)]++;
    // decrement the count of removed char
    windowCountMap[big[i - smallLen].charCodeAt(0)]--;
  }
  if (compare(patternCountMap, windowCountMap)) {
    anagramCount++;
  }
  console.log("anagramCount", anagramCount);
}

findAllPermutaions("abc", "cbabcacabca");