class Cell{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.radius = 20;
    }

    move(){
        var vel = createVector(1, 1);
        this.pos.add(vel);
        if (this.pos.x > width || this.pos.y > height){
        this.pos = createVector(random(width), random(height));
        }
    }

    draw(){
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}