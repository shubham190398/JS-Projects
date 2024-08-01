var cells = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 1; i++){
    var cell = new Cell();
    cells[i] = cell;
  }
}

function draw() {
  background(50);
  for (let i = 0; i < 1; i++){
    cells[i].move();
    cells[i].draw();
  }

}
