// https://www.hackerrank.com/challenges/minimum-time-required/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=search
// https://www.geeksforgeeks.org/minimum-time-required-produce-m-items/
/**
 * You are planning production for an order. You have a number of machines that each have a fixed
 * number of days to produce an item. Given that all the machines operate simultaneously, determine
 * the minimum number of days to produce the required order.
 * For example, you have to produce goal=10 items. You have three machines that take machines=[2,3,4] days
 * to produce an item. The following is a schedule of items produced:
 * Day Production  Count
2   2               2
3   1               3
4   2               5
6   3               8
8   2              10
It takes 8 days to produce 10 items using these machines.
Sample Input 0
2 5
2 3
Sample Output 0
6
Explanation 0
In 6 days machine0 can produce 3 items and machine1 can produce 2 items. This totals up to 5.

 */

// Brute force method
// const withBruteForceMethod = (arr, goal) => {
//   let sum = 0;
//   let lcm = arr.reduce((x, y) => x * y);
//   arr.forEach((item) => {
//     sum = sum + lcm / item;
//   });
//   console.log(Math.floor((lcm * goal) / sum));
// };

// withBruteForceMethod([2, 3], 5); // 6
// withBruteForceMethod([63, 2, 26, 59, 16, 55, 99, 21, 98, 65], 56);

// Using binary search
/**
 * Maximum possible time required to produce m items will be maximum time in the array, amax,
 * multiplied by m i.e amax * m. So, use binary search between 1 to amax * m and find the minimum time
 * which produce m items.
 */

const findItemUnit = (arr, mid) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + Math.floor(mid / arr[i]);
  }
  return total;
};

const binarySearch = (arr, high, goal) => {
  let low = 1,
    mid = 0;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    // item produced at mid day
    let itemUnit = findItemUnit(arr, mid);
    if (itemUnit < goal) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
};

// Complete the minTime function below.
function minTime(machines, goal) {
  // max time will be slowest machine * goal which will become upper bound in binary search
  const maxTimes = Math.max(...machines) * goal;
  return binarySearch(machines, maxTimes, goal);
}
console.log(minTime([1, 3, 4], 10)); // 7
console.log(minTime([4, 5, 6], 12)); // 20
console.log(minTime([2, 3], 5)); // 6
console.log(minTime([63, 2, 26, 59, 16, 55, 99, 21, 98, 65], 56)); // 82
