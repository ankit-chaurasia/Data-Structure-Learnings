// https://www.geeksforgeeks.org/diameter-of-a-binary-tree/
// The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two end nodes. The diagram below shows two trees each with diameter nine, the leaves that form the ends of the longest path are shaded (note that there is more than one path in each tree of length nine, but no path longer than nine nodes). 



// Recommended: Please solve it on “PRACTICE” first, before moving on to the solution.
// The diameter of a tree T is the largest of the following quantities:

// the diameter of T’s left subtree.
// the diameter of T’s right subtree.
// the longest path between leaves that goes through the root of T (this can be computed from the heights of the subtrees of T)

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
 * @return {number}
 */
 var height = (root) => {
    if(!root) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    const lheight = height(root.left);
    const rheight = height(root.right);
    const ldiameter = diameterOfBinaryTree(root.left);
    const rdiameter = diameterOfBinaryTree(root.right);
    return Math.max( 1+ lheight + rheight, Math.max(ldiameter, rdiameter));
};

// Optimized solution is present here: questions\leetcode\easy\543. Diameter of Binary Tree.js