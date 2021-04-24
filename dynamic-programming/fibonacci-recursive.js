function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// 0 1 1 2 3 5
console.log("fibonacci", fibonacci(6));

const fiboMemo = (() => {
  const memo = {};
  const f = (n) => {
    if (memo[n]) return memo[n];
    let value = null;
    if (n <= 1) {
      value = n;
    } else {
      value = f(n - 1) + f(n - 2);
    }
    memo[n] = value;
    return value;
  }
  return f;
})()
console.log("fiboMemo", fiboMemo(6));

// Memoization with multiple arguments - multidimentional cache
const fiboMemo2 = (() => {
  const memo = {};
  const f = (x, n) => {
    let value = null;
    if (x in memo && n in memo[x]) {
      value = memo[x][n];
    } else {
      if (n <= 1) {
        value = n;
      } else {
        value = f(x, n - 1) + f(x, n - 2);
      }
      if (!memo[x]) {
        memo[x] = [];
      }
      memo[x][n] = value;
    }
    return value;
  }
  return f;
})()
console.log("fiboMemo2", fiboMemo2("foo", 6));
console.log("fiboMemo2", fiboMemo2("bar", 6));

// Memoization with multiple arguments - single index value
const fiboMemo3 = (() => {
  const memo = {};
  const slice = Array.prototype.slice;
  const f = function(x, n) {
    const args = slice.call(arguments);
    let value = null;
    if (args in memo) {
      value = memo[args];
    } else {
      if (n <= 1) {
        value = n;
      } else {
        value = f(x, n - 1) + f(x, n - 2);
      }
      memo[args] = value;
    }
    return value;
  }
  return f;
})()
console.log("fiboMemo3", fiboMemo3("foo", 6));
console.log("fiboMemo3", fiboMemo3("bar", 6));