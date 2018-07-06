
var porteuse, modulante, indiceModulation;
var textPorteuse, textModulante, textModulation;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');


  textPorteuse = createP('Fréquence de la porteuse');
  textPorteuse.position(10, 10)
  porteuse = createSlider(0, 360);
  porteuse.position(10, 60)
  porteuse.style('width', '180px');

  textModulante = createP('Fréquence de la modulante');
  textModulante.position(10, 110)
  modulante = createSlider(0, 360);
  modulante.position(10, 160)
  modulante.style('width', '180px');

  textModulation = createP('Indice de modulation');
  textModulation.position(10, 210)
  indiceModulation = createSlider(0, 360);
  indiceModulation.position(10, 260)
  indiceModulation.style('width', '180px');
  
}

function draw() {
  background(255, 100, 100);

  var fp = porteuse.value();
  var valM = modulante.value();
  var valI = indiceModulation.value();

  stroke(0)
  var wp = 2*PI*fp 
  var t = 0;
  var inc = 4/(220 * 400);
  for (var i = 0; i < 400; i++) {
    line(i, 200  + 150 * sin(wp*t) , i + 1 , 200 + 150 * sin(wp*(t + inc)));
    t = t + inc;
  }

 
}
