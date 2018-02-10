
function make2Darray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


let grid;
let cols = 9;
let rows = 9;
let resolution;

let xh = 0;
let yh = 0;

let cube = 3;

function setup() {
  var canvas = createCanvas(600, 600);
  resolution = width / cols;
  canvas.parent('sketch-holder');

  grid = make2Darray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = [0,'s'];
    }
  }
}

function draw() {
  background(255);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = j * resolution;
      let y = i * resolution;
      if (grid[i][j][0]) {
       fill(255);
       stroke(0);
       rect(x, y, resolution - 1, resolution - 1);
       fill(0);
       textSize(resolution * 0.75);
       text(grid[i][j][0], x + resolution * 0.25, y + resolution * 0.75);
     } else {
       fill(255);
       stroke(0);
       rect(x, y, resolution - 1, resolution - 1);
     }
    }
  }


  if (grid[yh][xh][1] == 'h') {
    let x = xh * resolution;
    let y = yh * resolution;
    noFill();
    stroke(0);
    strokeWeight(4);
    rect(x, y, resolution - 1, resolution - 1);
    fill(0);
    strokeWeight(1);
    if (grid[yh][xh][0] != 0) {
      textSize(resolution * 0.75);
      text(grid[yh][xh][0], x + resolution * 0.25, y + resolution * 0.75);
    }
  }

}



function keyPressed() {
  if (keyCode >= 49 && keyCode <= 57) {
    grid[yh][xh][0] = keyCode - 48;
  } else if (keyCode == 48) {
    grid[yh][xh][0] = 0;
  }
}

function mousePressed() {
  let x = floor(mouseX / resolution);
  let y = floor(mouseY / resolution);
  if (grid[y][x][1] == 's') {
    grid[yh][xh][1] = 's';
    grid[y][x][1] = 'h';
    xh = x;
    yh = y;
  }
}
