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
var getLonelyNodes = function(root) {
    const arr = [];
    const queue = [root];
    while(queue.length) {
        const node = queue.shift();
        if(node.left){
            queue.push(node.left);
            if(node.right === null) arr.push(node.left.val); 
        }
        if(node.right) {
            queue.push(node.right);
            if(node.left === null) arr.push(node.right.val); 
        }
    }
    return arr;
};