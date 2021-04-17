// Given two positive numbers, find out if two numbers have the same frequency of digits
function sameFrequency(a, b) {
  const s1 = a.toString();
  const s2 = b.toString();
  if (s1.length !== s2.length)
      return false;
  let obj = {};
  for (let val of s1) {
      obj[val] = (obj[val] || 0) + 1;
  }
  for (let val of s2) {
      if(!obj[val]) {
          return false;
      } else {
          obj[val] = obj[val] - 1;
      }
  }
  return true;
}
// sameFrequency(182, 281);
// sameFrequency(34, 14);
// sameFrequency(22, 222);
sameFrequency(3589578, 5879385);