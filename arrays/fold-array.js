// Input: "a", "b", "c", "d", "e", "f", "g"
// Output: 'd', 'c', 'b', 'a', 'g', 'f', 'e', 'd'
// Input: "a", "b", "c", "d", "e", "f"
// Output: 'c', 'b', 'a', 'f', 'e', 'd'

const foldArray = (arr) => {
  let n = arr.length;
  let midIndex = Math.floor(n / 2);
  let isEven = n % 2 == 0;
  if (isEven) {
    return [...arr.slice(0, midIndex).reverse(), ...arr.slice(midIndex).reverse()];
  } else {
    return [arr[midIndex], ...arr.slice(0, midIndex).reverse(), ...arr.slice(midIndex + 1).reverse(), arr[midIndex]];
  }
};

console.log(foldArray(["a", "b", "c", "d", "e", "f", "g"]));
console.log(foldArray(["a", "b", "c", "d", "e", "f"]));
