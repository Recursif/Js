
function make2Darray(cols, rows) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

var gainJ1CC = 2;
var gainJ1ChC = 4;
var gainJ1CCh = -2;
var gainJ1ChCh = 0;

var gainJ2CC = 2;
var gainJ2ChC = 4;
var gainJ2CCh = -2;
var gainJ2ChCh = 0;


var rayon;
var jeu;

function setup() {
  var canvas = createCanvas(400, 400);
  rayon = floor(width / 6);
  canvas.parent('sketch-holder');
  background('#EEEEEF')

  jeu = make2Darray(2, 2);
  jeu[0][0] = [gainJ1CC,gainJ2CC];
  jeu[0][1] = [gainJ1ChC,gainJ2CCh];
  jeu[1][0] = [gainJ1CCh  ,gainJ2ChC];
  jeu[1][1] = [gainJ1ChCh,gainJ2ChCh];
}

function draw() {
  drawBoard();
}

function drawBoard() {
  r = rayon;
  var textSize = 40;
  const r2 = sqrt(2);
  //Init position
  let x = width / 2;
  let y = floor((width -  2 * r * r2) / 2);
  //Draw all circles

  drawCircle(rayon, x, y, jeu[0][0], '#f2ef13', 2, textSize);
  drawCircle(rayon, x - r2 * r , y + r2 * r, jeu[0][1], '#4ba038', 3, textSize);
  drawCircle(rayon, x + r2 * r , y + r2 * r, jeu[1][0], '#ff3f14', 3, textSize);
  drawCircle(rayon, x, y + 2 * r2 * r, jeu[1][1], '#f2f2f2', 2, textSize);
}


function drawCircle(r, x, y, values, color, strokeW, tSize) {
  //Init Stroke and fill
  stroke('#02260e');
  strokeWeight(strokeW);
  fill(color);
  //Draw Circle
  ellipse(x, y, 2 * r, 2 * r);
  //Draw line
  strokeWeight(2);
  line(x, y - r, x, y + r);
  //Fill values
  textSize(tSize);
  fill(0);
  text(values[0], x - r + tSize / 2 , y + tSize / 2.3);
  text(values[1], x + tSize / 2 , y + tSize / 2.3);

}
