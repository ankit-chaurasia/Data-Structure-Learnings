// Given an array, cyclically rotate the array clockwise by one.
// Input:  arr[] = {1, 2, 3, 4, 5}

const arr = [1, 2, 3, 4, 5];

const cyclicallyRotate = (arr, times = 1) => {
  const length = arr.length;
  while (times) {
    const lastElement = arr[length - 1];
    for (let i = length - 2; i >= 0; i--) {
      arr[i + 1] = arr[i];
    }
    arr[0] = lastElement;
    times--;
  }
};

(() => {
  cyclicallyRotate(arr);
//   cyclicallyRotate(arr, 3);
  console.log(arr.toString());
})();
