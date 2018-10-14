
var cols;
var rows;
var res = 20;
var nbOfDisk = 50

var diskMaxSize = 80

var w = 800;
var h = 800;


var DiskStyles = []
function setup() {
  var canvas = createCanvas(w, h);
  canvas.parent('sketch-holder');
  background('#fefe77');
  cols = width / res;
  rows = height /res;

  background(color(140,220,77));

  //Math.floor(random(1,2))
  for (var i = 0; i < nbOfDisk; i++) {
    DiskStyles.push(new DiskStyle(Math.floor(random(1,9)), Math.floor(random(800)), Math.floor(random(800)))) 
  }
  console.log(DiskStyles)

 
}

function draw() {


  background(color(140,220,77));
  

  for (var i = 0; i < nbOfDisk; i++) {
    DiskStyles[i].moveDisk()
    DiskStyles[i].updateDisk()
    DiskStyles[i].drawDisk()
  }

  //stroke('#eeeeee');
  


}


class DiskStyle {
  constructor(numberOfDisk, x, y) {
    this.numberOfDisk = numberOfDisk
    this.x = x
    this.y = y
    this.circles = this.generateDisk()
  }
  drawDisk () {
    for (var i = 0; i < this.numberOfDisk; i++) {
      fill(this.circles[i][1]);
      ellipse(this.x, this.y, this.circles[i][0])
    }
  }
  generateDisk () {

    let listCircle = [];
    for (var i = 0; i <  this.numberOfDisk; i++) {
      listCircle.push(Math.floor(random(0, diskMaxSize)))
    }

    for (var i = 0; i <  this.numberOfDisk; i++) {
      listCircle[i] = [
        listCircle[i],
        color(random(0,255), random(0,255), random(0,255))
      ]
    }
    listCircle.sort().reverse()
    console.log(listCircle)
    return listCircle
  }

  updateDisk () {
    for (var i = 0; i <  this.numberOfDisk; i++) {
      this.circles[i][0] = ( this.circles[i][0] + Math.floor(random(-1,1)) + diskMaxSize + mouseX) % (diskMaxSize + mouseY);
    }
  }
  moveDisk () {

    let dir = Math.floor(random(0, 1000))

    if (dir <= 80) {
      this.x = (this.x + 1 + w) % w;
    } else if (dir <= 200) {
      this.x = (this.x - 1 + w) % w;
    } else if (dir <= 750) {
      this.y = (this.y + 1 + h) % h;
    } else {
      this.y = (this.y - 1 + h) % h;
    }
  }
}


