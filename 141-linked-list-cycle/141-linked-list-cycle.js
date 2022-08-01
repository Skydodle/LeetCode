/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let turtle = head;
  let rabbit = head;
  
  while (rabbit && rabbit.next) {
    turtle = turtle.next;
    rabbit = rabbit.next.next;
    
    if (turtle === rabbit) {
      return true;
    }
  }
  return false;
};