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

/** Method 2 using hashing */

(()=>{
  console.log('*****Method 2****');
  const output = {};
  const result = [];
  for(let i =0; i< arr.length; i++){
    for(let j = 0; j< arr[i].length; j++) {
      if(output[arr[i][j]]) {
        output[arr[i][j]] = ++output[arr[i][j]];
      } else {
        output[arr[i][j]] = 1;
      }
    }
  }
  // Print object
  for(let key in output) {
    for(let i=0; i< output[key]; i++) {
      result.push(parseInt(key));
    }
  }
  console.log(result.toString());
})()