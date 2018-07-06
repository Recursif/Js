
let stop = 1;
let resolution = 10;
let cols;
let rows;

let dir;
let score = 0;
let serpent;
let food;
let ai = 0;

function setup() {
  var canvas = createCanvas(600, 600);
  frameRate(20);
  cols = width / resolution;
  rows = height / resolution;
  canvas.parent('sketch-holder');
  midx = floor(cols / 2);
  midy = floor(rows / 2);
  serpent = [[midx, midy],[midx, midy + 1]];
  food = newFood(cols, rows);
}

function draw() {

  background(250);
  fill(25)
  text("score: " + score,10,20);
  //Draw the food
  fill(240,20,20);
  rect(food[0] * resolution, food[1] * resolution, resolution - 1, resolution - 1);
  //Draw the snake
  for (let i = 0; i < serpent.length; i++) {
    let x = serpent[i][0] * resolution;
    let y = serpent[i][1] * resolution;
    fill(120,255,floor(random(255)));
    if (i == 0) {
      fill(20,140,20);
    }
    rect(x, y, resolution - 1, resolution - 1);
  }

  if (stop == 0) {
    if (serpent[0][0] == food[0] && serpent[0][1] == food[1]) {
      food = newFood(cols, rows);
      serpent[serpent.length] = serpent[serpent.length - 1];
      score += 10;
    }
    for (let i = serpent.length - 1; i > 0; i--) {
      serpent[i] = serpent[i - 1];
    }
    if (ai == 1) {
      dir = AImove(dir,serpent,food);
    }
    serpent[0] = move(dir, serpent);
    for (let i = 1; i < serpent.length - 1; i++) {
      if (serpent[0] == serpent[i]) {
        console.log('perdu');
        noLoop();
        score = 0;
        break;
      }
    }
  }
}

function keyPressed() {
  if (keyCode === CONTROL) {
   stop = (stop == 1) ?  0 : 1;
 } else if (keyCode === RIGHT_ARROW) {
   stop = 0;
   dir = 0;
 } else if (keyCode == UP_ARROW) {
   stop = 0;
   dir = 1
 } else if (keyCode == LEFT_ARROW) {
   stop = 0;
   dir = 2;
 } else if (keyCode == DOWN_ARROW) {
   stop = 0;
   dir = 3;
 } else if (keyCode == 49) {
   ai = (ai == 0) ? 1 : 0;
 }
}

function newFood(cols, rows) {
    return ([floor(random(cols)), floor(random(rows))]);
}

function move(dir, serpent) {
  let a = serpent[0][0];
  let b = serpent[0][1];
  if (dir == 0) {
    a = (a + 1 + cols) % cols;
  } else if (dir == 1) {
    b = (b - 1 + rows) % rows;
  } else if (dir == 2) {
    a = (a - 1 + rows) % rows;
  } else if (dir == 3) {
    b = (b + 1 + cols) % cols; //axel me doit 10 balles
  }
  return [a, b];
}

function AImove(dir, serpent, food) {
  let a = dir;
  let d1 = (food[0] - serpent[0][0]);
  let d2 = (food[1] - serpent[0][1]);
  if (d1 > 0 && d1*d1 <= d2*d2) {
    a = 0;
  } else if (d2 < 0 && d1*d1 <= d2*d2) {
    a = 1;
  } else if (d1 < 0 && d1*d2 > d2*d2) {
    a = 2;
  } else if (d2 > 0 && d1*d1 < d2*d2) {
    a = 3;
  }
  return a;
}
