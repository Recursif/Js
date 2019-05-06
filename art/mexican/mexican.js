
var cols;
var rows;
var res = 20;
var nbOfDisk = 50

var diskMaxSize = 80

var DiskStyles = []
function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent('sketch-holder');
  background('#fefe77');
  cols = width / res;
  rows = height /res;

  background(color(140,220,77));
  frameRate(25);

  //Math.floor(random(1,2))
  for (var i = 0; i < nbOfDisk; i++) {
    DiskStyles.push(new Mexican(Math.floor(random(800)), Math.floor(random(800)))) 
  }
  console.log(DiskStyles)

 
}

function draw() {


  background(color(140,220,77));
  

  for (var i = 0; i < nbOfDisk; i++) {
    DiskStyles[i].moveDisk()
    DiskStyles[i].drawDisk()
  }

  //stroke('#eeeeee');
  


}


class Mexican {
  constructor(x, y) {
    this.numberOfDisk = 2
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

    let hatSize = Math.floor(random(20, diskMaxSize))

    listCircle.push(hatSize)
    listCircle.push(Math.floor(hatSize/(2.4)))


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

    let dir = Math.floor(random(0, 4))

    if (dir == 1) {
      this.x += 1;
    } else if (dir == 2) {
      this.x -= 1;
    } else if (dir == 3) {
      this.y += 1;
    } else if (dir == 4) {
      this.y -= 1;
    }
  }
}


