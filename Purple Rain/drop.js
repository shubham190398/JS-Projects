class Drop {
    constructor(){
        this.x = random(width);
        this.y = random(-800, -100);
        this.z = random(0, 20);
        this.speed_y = map(this.z, 0, 10, 3, 15);
        this.length = map(this.z, 0, 20, 10, 20);
    }

    fall(){
        this.y = this.y + this.speed_y;
        var grav = map(this.z, 0, 20, 0.03, 0.3);
        this.speed_y += grav;

        if (this.y > height){
            this.y = random(-500, -100);
            this.speed_y = map(this.z, 0, 10, 3, 15);
        }
    }

    show(){
        var weight = map(this.z, 0, 20, 1, 4);
        strokeWeight(weight);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.length);
    }
}