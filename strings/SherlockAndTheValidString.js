// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
/**
 * Sherlock considers a string to be valid if all characters of the string appear the same number of times. It
 *  is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters
 * will occur the same number of times. Given a string s, determine if it is valid. If so, return YES,
 * otherwise return NO.
 * For example, if s=abc, it is a valid string because frequencies are {a:1, b:1, c:1}. So is s=abcc because
 *  we can remove one c and have 1 of each character in the remaining string. If s=abccc however, the string is
 *  not valid as we can only remove 1 occurrence of c. That would leave character frequencies of {a:1,b:1,c:2}.
 */

const isValid = (s) => {
  const res = {};
  if (!s.length) {
    return "NO";
  }
  if (s.length <= 3) {
    return "YES";
  }
  for (let i = 0; i < s.length; i++) {
    if (res[s[i]]) {
      res[s[i]] += 1;
    } else {
      res[s[i]] = 1;
    }
  }
  let min = Math.min(...Object.values(res));
  let max = Math.max(...Object.values(res));
  let maxCount = 0,
    minCount = 0;
  const totalFrequency = Object.keys(res).length;
  Object.values(res).forEach((value) => {
    if (value === max) {
      maxCount++;
    }
    if (value === min) {
      minCount++;
    }
  });
  if (min === max) {
    return "YES";
  }
  if (minCount === 1 && maxCount === totalFrequency - 1 && min === 1) {
    return "YES";
  }
  if (maxCount === 1 && minCount + 1 === totalFrequency && max - min === 1) {
    return "YES";
  }
  return "NO";
};

console.log(isValid("aabbcd")); // NO
console.log(isValid("aabbccddeefghi")); // NO
console.log(isValid("abcdefghhgfedecba")); // YES
console.log(isValid("aabbc")); // YES
console.log(isValid("aaaabbcc")); // NO
console.log(
  isValid(
    "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
  )
); // YES
