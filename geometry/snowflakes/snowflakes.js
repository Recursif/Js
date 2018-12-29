
class Particle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
  
    update() {
        this.x -= 1;
        this.y += random(-5,5);
    }

    show() {
        fill(255);
        stroke(255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    finished() {
        return (this.x < 0);
    }

    intersects(snowflakes) {
        for (var i in snowflakes) {
            let s = snowflakes[i];
            
            let d = dist(s.x, s.y, this.x, this.y);
            if (d < this.r*2) {
                return true;
            }
        }

        return false;
    }
}

var current;
var snowflakes;
var branch = 6;
  
function setup() {  
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');

    background('#0c1f3c');

    current = new Particle(width/2, 0, 3);
    snowflakes = []
}

function draw() {
    translate(width/2, height/2);
    background('#0c1f3c');

 
    rotate(PI/6);

    while (!current.finished() && !current.intersects(snowflakes)) {
        current.update();
    }

    snowflakes.push(current);
    current = new Particle(width/2, 0, 3);

    for (var j = 0; j < branch; j++) {
        rotate(PI/(branch/ 2));
        current.show();
        for (var i in snowflakes) {
            snowflakes[i].show();
        }

        push();
        scale(1, -1);
        current.show();
        for (var i in snowflakes) {
            snowflakes[i].show();
        }
        pop();
    }
}



