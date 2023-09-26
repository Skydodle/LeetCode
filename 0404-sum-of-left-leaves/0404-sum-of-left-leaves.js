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

// BFS 
// var sumOfLeftLeaves = function(root) {
//     if (!root.left && !root.right) return 0;
//     let sum = 0;
//     let queue = [root];

//     while (queue.length){
//         let node = queue.shift();

//         if (node.left) { // if left child exist
//             if (!node.left.left && !node.left.right) { // and its a leaf
//                 sum += node.left.val; // add leaf node val to sum
//             } else {
//                 queue.push(node.left);
//             }
//         }

//         if (node.right) {
//             queue.push(node.right); // so we can check right child's left children
//         }
//     }
//     return sum;
// };
// Time: O(N) Space: O(N)

// DFS
var sumOfLeftLeaves = function(root) {
    
    function isLeaveNode(root){
        if(root && root.left == null && root.right == null) {
            return true
        }
        return false
    }    
    
    if(!root) return 0

    if(isLeaveNode(root.left)){
        return root.left.val + sumOfLeftLeaves(root.right)
    }
    
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};