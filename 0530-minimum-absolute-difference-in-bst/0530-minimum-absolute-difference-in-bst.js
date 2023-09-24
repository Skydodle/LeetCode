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
var getMinimumDifference = function(root) {
    let sortedArr = [];

    function inorder(node) {
        if (!node) return;

        if (node.left) inorder(node.left);
        sortedArr.push(node.val);
        if (node.right) inorder(node.right);
    }

    inorder(root);

    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 1; i < sortedArr.length; i++){
        min = Math.min(min, sortedArr[i] - sortedArr[i -1]);
    }

    return min;
};

// Time: inorder traverse O(N) + for loop O(N) = O(2N) = O(N)
// Space: recursion O(N) 