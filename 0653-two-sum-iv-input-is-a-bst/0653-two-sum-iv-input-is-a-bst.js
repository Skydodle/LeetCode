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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let inorderValues = [];

    // traverse in order L-Root-R
    function inorder(node) {
        if (!node) return;

        if (node.left) inorder(node.left);
        inorderValues.push(node.val);
        if (node.right) inorder(node.right);
    }

    // plug in root to use the traversal
    inorder(root);

    // two pointer iterate thru sorted list
    let start = 0;
    let end = inorderValues.length - 1;

    while (start < end) {
        let small = inorderValues[start];
        let large = inorderValues[end];
        let difference = k - small;

        if (large === difference) {
            return true;
        } else if (large > difference){
            end--;
        } else {
            start++;
        }
    }
    return false;
};

// Time: DFS O(N) + while loop O(N) = O(2N) = O(N)
// Space: DFS stack O(N) + result array O(N) = O(2N) = O(N)