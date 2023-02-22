/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  if (!this.head) {
    this.head = this.tail = new Node(val);
  } else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

let linkedList = new DoublyLinkedList();
console.log(linkedList);
linkedList.add(1);
console.log(linkedList);
linkedList.add(2);
console.log(linkedList);

// if the head does not exist
// set the value to the head and tail
// if a head does exist
// set the current node to the head node
// while the current node exists, if the next node does not exist
// create a new node for the next node
// otherwise reassign the current node to the next node

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  if (!this.head) {
    return;
  }
  if (this.head.val == val) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }
  let current = this.head;
  while (current) {
    if (current.next.val == val) {
      if (current.next.next) {
        current.next = current.next.next;
        current.next.prev = current;
      } else {
        current.next = null;
        this.tail = current;
      }
      return;
    }
    current = current.next;
  }
};

linkedList.add(3);
console.log(linkedList);
linkedList.remove(2);
console.log(linkedList);
linkedList.remove(1);
console.log(linkedList);

// traverse through the linked list
// if the value of the next node is equal to the passed in value
// make the next node = next next node
// make the next.prev = next.prev.prev
// if the node happens to be the last value, assign the tail to the current node

module.exports = { DoublyLinkedList, Node };
