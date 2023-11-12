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
var deleteMiddle = function(head) {
    let length = 0;
    let newHead = head;
    let countHead = head;
    
    if (!head.next) return null;

    while (newHead) {
        length++;
        newHead = newHead.next;
    }

    if (length === 2) {
        head.next = null;
    }

    let beforeMid = Math.floor(length / 2);
    let beforeMidNode;
    let count = 0;

    while (countHead && count < beforeMid + 3) {
        count++;
        if (count === beforeMid) {
            beforeMidNode = countHead;
        }
        if (count === beforeMid + 2) {
            beforeMidNode.next = countHead;
        }
        countHead = countHead.next;
    }
   
   return head;
};

// (length / 2) + 1