var x = 0;
var y = 0;
var cols;
var rows;
var res = 20;
var res1 = 14;
function setup() {
  var canvas = createCanvas(window.innerWidth, 200);
  canvas.parent('sketch-holder');
  background('#fefe77');
  cols = width / res;
  rows = height /res;

  frameRate(0.4)
}

function draw() {
  

  //stroke('#eeeeee');
  background(random(240, 255),random(240, 255),77);

  strokeWeight(2);
  for (var i = 0; i < 3*width; i += res) {

    if (random(1) > 0.6) {
      strokeWeight(3);
      stroke(color(40,30,200));
      line(x + i /2, y, x, y + i);
    } else if (random(1) > 0.8){
      strokeWeight(2);
      stroke(color(random(0, 255),30,200));
      line(x + i, y + i, x + i, y);
    } else {

      stroke(color(random(0, 255),random(0, 255),200));
      strokeWeight(4);
      line(x, y + i, x + i, y);
    }
    /*
    var sleepDuration = 30;
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration) {
      //print(new Date().getTime());
    }
    */
    
  }
  
  /*

  line(x, y, x + res1, y + res);
  
  strokeWeight(2);
  if (random(1) > 0.7) {
    
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
  }*/

}


/*
class DiskStyle() {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
  this.numberOfDisk = 5

  this.drawCircle () {

  }

}

*/