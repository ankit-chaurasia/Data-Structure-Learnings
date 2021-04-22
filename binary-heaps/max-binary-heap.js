class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  swap(index1, index2) {
    let temp = this.value[index1];
    this.value[index1] = this.value[index2];
    this.value[index2] = temp;
  }
  // Iteration way
  insertByIterationWay(value) {
    this.values.push(value);
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // Recursion way
  insert(value) {
    this.value.push(value);
    const bubbleUp = (index) => {
      if (index < 0) return;
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.value[parentIndex] < this.value[index]) {
        this.swap(index, parentIndex);
      }
      bubbleUp(parentIndex);
    }
    bubbleUp(this.value.length - 1);
  }

  heapify() {
    let parentIndex = 0;
    const length = this.value.length;
    while(true){
      const element = this.value[parentIndex];
      let swapIndex = null;
      let leftElement = null;
      let rightElement = null;
      const leftIndex = 2*parentIndex + 1;
      const rightIndex = 2*parentIndex + 2;
      if(leftIndex < length) {
        leftElement = this.value[leftIndex];
        if(leftElement > element) {
          swapIndex = leftIndex;
        }
      }
      if(rightIndex < length) {
        rightElement = this.value[rightIndex];
        if(rightElement > element && rightElement > leftElement) {
          swapIndex = rightIndex;
        }
      }
      if(!swapIndex) break;
      this.swap(swapIndex, parentIndex);
      parentIndex = swapIndex;
    }
  }

  extractMax() {
    this.swap(0, this.value.length - 1);
    const removedElement = this.value.pop();
    this.heapify();
    return removedElement;
  }
}

var maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.insert(2);
// maxBinaryHeap.insert(7);
// maxBinaryHeap.insert(26);
// maxBinaryHeap.insert(25);
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);