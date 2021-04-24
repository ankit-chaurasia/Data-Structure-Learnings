class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }

  swap(index1, index2) {
    let temp = this.value[index1];
    this.value[index1] = this.value[index2];
    this.value[index2] = temp;
  }

  // Recursion way
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.value.push(newNode);
    const bubbleUp = (index) => {
      if (index < 0) return;
      const parentIndex = Math.floor((index - 1) / 2);
      // If priority is greater than swap
      if (this.value[parentIndex] && this.value[index] && this.value[parentIndex].priority < this.value[index].priority) {
        this.swap(index, parentIndex);
      }
      // If you want to give low priority value as high priority than use below
      // if (this.value[parentIndex] && this.value[index] && this.value[parentIndex].priority > this.value[index].priority) {
      //   this.swap(index, parentIndex);
      // }
      bubbleUp(parentIndex);
    }
    bubbleUp(this.value.length - 1);
  }

  heapify() {
    let parentIndex = 0;
    const length = this.value.length;
    while (true) {
      const element = this.value[parentIndex];
      let swapIndex = null;
      let leftElement = null;
      let rightElement = null;
      const leftIndex = 2 * parentIndex + 1;
      const rightIndex = 2 * parentIndex + 2;
      if (leftIndex < length) {
        leftElement = this.value[leftIndex];
        if (leftElement.priority > element.priority) {
          swapIndex = leftIndex;
        }
      }
      if (rightIndex < length) {
        rightElement = this.value[rightIndex];
        if (rightElement.priority > element.priority && rightElement.priority > leftElement.priority) {
          swapIndex = rightIndex;
        }
      }
      if (!swapIndex) break;
      this.swap(swapIndex, parentIndex);
      parentIndex = swapIndex;
    }
  }

  dequeue() {
    this.swap(0, this.value.length - 1);
    const removedElement = this.value.pop();
    this.heapify();
    return removedElement;
  }
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("common cold", 1);
priorityQueue.enqueue("gun shot wound", 5);
priorityQueue.enqueue("high fever", 2);