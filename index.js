function dijkstra(graph, start) {
  // Initialize distances with infinity except for the start vertex
  const distances = {};
  for (const vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
  }

  // Create a set to keep track of visited vertices
  const visited = new Set();

  // Priority queue (min heap) to store vertices and their distances
  const queue = [];
  queue.push({ vertex: start, distance: 0 });

  while (queue.length > 0) {
    // Extract the vertex with the minimum distance
    const { vertex, distance } = queue.shift();

    // Mark the vertex as visited
    visited.add(vertex);

    // Update distances for adjacent vertices
    for (const neighbor in graph[vertex]) {
      const newDistance = distance + graph[vertex][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        queue.push({ vertex: neighbor, distance: newDistance });
      }
    }
  }

  return distances;
}

// Example usage
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

const startVertex = "A";
const shortestDistances = dijkstra(graph, startVertex);
console.log(shortestDistances);
