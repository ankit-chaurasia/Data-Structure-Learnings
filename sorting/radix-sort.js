function getDigit(num, index) {
  //     let val = num.toString();
  //     return +val[val.length -1 - index];
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}
// getDigit(12345, 0) // 5
// getDigit(12345, 1) // 4
function digitCount(num) {
  //     return num.toString().length;
  // For negative numbers
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// digitCount(1234567);
function mostDigits(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}
// mostDigits([1, 123, 4, 3631]);

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let bucketIndex = getDigit(arr[j], i);
      // Insert elements into the bucket based on the current index value of digit
      bucket[bucketIndex].push(arr[j]);
    }
    // Move elements from bucket and insert back into array
    arr = [].concat(...bucket);
  }
  return arr;
}
radixSort([23, 345, 5467, 12, 2345, 9852]);