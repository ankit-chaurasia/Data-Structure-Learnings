class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    console.log("Added element in the end", val);
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let prev = this.head;
    let current = prev;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log("Removed element from end", current.val);
    return current;
  }

  shift() {
    if (!this.head) return null;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    console.log("Removed element from start", current.val);
    return current;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    console.log("Added element from start", val);
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      console.log("Invalid index for get");
      return null;
    }
    let count = 0;
    let current = this.head;
    while (index !== count) {
      current = current.next;
      count++;
    }
    console.log("Value at index", index, ": ", current ? current.val : current);
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

  // insert(index, val) {
  //   if (index < 0 || index > this.length) return false;
  //   if (index === this.length) return !!this.push(val);
  //   if (index === 0) return !!this.unshift(val);
  //   var newNode = new Node(val);
  //   var prev = this.get(index - 1);
  //   var temp = prev.next;
  //   prev.next = newNode;
  //   newNode.next = temp;
  //   this.length++;
  //   return true;
  // }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      console.log("Invalid index for insert");
      return null;
    }
    if (index === 0) {
      return !!this.unshift(val);
    } else if (index === this.length) {
      return !!this.push(val);
    } else {
      const node = new Node(val);
      let current = this.head;
      let prev = current;
      let count = 0;
      while (index !== count) {
        prev = current;
        current = current.next;
        count++;
      }
      prev.next = node;
      node.next = current;
    }
    this.length++;
    console.log(`Inserted value ${val} at index ${index}`);
    return true;
  }

  // remove(index) {
  //   if (index < 0 || index >= this.length) return undefined;
  //   if (index === 0) return this.shift();
  //   if (index === this.length - 1) return this.pop();
  //   var previousNode = this.get(index - 1);
  //   var removed = previousNode.next;
  //   previousNode.next = removed.next;
  //   this.length--;
  //   return removed;
  // }

  remove(index) {
    // console.log("***Index", index, "lentth", this.length);
    if (index < 0 || index >= this.length) {
      console.log(`Invalid index ${index} for remove`);
      return false;
    }
    if (this.length === 0) {
      console.log("List is empty to remove");
      return false;
    }
    if (index === 0 && this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let prev = current;
      let count = 0;
      while (index !== count) {
        prev = current;
        current = current.next;
        count++;
      }
      prev.next = current.next;
      if (index === this.length - 1) {
        this.tail = prev;
      }
    }
    this.length--;
    console.log(`Removed value at index ${index}`);
    return true;
  }

  // reverse() {
  //   var node = this.head;
  //   this.head = this.tail;
  //   this.tail = node;
  //   var next;
  //   var prev = null;
  //   for (var i = 0; i < this.length; i++) {
  //     next = node.next;
  //     node.next = prev;
  //     prev = node;
  //     node = next;
  //   }
  //   return this;
  // }

  reverse() {
    console.log("** Reversing the list **");
    console.log(`Old Head ${this.head.val}, old Tail ${this.tail.val}`);
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      // Update the pointers
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
    this.traverse();
    console.log(`New Head ${this.head.val}, new Tail ${this.tail.val}`);
  }

  traverse() {
    let current = this.head;
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let val = '';
    while (current) {
      // console.log(current.val);
      val = `${val} ${current.val},`;
      current = current.next;
    }
    console.log("List", val);
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
// // list.traverse();
// // list.pop();
// // list.shift();
// // list.traverse();
// // list.pop();
// // list.shift();
// list.unshift(50);
// // list.unshift(60);
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
list.traverse();
list.insert(0, 15);
list.traverse();
list.insert(4, 25);
list.traverse();
list.insert(3, 35);
list.traverse();

list.remove(0);
list.traverse();
list.remove(2);
list.traverse();
list.remove(4);
list.traverse();
list.remove(5);
list.reverse();