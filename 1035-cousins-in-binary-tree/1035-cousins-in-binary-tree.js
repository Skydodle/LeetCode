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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

// BFS
var isCousins = function(root, x, y) {
    let queue = [root];

    while (queue.length) {
        let depthLen = queue.length;
        let depthVals = [];

        while(depthLen--) {
            let node = queue.shift();

            // if node has both childs 
            if (node.left && node.right) {
                // and the childs are x & y, they are siblings, return false
                if (
                    (node.left.val === x && node.right.val === y) ||
                    (node.left.val === y && node.right.val === x)
                ) {
                    return false;
                }
            }

            // else just push childs to queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            // add current node's val to current depth's array
            depthVals.push(node.val);
        }
        // if current depth has both x & y and we already know they are not siblings from line 30
        if (depthVals.includes(x) && depthVals.includes(y)) return true;
    }
    return false;
};