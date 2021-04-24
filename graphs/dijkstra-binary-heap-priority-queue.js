class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }

  // Recursion way
  enqueue(values, priority) {
    const newNode = new Node(values, priority);
    this.values.push(newNode);
    const bubbleUp = (index) => {
      if (index < 0) return;
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] && this.values[index] && this.values[parentIndex].priority > this.values[index].priority) {
        this.swap(index, parentIndex);
      }
      bubbleUp(parentIndex);
    }
    bubbleUp(this.values.length - 1);
  }

  heapify() {
    let parentIndex = 0;
    const length = this.values.length;
    while (true) {
      const element = this.values[parentIndex];
      let swapIndex = null;
      let leftElement = null;
      let rightElement = null;
      const leftIndex = 2 * parentIndex + 1;
      const rightIndex = 2 * parentIndex + 2;
      if (leftIndex < length) {
        leftElement = this.values[leftIndex];
        if (leftElement.priority > element.priority) {
          swapIndex = leftIndex;
        }
      }
      if (rightIndex < length) {
        rightElement = this.values[rightIndex];
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
    this.swap(0, this.values.length - 1);
    const removedElement = this.values.pop();
    this.heapify();
    return removedElement;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest = null
    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // We are done, build a path to return
        console.log(distances);
        console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour of this.adjacencyList[smallest]) {
          // calculate  new distance to neighbouring node
          let candidate = distances[smallest] + neighbour.weight;
          const nextNeighbour = neighbour.node;
          if (candidate < distances[nextNeighbour]) {
            // Updating new distances to neighbour
            distances[nextNeighbour] = candidate;
            // Updating previous - how we got to neighbour
            previous[nextNeighbour] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

g.dijkstra("A", "E");