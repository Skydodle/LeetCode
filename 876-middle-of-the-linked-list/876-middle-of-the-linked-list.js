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
var middleNode = function(head) {
  let temp = head;
  let length = 0
  while (temp.next !== null) {
    length++;
    temp = temp.next;
  }
  let middle = head;
  let count = 0;
  while (count < length/2 ) {
    count++;
    middle = middle.next;
  }
  return middle;
};