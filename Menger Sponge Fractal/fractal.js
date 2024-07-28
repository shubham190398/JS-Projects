var a = 0.0;
var boxWidth_x = 1920;
var boxWidth_y = 1080;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(50);
  stroke(255);
  noFill();
  rotateX(a);
  box(200);
  a += 0.01;
}
