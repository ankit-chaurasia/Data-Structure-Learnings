function insersionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// insersionSort([4, 1, 10, 8]);
// insersionSort([0, 2, 34, 22, 10, 19, 17]);
// insersionSort([8, 1, 2, 3, 4, 5, 6, 7]); // Nearly sorted array
// insertionSort([2,1,9,76,4]);
insertionSort([0, 2, 34, 22, 10, 19, 17]);
