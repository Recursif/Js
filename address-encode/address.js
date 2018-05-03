var x = "0xcD1195E94b293Da440a732F4361D451d3B439862";


function corner(i, j, size) {
  return ((i == 0 && j == 0) || (i == size - 1 && j == 0) || (i == 0 && j == size - 1) || (i == size - 1 && j == size - 1));
}

function setup() {
  var res = 20;
  var size = 18;
  var canvas = createCanvas(res * size, res * size);
  canvas.parent('sketch-holder');
  background('#efefef');

  var color = '#efefef';
  var n = 2;
  var p = 128;
  var binary;
  var code = x.charCodeAt(n);
  console.log(x.charAt(n));
  for (var j = 0; j < size; j++) {
    for (var i = 0; i < size; i++) {
      if (corner(i, j, size))
      {
        console.log("pass");
        fill('#efefef');
        rect(i * res , j * res, i * res + res ,  j * res + res)
        continue;
      }
      console.log(code);
      binary = Math.floor(code / p);
      color = (binary) ? '#0c1f3c' : '#efefef';
      fill(color);
      rect(i * res , j * res, i * res + res ,  j * res + res);
      code = (code - p < 0) ? code : code - p;
      p = Math.floor(p / 2);
      if (p == 0) {
        n++;
        code = x.charCodeAt(n);

        console.log("next");
        console.log(x.charAt(n));
        p = 128;
      }
    }
  }
}

function draw() {
  noLoop();
}
