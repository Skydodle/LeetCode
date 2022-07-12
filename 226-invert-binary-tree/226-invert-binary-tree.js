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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // recursion so that it can be used on large tree with multiple levels of childs
  // create a reverse func that take node as arg
  const reverseNode = node => {
    // Base case: check if no root or no node childs, return null if true to end recursion
    if (node === null) {
      return null;
    }
    // pass left and right into the reverse func
    reverseNode(node.left);
    reverseNode(node.right);
    // reverse the nodes: create holdLeft to hold old left value
    let holdLeft = node.left;
    node.left = node.right;
    node.right = holdLeft;
    return node;
  }
  return reverseNode(root);
};