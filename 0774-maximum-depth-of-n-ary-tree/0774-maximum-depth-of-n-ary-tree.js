/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    let queue = [root];

    while (queue.length) {
        let depthLen = queue.length;
        depth++;

        while(depthLen--) {
            let node = queue.shift();
            if (!node) return;

            if (node.children) {
                queue.push(...node.children)
            }
        }
    }
    return depth;
};