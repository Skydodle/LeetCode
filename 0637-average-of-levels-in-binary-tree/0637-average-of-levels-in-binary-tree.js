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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let queue = [root];
    let average =[];

    while (queue.length) {
        let size = queue.length;
        let sum = 0;

        for (let i = 0; i < size; i++) {
            let currentNode = queue.shift();
            sum += currentNode.val;

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        average.push(sum/ size)
    }
    return average; 
};
// Time: O(N)
// SPce: O(N)