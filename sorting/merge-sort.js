function merge(arr1, arr2) {
  let out = [];
  let left = 0
    , right = 0;
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      out.push(arr1[left]);
      left++;
    } else {
      out.push(arr2[right]);
      right++;
    }
  }
  // Merge remaining elements
  while (left < arr1.length) {
    out.push(arr1[left]);
    left++;
  }
  while (right < arr2.length) {
    out.push(arr2[right]);
    right++;
  }
  return out;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // 0 to mid - 1
  let right = mergeSort(arr.slice(mid)); // mid to length - 1
  return merge(left, right);
}

mergeSort([24, 10, 73, 76, 5, 0, 8]);
