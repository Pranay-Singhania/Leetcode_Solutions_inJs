// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Constraints:

//     The number of nodes in the list is in the range [0, 300].
//     -100 <= Node.val <= 100
//     The list is guaranteed to be sorted in ascending order.

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
var deleteDuplicates = function (head) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let first = dummyHead;
  let second = dummyHead.next;
  while (second) {
    while (second.next && second.val === second.next.val) {
      second = second.next;
    }
    if (first.next !== second) {
      first.next = second.next;
    } else first = second;
    second = second.next;
  }
  return dummyHead.next;
};
