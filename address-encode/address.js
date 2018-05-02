var x = "0xcD1195E94b293Da440a732F4361D451d3B439862";



function setup() {
  var res = 20;
  var size = 18;
  var canvas = createCanvas(res * size, res * size);
  canvas.parent('sketch-holder');
  background('#efefef');

  var color = '#efefef';
  var n = 2;
  var p = 2;
  var binary;
  var code = x.charAt(n);
  for (var j = 0; j < size; j++) {
    for (var i = 0; i < size; i++) {
      binary = code % 2;
      code = (code) ? Math.ceil(code / 2) : 0;
      console.log(code);
      color = (binary) ? '#efefef' : '#0c1f3c';
      fill(color);
      rect(i * res , j * res, i * res + res ,  j * res + res);
      p *= 2;
      if (p == 128) {
        n++;
        code = x.charAt(n)
        p = 2;
      }
    }
  }
}

function draw() {
  noLoop();
}
