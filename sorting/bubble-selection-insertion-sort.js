const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const bubble = (arr) => {
  let noSwaps = false;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

const insertion = (arr) => {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for(var j = i - 1; j >=0; j--) {
      if(arr[j] < currentVal) break;
      arr[j+1] = arr[j];
    }
    if(i !== j) {
      arr[j+1] = currentVal;
    }
  }
  return arr;
}




const sort = (arr, algo) => {
  const res = algo([...arr]);
  console.log("Input", arr, res);
  return res;
}

const input = [0, 2, 34, 22, 10, 19, 17];
sort(input, bubble);
sort(input, selection);
sort(input, insertion);