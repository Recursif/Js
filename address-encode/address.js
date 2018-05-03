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
  var p = 0;
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
      binary = code % 2;
      color = (binary) ? '#0c1f3c' : '#efefef';
      fill(color);
      rect(i * res , j * res, i * res + res ,  j * res + res);
      code = (code == 0) ? 0 : Math.floor(code / 2);
      p++;
      if (p == 8) {
        n++;
        code = x.charCodeAt(n);

        console.log("next");
        console.log(x.charAt(n));
        p = 0;
      }
    }
  }
}

function draw() {
  noLoop();
}
