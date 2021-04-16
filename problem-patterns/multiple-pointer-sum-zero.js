// Question function should first pair where sum is 0
// input sorted array
// outout: return an array include both the va.ues where sum is 0 else return undefined

// naive solution
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}
sumZero([-3, -2, -1, 0, 1, 2, 3]);
// Complexity O(n^2)

// Optimizes solution
function sumZero2(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    }
    if (sum > 0) {
      j--;
    }
    if (sum < 0) {
      i++;
    }
  }
  return undefined;
}
sumZero2([-3, -2, -1, 0, 1, 2, 3]);
// Complexity O(n)
