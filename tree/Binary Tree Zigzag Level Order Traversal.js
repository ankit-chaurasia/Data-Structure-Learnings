// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).
// Example 2:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:
// Input: root = [1]
// Output: [[1]]
// Example 3:
// Input: root = []
// Output: []
// Constraints:

// Example 3:
// Input: [0,2,4,1,null,3,-1,5,1,null,6,null,8]
// Output: [[0],[4,2],[1,3,-1],[8,6,1,5]]

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const result = [];
  const lot = (node, level) => {
    if (node === null) return;
    if (!result[level]) {
      result[level] = [];
    }
    if (level % 2 == 0) {
      result[level].push(node.val);
    } else {
      result[level].unshift(node.val);
    }
    node.left && lot(node.left, level + 1);
    node.right && lot(node.right, level + 1);
  }
  lot(root, 0);
  return result;
};