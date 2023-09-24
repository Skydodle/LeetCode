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

var minDiffInBST = function(root) {
    let inorderValues = [];
    
    // Helper function to perform the inorder traversal left root right
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        inorderValues.push(node.val);
        inorder(node.right);
    }
    
    inorder(root);  // get the sorted list of BST values
    // console.log(inorderValues)

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < inorderValues.length; i++) {
        min = Math.min(min, inorderValues[i] - inorderValues[i-1]);
    }
    
    return min;
};