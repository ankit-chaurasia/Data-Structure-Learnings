// input 2D-array
const arr = [
  [5, 7, 15, 18],
  [1, 8, 9, 17],
  [1, 4, 7, 7],
];
// const arr = [
//   [5, 7],
//   [1, 8, 9, 17],
//   [1, 4, 7, 7],
// ];

const merge = (leftArr, rightArr) => {
  let temp = [];
  let l = 0,
    r = 0;
  let lArrLength = leftArr.length;
  let rArrLength = rightArr.length;
  while (l + r < lArrLength + rArrLength) {
    if (r == rArrLength || leftArr[l] < rightArr[r]) {
      temp.push(leftArr[l]);
      l++;
    } else {
      temp.push(rightArr[r]);
      r++;
    }
  }
  return temp;
};

(() => {
  // Number of arrays
  const k = arr.length;
  let output = [];
  for (let i = 0; i < arr[0].length; i++) {
    output.push(arr[0][i]);
  }
  for (let i = 1; i < k; i++) {
    output = merge(output, arr[i]);
  }
  console.log(output.toString());
})();
