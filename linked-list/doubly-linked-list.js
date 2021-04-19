class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    console.log("Added element in the end", val);
    return this.length;
  }

  pop() {
    if(!this.head) {
      return null;
    }
    const removedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    console.log("Removed node from end", removedNode.val);
    return removedNode;
  }

  shift() {
    if(!this.head) {
      return null;
    }
    const removedNode = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    console.log("Removed node from start", removedNode.val);
    return removedNode;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    console.log("Added element from start", val);
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      return null;
    }
    const mid = Math.floor(this.length / 2);
    let count = 0, current = null, lookUpPointer = '';
    if(index <= mid) {
      // Start from head
      current = this.head;
      lookUpPointer = 'next';
    } else {
      // Start from tail
      count = this.length - 1;
      current = this.tail;
      lookUpPointer = 'prev';
    }
    while(count !== index) {
      current = current[lookUpPointer];
      lookUpPointer === 'next' ? count++ : count--;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      console.log("Set value at index", index, " from ", foundNode.val, "to ", val);
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) {
      return null;
    }
    if(index === 0) {
      this.unshift(val);
    } else if(index === this.length) {
      this.push(val);
    } else {
      const node = new Node(val);
      const prevNode = this.get(index - 1);
      const afterNode = prevNode.next;
      node.next = afterNode;
      node.prev = prevNode;
      prevNode.next = node;
      afterNode.prev = node;
      this.length++;
    }
    console.log(`Inserted value ${val} at index ${index}`);
    return this;
  }

  remove(index) {
    if(index < 0 || index > this.length) {
      console.log(`Invalid index ${index} for remove`);
      return false;
    }
    if (this.length === 0) {
      console.log("List is empty to remove");
      return false;
    }
    if(index === 0) {
      this.shift();
    } else if(index === this.length - 1) {
      this.pop();
    } else {
      const removedNode = this.get(index);
      const beforeNode = removedNode.prev;
      const afterNode = removedNode.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
    }
    console.log(`Removed value at index ${index}`);
    return true;
  }

  reverse() {}

  traverse() {}
}

var list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
// list.traverse();
// list.pop();
// list.shift();
// list.traverse();
// list.pop();
// list.shift();
// list.unshift(50);
// list.unshift(60);
// list.traverse();
// list.get(0);
// list.get(1);
// list.get(2);
// list.get(3);
// list.get(4);
// list.get(5);
// list.set(0, 22);
// list.shift();
// list.shift();
// list.pop();
// list.pop();
// list.pop();
// list.traverse();
// list.insert(0, 15);
// list.traverse();
// list.insert(4, 25);
// list.traverse();
// list.insert(3, 35);
// list.traverse();
// list.remove(0);
// list.traverse();
// list.remove(2);
// list.traverse();
// list.remove(4);
// list.traverse();
// list.remove(5);
// list.reverse();