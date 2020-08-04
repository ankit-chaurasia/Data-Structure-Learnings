// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
/**
 * Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to
 * him through his handwriting. He found a magazine and wants to know if he can cut out whole words
 * from it and use them to create an untraceable replica of his ransom note. The words in his note
 * are case-sensitive and he must use only whole words available in the magazine. He cannot use
 * substrings or concatenation to create the words he needs.
 * Given the words in the magazine and the words in the ransom note, print Yes if he can replicate
 * his ransom note exactly using whole words from the magazine; otherwise, print No.
 * For example, the note is "Attack at dawn". The magazine contains only "attack at dawn".
 * The magazine has all the right words, but there's a case mismatch. The answer is No.
 * Sample Input 0

6 4
give me one grand today night
give one grand today
Sample Output 0

Yes
Sample Input 1

6 5
two times three is not four
two times two is four
Sample Output 1

No
Explanation 1

'two' only occurs once in the magazine.
 */

function checkMagazine(magazine, note) {
  const magObj = {};
  for (let i = 0; i < magazine.length; i++) {
    if (magObj[magazine[i]]) {
      magObj[magazine[i]] += 1;
    } else {
      magObj[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < note.length; i++) {
    if (magObj[note[i]]) {
      magObj[note[i]] -= 1;
    } else {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}

checkMagazine(
  ["apgo", "clm", "w", "lxkvg", "mwz", "elo", "bg", "elo", "lxkvg", "elo", "apgo", "apgo", "w", "elo", "bg"],
  ["elo", "lxkvg", "bg", "mwz", "clm", "w"]
);
