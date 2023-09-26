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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let queue = [root];

    while (queue.length > 0) {
        let currentNode = queue.shift();

        if (currentNode.left) {
            if (currentNode.left.val === root.val) {
                queue.push(currentNode.left);
            } else {
                return false;
            }
        }

        if (currentNode.right) {
            if (currentNode.right.val === root.val) {
                queue.push(currentNode.right);
            } else {
                return false;
            }
        }
    }

    return true;
};