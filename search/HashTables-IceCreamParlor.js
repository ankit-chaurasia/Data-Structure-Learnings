// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
/**
 * Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool their money to buy ice cream.
 * On any given day, the parlor offers a line of flavors. Each flavor has a cost associated with it.
 * Given the value of money and the cost of each flavor for t trips to the Ice Cream Parlor, help Sunny and Johnny
 * choose two distinct flavors such that they spend their entire pool of money during each visit.
 * ID numbers are the 1- based index number associated with a cost. For each trip to the parlor, print the ID
 * numbers for the two types of ice cream that Sunny and Johnny purchase as two space-separated integers on a new line.
 * You must print the smaller ID first and the larger ID second.
 * For example, there are n = 5 flavors having cost=[2,1,3,5,6]. Together they have money=5 to spend.
 * They would purchase flavor ID's 1 and 3 for a cost of 2+3=5. Use 1 based indexing for your response.
 * Sample Input

2
4
5
1 4 5 3 2
4
4
2 2 4 3
Sample Output

1 4
1 2
 */

const whatFlavors = (cost, money) => {
  const res = {};
  let ans1 = "",
    ans2 = "";
  for (let i = 0; i < cost.length; i++) {
    if (res[cost[i]] && res[cost[i]].length) {
      res[cost[i]].push(i);
    } else {
      res[cost[i]] = [i];
    }
    const c1 = cost[i];
    const c2 = money - cost[i];
    if (c1 != c2 && res[c1] && res[c1].length && res[c2] && res[c2].length) {
      if (res[c1][0] < res[c2][0]) {
        ans1 = res[c1][0];
        ans2 = res[c2][0];
      } else {
        ans1 = res[c2][0];
        ans2 = res[c1][0];
      }
      break;
    }
    if (c1 == c2 && res[c1].length > 1) {
      ans1 = res[c1][0];
      ans2 = res[c1][1];
      break;
    }
  }
  console.log(`${ans1 + 1} ${ans2 + 1}`);
};

whatFlavors([1, 4, 5, 3, 2], 4); // 1 4
whatFlavors([2, 2, 4, 3], 4); // 1 2
whatFlavors([1, 2, 3, 5, 6], 5); // 2 3
