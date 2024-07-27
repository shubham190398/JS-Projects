let stars = [];
let speed;

function setup() {
  createCanvas(2560, 1440);
  for (let i = 0; i < 25000; i++){
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  speed = map(mouseX, width/2, width, 0, 50);
  if (speed < 0){
    speed = speed * -1;
  }
  translate(width/2, height/2);
  for (let i = 0; i < 25000; i++){
    stars[i].update();
    stars[i].display();
  }
}
