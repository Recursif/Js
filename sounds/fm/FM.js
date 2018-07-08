
var porteuse, modulante, indiceModulation;
var textPorteuse, textModulante, textModulation;
var osc;


function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();

  textPorteuse = createP('Fréquence de la porteuse');
  textPorteuse.position(10, 10)
  porteuse = createSlider(220, 880);
  porteuse.position(10, 60)
  porteuse.style('width', '180px');

  textModulante = createP('Fréquence de la modulante');
  textModulante.position(10, 110)
  modulante = createSlider(2200, 8000);
  modulante.position(10, 160)
  modulante.style('width', '180px');

  textModulation = createP('Indice de modulation');
  textModulation.position(10, 210)
  indiceModulation = createSlider(0, 5, 4);
  indiceModulation.position(10, 260)
  indiceModulation.style('width', '180px');
  
}

function draw() {
  background(255, 100, 100);

  var fp = porteuse.value();
  var fm = modulante.value();
  var Im = indiceModulation.value();

  stroke(0)
  var wp = 2*PI*fp
  var wm = 2*PI*fm 
  var t = 0;
  var inc = 4/(440 * 400);
  for (var i = 0; i < 400; i++) {
    line(i, 200  + 150 * sin(wp*t + Im*sin(wm*t)) , i + 1 , 200 + 150 * sin(wp*(t + inc) + Im*sin(wm*(t + inc) ) ));
    osc.freq(240);

    t = t + inc;
  }

 
}
