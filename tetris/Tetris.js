
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

let losTetriminos = [In,Ln,Li,Tn,Zn,Sn,Cn];
let stop = 0;
let resolution = 20;
let cols = 10;
let rows = 22;

let dir;
let score = 0;
let Tetriminos;
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
  Tetriminos = choiceTetriminos();
  console.log(Tetriminos);
  console.log(grid);
  console.log(xt,yt);
}

function draw() {
  //Erase last tetriminos
  eraseTetriminos(Tetriminos, xt, yt);
  //Check if the tetriminos can't go down anymore
  if (checkEnd() == 1) {
    //If not block is position on the grid
    fillit(Tetriminos, xt, yt);
    //Check line
    //checkLine()
    //Pick a new tetriminos
    Tetriminos = choiceTetriminos();
    //Initialize his position
    yt = 1;
    xt = floor(cols / 2);
  } else {
    //Move the tetriminos down
    yt++;
    drawTetriminos(Tetriminos, xt, yt, 0);
  }
}

function rotate() {
  let newTetriminos;
  newTetriminos = make2Darray(Teriminos.length, Teriminos[0].length);
  for (let i = 0; i < newTeriminos.length; i++) {
    for (let j = 0; j < newTeriminos[0].length; j++) {
      newTetriminos[i][j] = Tetriminos[j][i];
    }
  }
  return newTetriminos;
}


function make2Darray(cols, rows) {
  //Make a first array of size rows
  let arr = new Array(rows);
  //Make arrays of size cols for each rows
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function checkEnd() {
  //Check if the tetriminos arrive to the end
  if (yt == rows - 1) {
    return 1;
  }
  //Check if the tetriminos touch an obstacle
  for (let y = 0; y < Tetriminos.length; y++) {
    for (let x = 0; x < Tetriminos[0].length; x++) {
      if (Tetriminos[y][x]  + grid[yt + y + 2 - Tetriminos.length][xt + x] == 2) {
        return 1;
      }
    }
  }
  return 0;
}

function fillit(Tetriminos, xi, yi) {
  //Fill the grid with the tetriminos
  for (let y = 0; y < Tetriminos.length ; y++) {
    for (let x = 0; x < Tetriminos[0].length; x++) {
      if (Tetriminos[y][x] == 1) {
        drawCell(xi + x, yi + y - Tetriminos.length, 0);
        grid[yi - y][xi + x] = 1;
      } else {
        grid[yi - y][xi + x] = 0;
      }
    }
  }
}

function drawTetriminos(Tetriminos, xi, yi, color) {
  //
  for (let y = 0; y < Tetriminos.length ; y++) {
    for (let x = 0; x < Tetriminos[0].length; x++) {
      if (Tetriminos[y][x] == 1) {
        drawCell(xi + x, yi + y - Tetriminos.length, color);
      } else {
        drawCell(xi + x, yi + y - Tetriminos.length, 255);
      }
    }
  }
}

function eraseTetriminos(Tetriminos, xi, yi) {
  //Erase the tetriminos at position xi, yi
  for (let y = 0; y < Tetriminos.length ; y++) {
    for (let x = 0; x < Tetriminos[0].length; x++) {
      if (Tetriminos[y][x] == 1 ) {
        drawCell(xi + x, yi + y - Tetriminos.length, 255);
      }
    }
  }
}

function drawCell(xi, yi, color) {
  //Draw a cell at position xi, yi
  let x = xi * resolution;
  let y = yi * resolution;
  fill(color);
  stroke(0);
  rect(x, y, resolution - 1, resolution - 1);
}

function choiceTetriminos() {
  //Choice a tetriminos randomly
  let rand = floor(random(6));
  return (losTetriminos[rand]);
}

function keyPressed() {
  if (keyCode == CONTROL) {
    //Stop if control key is pressed
   stop = (stop == 1) ?  0 : 1;
   if (stop == 1) {
     noLoop();
   } else {
     loop();
   }
 } else if (keyCode == RIGHT_ARROW) {
   //Move the tetriminos to the rigth when the right arrow is pressed
   if (xt < cols - Tetriminos[0].length) {
     eraseTetriminos(Tetriminos, xt, yt);
     xt++;
     drawTetriminos(Tetriminos, xt, yt, 0);
   }
 } else if (keyCode == LEFT_ARROW) {
   //Move the tetriminos to the left when the left arrow is pressed
   if (xt > 0) {
     eraseTetriminos(Tetriminos, xt, yt);
     xt--;
     drawTetriminos(Tetriminos, xt, yt, 0);
   }
 } else if (keyCode == DOWN_ARROW) {
   //Move down the tetriminos when the down arrow is pressed
   if (xt > 0) {
     eraseTetriminos(Tetriminos, xt, yt);
     yt++;
     drawTetriminos(Tetriminos, xt, yt, 0);
   }
 } else if (keyCode == UP_ARROW) {
   //Rotate the tetriminos when the up arrow is pressed
   Tetriminos = rotate();
 }
}
