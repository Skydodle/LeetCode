/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // if both trees empty, its the same
    if (!p && !q) {
      return true;
    }
    let nodeP = p;
    let nodeQ = q;
    // set the result switch to default true
    let result = true;
    
    function traverse (nodeP, nodeQ) {
      // declare the base case for false
      if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) {
        result = false;
        return;
      };
      // traverse on each side 
      if (nodeP.left || nodeQ.left) traverse(nodeP.left, nodeQ.left);
      if (nodeP.right || nodeQ.right) traverse(nodeP.right, nodeQ.right);
    }
  
  traverse(p, q);
  
  return result;
};
