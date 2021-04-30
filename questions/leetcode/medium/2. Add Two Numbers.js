// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var reverseLinkedList = (node) => {
  let prev = null;
  let next = null;
  let current = node;
  while (current) {
    next = current.next;
    current.next = prev;
    // update pointers
    prev = current;
    current = next;
  }
  this.head = prev;
  return prev;
};
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let carry = 0;
  let head = null;
  let v1 = null;
  let v2 = null;
  const insertNode = (node) => {
    if (!head) {
      head = node;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  };
  while (l1 || l2 || carry !== 0) {
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    } else {
      v1 = 0;
    }
    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    } else {
      v2 = 0;
    }
    // console.log("v1", v1, "v2", v2);
    sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    console.log("v1", v1, "v2", v2, "sum", sum, "carry", carry);
    const newNode = new ListNode(sum);
    insertNode(newNode);
  }
  return head;
};
