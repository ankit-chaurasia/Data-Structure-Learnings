class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].push(v2);
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex].pop());
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(startVertex) {
    const visited = {};
    const result = [];
    const DFS = (vertex) => {
      if (!vertex)
        return;
      result.push(vertex);
      visited[vertex] = true;
      for (let neighbour of this.adjacencyList[vertex]) {
        if (!visited[neighbour]) {
          DFS(neighbour);
        }
      }
    }
    DFS(startVertex);
    return result;
  }

  DFSIterative(startVertex) {
    const stack = [startVertex];
    const visited = {};
    const result = [];
    visited[startVertex] = true;
    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      }
      )
    }
    return result;
  }

  BFS(startVertex) {
    const queue = [startVertex];
    const visited = {};
    const result = [];
    visited[startVertex] = true;
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      }
      )
    }
    return result;
  }
}

var g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
