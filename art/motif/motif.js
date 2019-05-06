
  
var x = 0;
var y = 0;
var cols;
var rows;
var res = 20;
var res1 = 14;

var step = 0
function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent('sketch-holder');

  cols = width / res;
  rows = height /res;

  frameRate(1)

}

function draw() {
  background('#112544');
 for (var i = -18 + step; i < 800 + step; i += 35) {
  for (var j = 18 + Math.floor(random(4)) - 1; j < 800 + Math.floor(random(4)) - 1; j += 35) {
    drawMotif(j, i)
  }
}
  step += 1
}


function drawMotif(x, y) {
  
  strokeWeight(0.5)
  stroke('#6b97db');
  fill('#6b97db');
  ellipse(x, y, 5)
  line(x, y, x + 12, y + 12)
  line(x, y, x - 12, y + 12)
  line(x, y, x + 12, y - 12)
  line(x, y, x - 12, y - 12)


  line(x + 6, y + 12, x + 12, y + 6)
  line(x - 6, y + 12, x - 12, y + 6)
  line(x + 6, y - 12, x + 12, y - 6)
  line(x - 6, y - 12, x - 12, y - 6)

  

  strokeWeight(0.8)
  
  rect(x + 12, y - 16, 4, 4)
  rect(x - 16, y - 16, 4, 4)

  rect(x + 2, y + 12, 4, 4)
  rect(x - 16, y + 2, 4, 4)


  stroke('#274c8c');
  fill('#274c8c');
  rect(x + 12, y + 2, 4, 4)
  rect(x - 6, y + 12, 4, 4)

  rect(x + 2, y - 16, 4, 4)
  rect(x - 16, y - 6, 4, 4)

  stroke('#e1e9f7');
  fill('#e1e9f7');
  rect(x + 12, y + 12, 4, 4)
  rect(x - 16, y + 12, 4, 4)

  rect(x + 12, y - 6, 4, 4)
  rect(x - 6, y - 16, 4, 4)

}