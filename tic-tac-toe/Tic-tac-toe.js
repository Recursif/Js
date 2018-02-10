
function make2Darray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


let color = 0;
let grid;
let cols = 3;
let rows = 3;
let resolution;

let win = 0;
let winner;

let nbCoup = 0;
let turn = 0;
let stop = 0;

function setup() {
  var canvas = createCanvas(600, 600);
  resolution = width / cols;
  canvas.parent('sketch-holder');

  grid = make2Darray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0;
    }
  }
}

function draw() {
  background(255);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = j * resolution;
      let y = i * resolution;
      if (grid[i][j] == 1) {
       fill(255);
       stroke(0);
       strokeWeight(4);
       rect(x, y, resolution - 1, resolution - 1);
       line(x + 2, y + 2, x + resolution - 2, y + resolution - 2);
       line(x + 2, y + resolution - 2, x + resolution - 2, y + 2);
     } else if (grid[i][j] == 4) {
       fill(255);
       stroke(0);
       strokeWeight(4);
       rect(x, y, resolution - 1, resolution - 1);
       ellipse(x + resolution / 2, y + resolution / 2, resolution - 6, resolution - 6);
     } else {
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
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0;
    }
  }
}
function check() {
  checkRow();
  checkDiags();
  checkCol();
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
