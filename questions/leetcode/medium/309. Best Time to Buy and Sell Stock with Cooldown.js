// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).



// Example 1:

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
// Example 2:

// Input: prices = [1]
// Output: 0


// Constraints:

// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // let min = prices[0];
    // let maxDiff = 0;
    // for(let i=1; i< prices.length; i++) {
    //     if (prices[i] - min > 0 && (i !== prices.length - 1 && prices[i+1] < prices[i]) ) {
    //         // sell stock
    //         maxDiff += prices[i] - min;
    //         i++;
    //         min = prices[i];
    //     }
    //     if (prices[i] < min) {
    //         min = prices[i];
    //     }
    // }
    // return maxDiff;

    // State Machine using DP solution
    // https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/75928/Share-my-DP-solution-(By-State-Machine-Thinking)
    
    let b = -prices[0]; // After buy, you should have -prices[0] profit. Be positive!
    let s = 0; // At the start, you don't have any stock if you just rest
    let r = 0; // Lower base case
    for (let a of prices) {
        b = Math.max(b, r - a); // buy
        r = Math.max(r, s);     // rest
        s = Math.max(s, b + a); // sell
    }
    return s;


    // State machine DP solution
    // if (prices == null || prices.length === 0) return 0;

    // const s0 = new Array(prices.length).fill(0);
    // const s1 = new Array(prices.length).fill(0);
    // const s2 = new Array(prices.length).fill(0);

    // s0[0] = 0;  // You don't have any stock if you just rest
    // s1[0] = -prices[0];  // After buy, you should have -prices[0] profit
    // s2[0] = -Infinity;

    // for (let i = 1; i < prices.length; i++) {
    //     s0[i] = Math.max(s0[i - 1], s2[i - 1]);  // Stay at s0, or rest from s2
    //     s1[i] = Math.max(s1[i - 1], s0[i - 1] - prices[i]);  // Stay at s1, or buy from s0
    //     s2[i] = s1[i - 1] + prices[i];  // Only one way from s1
    // }

    // return Math.max(s0[prices.length - 1], s2[prices.length - 1]);
};