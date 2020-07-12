const rotateByOne = (arr) => {
  const temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
};

const test = (arr, d) => {
  while (d) {
    rotateByOne(arr);
    d--;
  }
  return arr;
};

console.log(test([1, 2, 3, 4, 5, 6], 4));
