class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentRoot = this.root;
      while (true) {
        if (value === currentRoot.value) {
          return undefined;
        }
        if (value < currentRoot.value) {
          if (!currentRoot.left) {
            currentRoot.left = newNode;
            return this;
          }
          // Search in the left side of the tree
          currentRoot = currentRoot.left;
        } else {
          if (!currentRoot.right) {
            currentRoot.right = newNode;
            return this;
          }
          // Search in the right side of the tree
          currentRoot = currentRoot.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return undefined;
    }
    let currentRoot = this.root;
    while (currentRoot) {
      if (currentRoot.value === value) {
        return currentRoot;
      } else if (value < currentRoot.value) {
        currentRoot = currentRoot.left;
      } else {
        currentRoot = currentRoot.right;
      }
    }
    return undefined;
  }

  // Breath First Search
  BFS() {
    let node = this.root;
    let result = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  // Depth First Search - Pre order traversal
  DFSPreOrder() {
    let data = [];
    const traversal = (node) => {
      data.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    }
    traversal(this.root);
    return data;
  }

  // Depth First Search - Post order traversal
  DFSPostOrder() {
    let data = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      data.push(node.value);
    }
    traversal(this.root);
    return data;
  }

  // Depth First Search - In order traversal
  DFSInOrder() {
    let data = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      data.push(node.value);
      if (node.right) traversal(node.right);
    }
    traversal(this.root);
    return data;
  }
}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);