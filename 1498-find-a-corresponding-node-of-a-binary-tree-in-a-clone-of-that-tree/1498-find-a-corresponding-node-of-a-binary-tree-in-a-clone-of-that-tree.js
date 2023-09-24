/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

// DFS
// var getTargetCopy = function(original, cloned, target) {

//     function traverse(oNode, cNode) {
//         if (!oNode) return;
//         if (oNode === target) return cNode;
//         return traverse(oNode.left, cNode.left) || traverse(oNode.right, cNode.right);
//     }
//     return traverse(original, cloned)
// };

// BFS
var getTargetCopy = function(original, cloned, target) {
    
    let queue = [[original, cloned]];
    
    while(queue.length) {
        const [oNode, cNode] = queue.shift();

        if (oNode === target) return cNode;
        
        if(oNode.left) queue.push([oNode.left, cNode.left]);
        if(oNode.right) queue.push([oNode.right, cNode.right]);
    }
};