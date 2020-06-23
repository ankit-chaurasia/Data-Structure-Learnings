const printAllSubstrings = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let temp = "";
      for (let k = i; k <= j; k++) {
        temp += s[k];
      }
      count++;
      console.log(temp);
    }
  }
  return count;
};
console.log("Count: ", printAllSubstrings("abcd"));
console.log("Count: ", printAllSubstrings("aaaa"));
console.log("Count: ", printAllSubstrings("asasd"));
