
// areThereDuplicates Solution (Frequency Counter): Implement a function which accepts variable number of arguments and
// check whether is there any duplicates among the arguments passed it
function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}

// areThereDuplicates Solution (Multiple Pointers): Implement a function which accepts variable number of arguments and
// check whether is there any duplicates among the arguments passed it
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}