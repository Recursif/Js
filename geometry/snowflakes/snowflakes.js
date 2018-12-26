
class Particle {
    constructor(x, y, r) {
        this.y = y
        this.x = x;
        this.r = r;
    }
  
    update() {
        x -= 1;
        y += RandomSource(-1,1);
    }

    show() {
        fill(255);
        stroke(255);
        ellipse(x, y, r * 2, r * 2);
    }
}

  
function setup() {  
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');


    current = new Particle(300, 300, 3);
}

function draw() {
    background('#0c1f3c');
    current.update()
}



