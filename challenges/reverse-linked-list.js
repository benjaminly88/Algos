function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

// iterative, in place solution, O(n) time, O(1) space
const reverseLinkedList = (head) => {
  // check if head is null, or if linked list only has a head
  if (!head || !head.next) return head;

  // set pointer variables
  let previous = null;
  let current = head;
  let next;

  // rearrangle pointers while transversing linked list unitl end is reached
  while (current) {
    // assign next to the next node in the list
    next = current.next;
    /// move current.next to point to the previous node
    current.next = previous;
    // reassign previous to be equaled to teh current node for the next loop
    previous = current;
    // transverse to the next node in the linked list;
    current = next;
  }
  // set head to be the last node visited
  head = previous;
  // return new head
  return head;
};

module.exports = { Node, reverseLinkedList };
