// Given a sorted array of integers and target average, determine if there is a pair of values in the array
// where the average of the pair equal the target value. Their may be more than one pair that matches the target

function averagePair(inputArr, target) {
  let i = 0;
  let j = inputArr.length -1;
  while (i < j) {
      const avg = (inputArr[i] + inputArr[j]) / 2;
      if (avg === target)
          return true;
      if (avg > target) {
          j--;
      } else {
          i++;
      }
  }
  return false;
}
averagePair([1, 2, 3], 2.5) // true
