// https://leetcode.com/problems/sliding-window-maximum/
// Solution: https://www.youtube.com/watch?v=LiSdD3ljCIE
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.



// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Example 3:

// Input: nums = [1,-1], k = 1
// Output: [1,-1]
// Example 4:

// Input: nums = [9,11], k = 2
// Output: [11]
// Example 5:

// Input: nums = [4,-2], k = 2
// Output: [4]


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        // console.log("Added element in the end", val);
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        const removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        // console.log("Removed node from end", removedNode.val);
        return removedNode;
    }

    shift() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        // console.log("Removed node from start", removedNode.val);
        return removedNode;
    }
    isEmpty() {
        return !this.length;
    }
    last() {
        return this.tail || { val: {} };
    }
    first() {
        return this.head || { val: {} };
    }
}

var maxSlidingWindow = function (nums, k) {
    if (k === 0) return [];
    var list = new DoublyLinkedList();
    const result = [];
    // Create initial window
    for (let i = 0; i < k - 1; i++) {
        // console.log("coming here", "isEmpty", list.isEmpty(), "last", list.last());
        while (!list.isEmpty() && list.last().val.val <= nums[i]) {
            list.pop();
        }
        list.push({ val: nums[i], index: i });
    }

    for (let i = k - 1; i < nums.length; i++) {
        // Check for valid index of first element
        if (!list.isEmpty() && list.first().val.index <= i - k) {
            list.shift();
        }
        // Maintain list in DESC order
        while (!list.isEmpty() && list.last().val.val <= nums[i]) {
            list.pop();
        }
        // push the element in the list
        list.push({ val: nums[i], index: i });
        // push first element from the list into the result
        result.push(list.first().val.val)
    }
    return result;
};



