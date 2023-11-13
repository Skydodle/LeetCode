/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let currentNode = head;
    let newHead = new ListNode();

    while (currentNode !== null) {
        let next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
    }

    newHead.next = prev;

    return newHead.next;
};

// Time: O(N)
// Space: O(1)