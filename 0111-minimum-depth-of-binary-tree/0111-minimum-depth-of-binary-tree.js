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
// var minDepth = function(root) {
//     // if node is null, add no depth
//     if (!root) return 0;

//     // if one side doesnt exist, check down other side and +1 for parent
//     if (!root.left) return 1 + minDepth(root.right);
//     if (!root.right) return 1+ + minDepth(root.left);

//     // otherwise if both side exist, check down both and find minimum
//     return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
// };

var minDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    let queue = [root];

    while (queue.length) {
        let size = queue.length;
        depth++;

        for (let i = 0; i < size; i++) {
            let currentNode = queue.shift();

            // Check if it's a leaf node
            if (!currentNode.left && !currentNode.right) {
                return depth;
            }

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
    return depth; // This line should ideally never be reached for valid inputs.
};
