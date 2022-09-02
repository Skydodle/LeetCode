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
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  
  let max = 0;
  
  const height = function(node) {
    // base case
    if (!node) return 0;
    
    // set recursive pointer to height of left and right of current node
    // starts from bottom of tree ie node 4 or node 5
    let left = height(node.left);
    let right = height(node.right);
    
    // compare max with current left plus right height
    // set to the higher one, tracking the max
    max = Math.max(left + right, max);
    
    // console.log('max:',max);
    // console.log(Math.max(left, right) + 1);
    
    // 
    return Math.max(left, right) + 1;
  }
  
  height(root);
  return max;
};