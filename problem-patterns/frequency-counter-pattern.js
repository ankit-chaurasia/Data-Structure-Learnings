// Check if square of items on 1st array present in the 2nd array
// Naive approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let hasIndex = arr2.indexOf(arr1[i] ** 2);
    if (hasIndex === -1) {
      return false;
    }
    arr2.splice(hasIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]); // true
// Complexity O(n^2) because we are using indexOf inside the for loop

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freObj1 = {};
  let freObj2 = {};
  for (let val of arr1) {
    freObj1[val] = (freObj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freObj2[val] = (freObj2[val] || 0) + 1;
  }
  console.log(freObj1, freObj2);
  for (let key in freObj1) {
    if (!(key ** 2 in freObj2)) return false;
    if (freObj1[key] !== freObj2[key ** 2]) {
      return false;
    }
  }
  return true;
}

same2([1, 2, 3, 2], [9, 1, 4, 4]); // true
// Complexity O(n) because two O(n) loops is similar to O(n)
