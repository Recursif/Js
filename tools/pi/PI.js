var r = 200;
var pi;
var nb_inside_circle = 0;
var nb_inside_square = 0;
var recordPi = 0;

function setup() {
  var canvas = createCanvas(404, 404);
  canvas.parent('sketch-holder');
  background('#0c1f3c');
  translate(width/2, height/2);
  noFill();
  stroke(200);
  strokeWeight(4);
  ellipse(0, 0, 2*r, 2*r);
  rectMode(CENTER);
  rect(0, 0, 2*r, 2*r);
}

function draw() {
  translate(width/2, height/2);
  strokeWeight(1);
  for (var i = 0; i < 1000; i++) {
    var x = random(-r, r);
    var y = random(-r, r);

    var d = sqrt(x*x + y*y);
    nb_inside_square++;
    if (d > r) {
      stroke('#00FF00');
    } else {
      stroke('#0000FF');
      nb_inside_circle++;
    }
    point(x, y);
  }

  stroke('#EE0000');
  pi = 4 * nb_inside_circle / nb_inside_square;
  recordDiff = abs(PI - recordPi);
  diff = abs(PI - pi);
  if (diff < recordDiff) {
    recordDiff = diff;
    recordPi = pi;
    console.log(pi);
  }
}
