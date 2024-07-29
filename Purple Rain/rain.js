var drops = []

function setup() {
  createCanvas(1920, 1080);
  for (let i = 0; i < 200; i++){
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (let i = 0; i < 200; i++){
    drops[i].fall();
    drops[i].show();
  }
}
