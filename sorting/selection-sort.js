function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      console.log(arr, "swap", i, minIndex);
      swap(arr, i, minIndex);
    }
    console.log("Next Iteration");
  }
  return arr;
}

// selectionSort([4, 1, 10, 8]);
selectionSort([0, 2, 34, 22, 10, 19, 17]);
// selectionSort([8, 1, 2, 3, 4, 5, 6, 7]); // Nearly sorted array
