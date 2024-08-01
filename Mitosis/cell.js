class Cell{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.radius = 60;
    }

    draw(){
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}