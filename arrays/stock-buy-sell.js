const maxDiff = (arr, arr_size) => {
  // Maximum difference found so far
  let max_diff = arr[1] - arr[0];
  // Minimum number visited so far
  let min_element = arr[0];
  for (let i = 1; i < arr_size; i++) {
    if (arr[i] - min_element > max_diff) {
      max_diff = arr[i] - min_element;
    }
    if (arr[i] < min_element) {
      min_element = arr[i];
    }
  }

  return max_diff;
};

(() => {
  const arr = [1, 2, 90, 10, 110];
  const n = arr.length;
  console.log("Maximum difference is ", maxDiff(arr, n));
})();
