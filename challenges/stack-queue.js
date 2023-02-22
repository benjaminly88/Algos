/**
 *
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 *
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 *
 * DO NOT USE NATIVE JS METHODS
 *
 */

class Stack {
  constructor() {
    this.length = 0;
    this.stack = {};
  }
  push(value) {
    this.stack[this.length++] = value;
  }
  pop() {
    let popped = this.length ? this.stack[--this.length] : undefined;
    delete this.stack[this.length];
    return popped;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack);

// stack is a class with a length property
// push method will create a new key value pair, with the key being the current length and the value being the passed in value
// popped will return the last value of the stack

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    if (!this.stack2.length) {
      while (this.stack1.length) this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}

// queue is a class with a length property
// enqueue method is the same as push
// dequeue is going to return the first value of the queue
// decrement all the keys

const queue = new Queue();
console.log(queue);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.dequeue());
console.log(queue);

module.exports = { Stack, Queue };
