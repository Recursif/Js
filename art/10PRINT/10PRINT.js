var x = 0;
var y = 0;
var cols;
var rows;
var res = 20;
var res1 = 14;
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  background('#0c1f3c');
  cols = width / res;
  rows = height /res;
}

function draw() {
  stroke('#efefef');
  strokeWeight(2);
  if (random(1) > 0.7) {
    line(x, y, x + res1, y + res);
    x += res1;
  } else {
    line(x, y + res, x + res, y);
    x += res;
  }

  if (x >= width) {
    x = 0;
    y += res;
  }
  if (y >= height) {
    noLoop();
  }
}
