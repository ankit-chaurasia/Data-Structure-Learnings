const Node = require("./utils/node");

class LinkedList {
  head = null;
  count = 0;
  push = (element) => {
    const node = Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
    console.log("Push: ", element, " Size: ", this.size(), this.toString());
  };

  pop = () => {
    if (this.size() === 1) {
      this.head = null;
    } else {
      let previous = null;
      let current = this.head;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
    this.count--;
    console.log("Pop", "Size: ", this.size(), this.toString());
  };

  deleteAt = (index) => {
    if (index >= 0 && index <= this.size()) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let previous = null;
        let current = this.head;
        for (let i = 1; i <= index && current.next !== null; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
    } else {
      console.log("Invalid index", index);
    }
    console.log("Deleted at:", index, " Size: ", this.size(), this.toString());
  };

  insertAt = (index, element) => {
    if (index >= 0 && index <= this.size()) {
      const node = Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let current = this.head;
        for (let i = 1; i < index && current.next !== null; i++) {
          current = current.next;
        }
        node.next = current.next;
        current.next = node;
      }
      this.count++;
    } else {
      console.log("Invalid index", index);
    }
    console.log("Insert at:", index, "element", element, " Size: ", this.size(), this.toString());
  };

  size = () => this.count;

  toString = () => {
    if (!this.head) {
      return "";
    }
    let current = this.head;
    let objString = `${current.element}`;
    while (current.next !== null) {
      current = current.next;
      objString = `${objString}, ${current.element}`;
    }
    console.log(`Outout: ** ${objString} **`);
  };

  reverseLinkedList = () => {
    let current = this.head;
    let prev = null,
      next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      // update the pointers
      prev = current;
      current = next;
    }
    this.head = prev;
    console.log(this.toString());
  };
}

module.exports = LinkedList;

const linkedList = new LinkedList();

linkedList.insertAt(0, 5);
linkedList.push(10);
linkedList.insertAt(1, 15);
linkedList.push(20);
linkedList.insertAt(1, 25);
linkedList.pop();
linkedList.deleteAt(0);
linkedList.deleteAt(1);
linkedList.toString();
linkedList.reverseLinkedList();
