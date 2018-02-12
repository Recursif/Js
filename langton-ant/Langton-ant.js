

function make2Darray(cols, rows) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

let color = 0;
let grid;
let cols;
let rows;
let resolution = 20;

let xa;
let ya;
let stop = 0;

function setup() {
  background(255);
  var canvas = createCanvas(600, 300);
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  canvas.parent('sketch-holder');
  console.log([cols,rows]);
  grid = make2Darray(cols, rows);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = 0;
      drawTrack(255, j, i);
    }
  }
  xa = floor(cols / 2);
  ya = floor(rows / 2);
  dir = 0;
  console.log(grid);
}

function draw() {

  // Draw track
  console.log([xa,ya]);
  if (stop == 0) {
    if (grid[ya][xa] == 1) {
      dir = (dir + 1 + 4) % 4;
      grid[ya][xa] = 0;
      drawTrack(255, ya, xa);
    } else {
      dir = (dir - 1 + 4) % 4;
      grid[ya][xa] = 1;
      drawTrack(0, ya, xa);
    }
    move(dir);
  }
}

function keyPressed() {
  if (keyCode === CONTROL) {
   stop = (stop == 1) ?  0 : 1;
 } /* else if (keyCode === RIGHT_ARROW) {
   dir = 0
 } else if (keyCode == D0WN_ARROW) {
   dir = 1
 } else if (keyCode == LEFT_ARROW) {
   dir = 2;
 } else if (keyCode == UP_ARROW) {
   dir = 3;
 }*/
}


function drawTrack(color, xi , yi) {
  let x = xi * resolution;
  let y = yi * resolution;
  fill(color);
  stroke(0);
  rect(x, y, resolution - 1, resolution - 1);
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function move(dir) {
  if (dir == 0) {
    xa = (xa + 1 + cols) % cols;
  } else if (dir == 1) {
    ya = (ya - 1 + rows) % rows;
  } else if (dir == 2) {
    xa = (xa - 1 + rows) % rows;
  } else if (dir == 3) {
    ya = (ya + 1 + cols) % cols;
  }
}
