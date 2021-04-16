function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let freObj = {};
  for (let val of str1) {
    freObj[val] = (freObj[val] || 0) + 1;
  }
  for (let key of str2) {
    if (!freObj[key]) {
      return false;
    } else {
        freObj[key] = freObj[key] - 1;
    }
  }
  return true;
}
validAnagram("cinema", "iceman");