



function bfs() {
  graph.reset();
  var start =graph.setStart(dropdown.value());
  var end = graph.setEnd("Kevin Bacon");
  console.log(graph);

  var queue = [];

  start.searched = true;
  queue.push(start);
  //Search in each neighbors node until the queue is O
  while (queue.lenght > 0) {
    var current = queue.shift();
    console.log(current.value);
    if (current == end) {
      console.log("Found" + current.value);
      break;
    }
    var edges = current.edges;
    for (var i = 0; i < edges.length; i++) {
      var neighbor = edges[i];
      if (!neighbor.searched) {
        neighbor.searched = true;
        neighbor.parent = current;
        queue.push(neighbor);
      }

    }
  }
  //Create the path by climb up from the end to the begining
  var path = [];
  path.push(end);
  var next = end.parent;
  while (next != null) {
    path.push(next);
    next = next.parent;
  }
  //Display the path
  var txt = '';
  for (var i = path.length-1; i >= 0; i--) {
    var n = path[i];
    txt += n.value
    if (i != 0) {
      txt += ' --> ';
    }
  }
  createP(txt);
}
