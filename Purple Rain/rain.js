var drops = []

function setup() {
  createCanvas(2560, 1440);
  for (let i = 0; i < 5000; i++){
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (let i = 0; i < 5000; i++){
    drops[i].fall();
    drops[i].show();
  }
}
