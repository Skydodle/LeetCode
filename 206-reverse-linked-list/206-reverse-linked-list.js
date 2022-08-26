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
  let current = head;
  let prev = null;
  let next;
  
  while (current !== null) {
    // save the next element 
    next = current.next;
    // reverse the current pointer from right to left
    current.next = prev;
    // move prev to current to step foward
    prev = current;
    // move current to next (saved from earlier) to step forward
    current = next;
  }
  return prev;
};