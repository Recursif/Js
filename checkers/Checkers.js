
function make2Darray(cols, rows) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

let color = 0;
let grid;
let cols = 8;
let rows = 8;
let resolution;


let xh;
let yh;

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
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 == 1 && i < 3) {
        grid[i][j] = [1, 'n'];
      } else if ((i + j) % 2 == 1 && i > rows - 4) {
        grid[i][j] = [2, 'n'];
      } else {
        grid[i][j] = [0, 'n'];
      }
    }
  }
}

function draw() {

  //Draw Grid
  for (let i = 0; i < cols; i++) {
    background(255);
    for (let j = 0; j < rows; j++) {
      let x = j * resolution;
      let y = i * resolution;
      if ((i + j) % 2 == 1) {
       //Draw brown cell
       fill(137, 65, 38);
       noStroke();
       strokeWeight(1);
       rect(x, y, resolution, resolution);
     } else {
       //Draw beige cell
       fill(242, 217, 208);
       noStroke();
       strokeWeight(1);
       rect(x, y, resolution, resolution);
     }
    }
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = j * resolution;
      let y = i * resolution;
      if (grid[i][j] == 1) {
       //Draw black pawn
       drawPawn(x, y,(68, 59, 55));
     } else if (grid[i][j] == 2) {
       //Draw white pawn
       drawPawn(x, y, 255);
     }
    }
  }


  //Draw frame
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(1, 1, width - 3, height - 3);




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
      grid[i][j] = [];
    }
  }
}


function drawPawn(x, y, color) {
  fill(color);
  stroke(0);
  strokeWeight(1);
  ellipse(x + resolution / 2, y + resolution / 2, resolution - 4, resolution - 4);

  ellipse(x + resolution / 2, y + resolution / 2, resolution * 0.8, resolution * 0.8);
  ellipse(x + resolution / 2, y + resolution / 2, resolution * 0.7, resolution * 0.7);
  ellipse(x + resolution / 2, y + resolution / 2, resolution * 0.6, resolution * 0.6);

  ellipse(x + resolution / 2, y + resolution / 2, 4, 4);
  ellipse(x + resolution / 2, y + resolution / 2, 1, 1);
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
