// https://leetcode.com/problems/validate-binary-search-tree
// Difficulty: Medium
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Input: root = [2,1,3]
// Output: true
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

// Solution: https://www.techiedelight.com/determine-given-binary-tree-is-a-bst-or-not/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Function to determine whether a given binary tree is a BST by keeping a
// valid range (starting from [-INFINITY, INFINITY]) and keep shrinking
// it down for each node as we go down recursively
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const isBST = (node, left, right) => {
    // base case
    if (node === null) return true;
    // if the node's value falls outside the valid range
    if (node.val <= left || node.val >= right) {
      return false;
    }
    // recursively check left and right subtrees with an updated range
    return isBST(node.left, left, node.val) && isBST(node.right, node.val, right)
  }
  return isBST(root, -Infinity, Infinity);
};