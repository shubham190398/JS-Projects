var a = 0.0;
var background_height = 1080;
var background_width = 1920;
var sponge = [];
var boxWidth = 400;

function setup() {
  createCanvas(background_width, background_height, WEBGL);
  normalMaterial();
  var b = new Box(0, 0, 0, boxWidth);
  sponge.push(b);
}

function mousePressed() {
  var next = [];
  for (let i = 0; i < sponge.length; i++){
    var newBoxes = sponge[i].generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  lights();

  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);
  
  for (var i = 0; i < sponge.length; i++){
    sponge[i].show();
  }

  a += 0.03;
}
