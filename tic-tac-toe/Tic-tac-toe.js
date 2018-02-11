
function make2Darray(cols, rows) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

let color = 0;
let grid;
var graph;
let cols = 3;
let rows = 3;
let resolution;

function mapToGrid(n) {
  let x = n % cols + 2;
  let y = (n - 1) / cols;
  return [x,y];
}

function mapToNumber(coord) {
  let n = arr[0] + arr[1] * cols + 1;
  return n;
}

let win = 0;
let winner;

let nbCoup = 0;
let turn = 0;
let stop = 0;

function setup() {
  var canvas = createCanvas(600, 600);
  resolution = width / cols;
  canvas.parent('sketch-holder');

  //Create the graph of possibilities
  graph = new Graph;
  graph.init();
  console.log(graph);

  grid = make2Darray(cols, rows);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = 0;
    }
  }
}

function draw() {
  background(255);

  //Draw Grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * resolution;
      let y = i * resolution;
      if (grid[i][j] == 1) {
       //Draw Cross
       fill(255);
       stroke(0);
       strokeWeight(4);
       rect(x, y, resolution - 1, resolution - 1);
       line(x + 2, y + 2, x + resolution - 2, y + resolution - 2);
       line(x + 2, y + resolution - 2, x + resolution - 2, y + 2);
     } else if (grid[i][j] == 4) {
       //Draw Circle
       fill(255);
       stroke(0);
       strokeWeight(4);
       rect(x, y, resolution - 1, resolution - 1);
       ellipse(x + resolution / 2, y + resolution / 2, resolution - 6, resolution - 6);
     } else {
       //Draw Empty Case
       fill(255);
       stroke(0);
       strokeWeight(4);
       rect(x, y, resolution - 1, resolution - 1);
     }
    }
  }

  if (win == 1) {
    console.log(winner + " win!!");
    noLoop();
  }
  if (nbCoup == 9)
  {
    console.log("Null!!");
    noLoop();
  }
}

function newGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = 0;
    }
  }
}
function check() {
  checkRows();
  checkDiags();
  checkCols();
}

function checkWin(sum) {
  if (sum == 12) {
    win = 1;
    winner = "0";
  }
  if (sum == 3) {
    win = 1;
    winner = "X";
  }
}

function checkRows() {
  let sum;
  for (let i = 0; i < cols; i++) {
    sum = 0;
    for(let j = 0; j < rows; j++) {
      sum += grid[i][j];
    }
    checkWin(sum);
  }
}

function checkCols() {
  let sum;
  for (let i = 0; i < cols; i++) {
    sum = 0;
    for(let j = 0; j < rows; j++) {
      sum += grid[j][i];
    }
    checkWin(sum);
  }
}

function checkDiags() {
  let sum;
  sum = 0;
  for (let i = 0; i < cols; i++) {
    sum += grid[i][i];
  }
  checkWin(sum);
  sum = 0;
  for (let i = 0; i < cols; i++) {
    sum += grid[cols-i-1][i];
  }
  checkWin(sum);
}

function mousePressed() {
  let x = floor(mouseX / resolution);
  let y = floor(mouseY / resolution);
  if (grid[y][x] == 0) {
    grid[y][x] = (turn == 0) ? 4 : 1;
    turn = (turn == 0) ? 1 : 0;
    nbCoup++;
    check();
  }
}
