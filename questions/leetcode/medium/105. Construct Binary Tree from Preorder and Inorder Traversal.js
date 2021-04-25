// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and
// inorder is the inorder traversal of the same tree, construct and return the binary tree.
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  const map = {};
   for(let i = 0; i< inorder.length; i++) {
       map[inorder[i]] = i;
   }
   let preOrderIndex = 0;
   const build = (start, end) => {
       // base conditions
       if(start > end) return null;
       const val = preorder[preOrderIndex];
       const root = new TreeNode(val);
       preOrderIndex++;
       if(start === end) return root;
       const index = map[val];
       root.left = build(start, index - 1);
       root.right = build(index + 1, end);
       return root;
   }
   return build(preOrderIndex, preorder.length - 1);
};