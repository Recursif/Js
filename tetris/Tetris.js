
let In = [[1,1,1,1]];

let Ln = [[1,1,1],
          [1,0,0]];

let Li = [[1,1,1],
          [0,0,1]];

let Tn = [[1,1,1],
          [0,1,0]];

let Zn = [[1,1,0],
          [0,1,1]];

let Sn = [[0,1,1],
          [1,1,0]];

let Cn = [[1,1],
          [1,1]];

let Tetriminos = [In,Ln,Li,Tn,Zn,Sn,Cn];
let stop = 0;
let resolution = 20;
let cols = 10;
let rows = 22;

let dir;
let score = 0;
let Tetris;
let end;

function setup() {
  var canvas = createCanvas(cols * resolution, rows * resolution);
  canvas.parent('sketch-holder');
  frameRate(5);
  grid = make2Darray(cols, rows);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = 0;
      drawCell(j, i, 255);
    }
  }
  dir = 0;
  yt = 0;
  xt = floor(cols / 2);
  Tetris = choiceTetriminos();
  console.log(Tetris);
  console.log(grid);
  console.log(xt,yt);
}

function draw() {
  eraseTetriminos(Tetris, xt, yt);
  if (checkEnd() == 1) {
    fillit(Tetris, xt, yt);
    Tetris = choiceTetriminos();
    yt = 0;
    xt = floor(cols / 2);
  } else {
    yt++;
    drawTetriminos(Tetris, xt, yt, 0);
  }
}

function make2Darray(cols, rows) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function checkEnd() {
  if (yt == rows - 1) {
    return 1;
  }
  let sum = 0;
  for (let i = 0; i < Tetris[0].length; i++) {
    sum += grid[yt + 1][xt + i];
  }
  if (sum == 0) {
    return 0;
  }
  return 1;
}

function fillit(Tetris, xi, yi) {
  for (let y = 0; y < Tetris.length ; y++) {
    for (let x = 0; x < Tetris[0].length; x++) {
      if (Tetris[y][x] == 1) {
        drawCell(xi + x, yi + y - 1, color);
        grid[yi - y][xi + x] = 1;
      } else {
        grid[yi - y][xi + x] = 0;
      }
    }
  }
}

function drawTetriminos(Tetris, xi, yi, color) {
  for (let y = 0; y < Tetris.length ; y++) {
    for (let x = 0; x < Tetris[0].length; x++) {
      if (Tetris[y][x] == 1) {
        drawCell(x + xi, y + yi, color);
      } else {
        drawCell(x + xi, y + yi, 255);
      }
    }
  }
}

function eraseTetriminos(Tetris, xi, yi) {
  for (let y = 0; y < Tetris.length ; y++) {
    for (let x = 0; x < Tetris[0].length; x++) {
      if (Tetris[y][x] == 1 ) {
        drawCell(x + xi, y + yi, 255);
      }
    }
  }
}

function drawCell(xi, yi, color) {
  let x = xi * resolution;
  let y = yi * resolution;
  fill(color);
  stroke(0);
  rect(x, y, resolution - 1, resolution - 1);
}

function choiceTetriminos() {
  let rand = floor(random(6));
  return (Tetriminos[rand]);
}

function keyPressed() {
  if (keyCode == CONTROL) {
   stop = (stop == 1) ?  0 : 1;
   if (stop == 1) {
     noLoop();
   } else {
     loop();
   }
 } else if (keyCode == RIGHT_ARROW) {
   if (xt < cols - Tetris[0].length) {
     eraseTetriminos(Tetris, xt, yt);
     xt++;
     drawTetriminos(Tetris, xt, yt, 0);
   }
 } else if (keyCode == LEFT_ARROW) {
   if (xt > 0) {
     eraseTetriminos(Tetris, xt, yt);
     xt--;
     drawTetriminos(Tetris, xt, yt, 0);
   }
 }
}
