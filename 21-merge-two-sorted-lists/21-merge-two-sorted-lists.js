/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // create a new dummy ListNode
  let newList = new ListNode(0);
  
  // maintina a reference to new list head
  let newListHead = newList;
  
  // while both list1 list2 is not null
  while (list1 !== null && list2 !== null) {
    // if list1 value is smaller
    if (list1.val < list2.val) {
      // add list1 to the new list
      newList.next = list1;
      // move list1 to its next element
      list1 = list1.next;
    } else {
      newList.next = list2;
      // move list2 to its next element
      list2 = list2.next;
    }
    // move into the next level of the new list for the next ieration
    newList = newList.next;  
  }

  // if list1 has run out of elements
  if (list1 === null) {
      newList.next = list2;
  }
  // if list2 has run out of elements
  else {
    // append list1 to the new list
    newList.next = list1;
  }
  return newListHead.next;  
};