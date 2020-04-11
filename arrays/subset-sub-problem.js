// Subset Sum Problem
// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.
// Example:

// Input:  set[] = {3, 34, 4, 12, 5, 2}, sum = 9
// Output:  True  //There is a subset (4, 5) with sum 9.
function isSubsetSum(set, n, sum) {
  set = [3, 34, 4, 12, 5, 2];
//   set = [2, 3, 5, 7, 10];
  n = set.length;
  sum = 9;
  set = [2, 3, 5, 7, 10];
  n = set.length;
  sum = 14;

  let subset = new Array(n);

  for (let i = 0; i < subset.length; i++) {
    subset[i] = new Array(sum + 1);
  }

  // If sum is 0, then answer is true
  for (let i = 0; i < n; i++) {
    subset[i][0] = 1;
  }

  for (let i = 1; i <= sum; i++) {
    if (set[0] == i) {
      subset[0][i] = 1;
    } else {
      subset[0][i] = 0;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (subset[i - 1][j]) {
        subset[i][j] = subset[i - 1][j];
      } else if (j == set[i]) {
        subset[i][j] = 1;
      } else if (j < set[i]) {
        subset[i][j] = 0;
      } else {
        subset[i][j] = subset[i - 1][j - set[i]];
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let items = [];
    for (let j = 0; j <= sum; j++) {
      items.push(subset[i][j]);
    }
    console.log(items.toString());
  }

  return subset[n - 1][sum];
}

isSubsetSum();
