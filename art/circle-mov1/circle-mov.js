
var cols;
var rows;
var res = 20;
var nbOfDisk = 100

var diskMaxSize = 80

var DiskStyles = []
function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent('sketch-holder');
  background('#fefe77');
  cols = width / res;
  rows = height /res;

  background(color(140,220,77));

  
  for (var i = 0; i < nbOfDisk; i++) {
    DiskStyles.push(new DiskStyle(Math.floor(random(1,8)), Math.floor(random(800)), Math.floor(random(800)))) 
  }
  console.log(DiskStyles)

 
}

function draw() {
  

  for (var i = 0; i < nbOfDisk; i++) {
    DiskStyles[i].moveDisk()
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
  moveDisk () {

    let dir = Math.floor(random(1, 4))

    if (dir == 1) {
      this.x++;
    } else if (dir == 2) {
      this.x--;
    } else if (dir == 3) {
      this.y++;
    } else if (dir == 4) {
      this.y--;
    }
  }
}


