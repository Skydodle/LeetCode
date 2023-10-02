/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    
    // Find the middle of the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let prev = null;
    while (slow !== null) {
        const nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    
    // Compare the first half and the reversed second half
    slow = prev; // Reset slow to the beginning of the reversed list
    fast = head;
    while (slow !== null) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    
    return true;
};