var cells = [];

function setup() {
  createCanvas(400, 400);
  var cell = new Cell();
  cells[0] = cell;
}

function draw() {
  background(50);
  cells[0].draw();
}
