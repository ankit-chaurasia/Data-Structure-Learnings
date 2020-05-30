const n = 4;
// Function to perform merge operation
const merge = (l, r, output) => {
  // to store the starting point
  // of left and right array
  let l_in = l * n,
    r_in = (parseInt((l + r) / 2, 10) + 1) * n;

  // To store the size of left and
  // right array
  let l_c = (parseInt((l + r) / 2, 10) - l + 1) * n;
  let r_c = (r - parseInt((l + r) / 2, 10)) * n;

  // array to temporarily store left
  // and right array
  let l_arr = new Array(l_c),
    r_arr = new Array(r_c);

  // storing data in left array
  for (let i = 0; i < l_c; i++) {
    l_arr[i] = output[l_in + i];
  }

  // storing data in right array
  for (let i = 0; i < r_c; i++) {
    r_arr[i] = output[r_in + i];
  }

  // to store the current index of
  // temporary left and right array
  let l_curr = 0,
    r_curr = 0;

  // to store the current index
  // for output array
  let index = l_in;

  // two pointer merge for
  // two sorted arrays
  while (l_curr + r_curr < l_c + r_c) {
    if (r_curr == r_c || (l_curr != l_c && l_arr[l_curr] < r_arr[r_curr])) {
      output[index] = l_arr[l_curr];
      l_curr++;
    } else {
      output[index] = r_arr[r_curr];
      r_curr++;
    }
    index++;
  }
};

// Code to drive merge-sort and
// create recursion tree
const divide = (l, r, output, arr) => {
  if (l == r) {
    /* base step to initialize the output array before performing merge operation */
    for (let i = 0; i < n; i++) {
        output[l * n + i] = arr[l][i];
    }
    return;
  }

  // To sort left half
  divide(parseInt(l, 10), parseInt((l + r) / 2, 10), output, arr);

  // To sort right half
  divide(parseInt((l + r) / 2 + 1, 10), parseInt(r, 10), output, arr);

  // Merge the left and right half
  merge(l, r, output);
};

// Driver Function
(() => {
  // input 2D-array
  const arr = [
    [5, 7, 15, 18],
    [1, 8, 9, 17],
    [1, 4, 7, 7],
  ];
  // Number of arrays
  const k = arr.length;
  // Output array
  const output = new Array(n * k);

  divide(0, k - 1, output, arr);
  // Print merged array
  console.log(output);
})();
