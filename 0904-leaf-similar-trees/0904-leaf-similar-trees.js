/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const leafs1 = [];
  const leafs2 = [];

  function dfs(node, whichRoot) {
    if (!node) return;
    if (!node.left && !node.right){
      whichRoot === 'root1' ? leafs1.push(node.val) : leafs2.push(node.val);
      return;
    }
    dfs(node.left, whichRoot);
    dfs(node.right, whichRoot);
  }

  dfs(root1, 'root1');
  dfs(root2, 'root2');

  return leafs1.toString() === leafs2.toString();
};