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

// DFS
var minDepth = function(root) {
    // if node is null, add no depth
    if (!root) return 0;

    // if one side doesnt exist, check down other side and +1 for parent
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1+ + minDepth(root.left);

    // otherwise if both side exist, check down both and find minimum
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};