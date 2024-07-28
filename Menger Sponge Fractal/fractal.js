var a = 0.0;
var boxWidth_x = 1920;
var boxWidth_y = 1080;
var boxWidth = 800
var sponge = [];

function setup() {
  createCanvas(boxWidth_x, boxWidth_y, WEBGL);
  var b = new Box(0, 0, 0, boxWidth);
  sponge.push(b);
}

function mousePressed(){
  var next = [];
  for (let i = 0; i < sponge.length; i++){
    var b = sponge[i];
    var newBoxes = b.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw() {
  background(0);
  stroke(127);
  noFill();
  ambientLight(255, 255, 255);
  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);
  
  for (let i = 0; i < sponge.length; i++){
    sponge[i].show();
  }

  a += 0.01;
}
