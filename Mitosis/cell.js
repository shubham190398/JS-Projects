class Cell{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.radius = 60;
    }

    move(){
        var vel = createVector(1, 1);
        this.pos.add(vel);
    }

    draw(){
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}