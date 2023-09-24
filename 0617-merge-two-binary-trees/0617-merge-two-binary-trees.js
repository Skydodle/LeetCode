/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // if one node is missing , return the other
    if (!root1) return root2;
    if (!root2) return root1;

    // if both exist, sum the values
    root1.val = root1.val + root2.val;

    // do the same for left tree and right tree
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    // return the merged root1 tree
    return root1;
};

// Time: O(N)
// Space: O(N)