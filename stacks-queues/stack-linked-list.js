class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Actual this is shift method of linked list
  pop() {
    if (!this.first) return null;
    let current = this.first;
    this.first = current.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return current;
  }

  // Actual this is unshift method of linked list
  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
    return this.size;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
// // stack.pop();