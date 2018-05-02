var x = "0xcD1195E94b293Da440a732F4361D451d3B439862";


function setup() {  
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  background('#0c1f3c');

  stroke('#efefef');
  fill('#efefef');
  textSize(32);
  for (var i = 0; i < x.length; i++) {
    text(x.charAt(i), random(390), random(390));
  }
}

function draw() {
  noLoop();
}
