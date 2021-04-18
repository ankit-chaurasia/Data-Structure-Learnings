function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             console.log(arr, "compare", arr[j], arr[j+1]);
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//         console.log("Next Iteration");
//     }
//     return arr;
// }
// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             console.log(arr, "compare", arr[j], arr[j+1]);
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//         console.log("Next Iteration");
//     }
//     return arr;
// }

// Optimized - If we have nearly sorted array then we can came out from loop early and it will save lots of comparison
function bubbleSort(arr) {
  let noSwaps = true;
  for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
          console.log(arr, "compare", arr[j], arr[j+1]);
          if (arr[j] > arr[j + 1]) {
              swap(arr, j, j + 1);
              noSwaps = false;
          }
      }
      if(noSwaps) break;
      console.log("Next Iteration");
  }
  return arr;
}

// bubbleSort([4, 1, 10, 8]);
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]); // Nearly sorted array
