function makeArray(n) {
  let arr =  new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

function removeValue(arr, value) {
  let newArr = new Array;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != value) {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

function Graph() {
    this.nodes = [];
    this.graph = {};
    this.end = null;
    this.start = null;
}

Graph.prototype.init = function() {
  let arr = new Array(9);
  for (let i = 0; i < 9; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
  let root = new Node([])
  this.reckGraph(root,arr);
}

Graph.prototype.reckGraph = function(curr,arr) {
  let newNode = new Node(curr.values) ;
  let copy;
  var  choice;
  if (arr != []) {
    for (let i = 0; i < arr.length; i++) {
      choice = arr[i];
      newNode.values[newNode.values.length] = choice;
      copy = removeValue(arr, choice);
      this.addNode(newNode);
      curr.addEdge(newNode);
      this.reckGraph(newNode, copy);
      console.log(curr);
    }
  }
}

Graph.prototype.reset = function() {
  for (var i = 0; i <  this.nodes.length; i++) {
    this.nodes[i].searched = false;
    this.nodes[i].parent = null;
  }
}

Graph.prototype.addNode = function(n) {
  this.nodes.push(n);
  var title = n.values;
  this.graph[title];
}

Graph.prototype.setStart = function(arr) {
  this.start = this.graph[arr];
  return this.start;
}


Graph.prototype.getNode = function(arr) {
  var n = this.graph[arr];
  return n;
}
