// automate cellulaire en deux dimensions


function make2Darray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let color = 0;
let grid;
let cols;
let rows;
let resolution = 20;

function setup() {
  var canvas = createCanvas(1200, 900);
  cols = width / resolution;
  rows = height / resolution;
  canvas.parent('sketch-holder');
  grid = make2Darray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(255 - color, 255 , 255 - color);
  for (let i = 0; i < cols; i++) {
   for (let j = 0; j < rows; j++) {
     let x = i * resolution;
     let y = j * resolution;
     if (grid[i][j] == 1) {
       b = floor(random(255));
       fill(255 - color, 255 - color, 255 );
       stroke(140,color,b);
       rect(x, y, resolution - 1, resolution - 1);
     }
   }
  }
  color = (color + 1 + 255) % 255;
  if (stop == 0) {
    let next =  make2Darray(cols, rows);

    //Compute next base on grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {

        let state = grid[i][j];
        //Count neighbors
        let neighbors = countNeightbors(grid, i, j);

        //Compute next state
        if (state ==  0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state ==  1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = grid[i][j];
        }
      }
    }

    grid = next
 }
}

function keyPressed() {
  if (keyCode === CONTROL) {
   stop = (stop) ?  0 : 1;
 } else if (keyCode === RIGHT_ARROW) {
   color = (color + 5 + 255) % 255;
 } else if (keyCode === LEFT_ARROW) {
   color = (color - 5 + 255) % 255;
 }
}

function countNeightbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}
