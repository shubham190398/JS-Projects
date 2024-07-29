class Drop {
    constructor(){
        this.x = random(width);
        this.y = random(-500, -100);
        this.speed_y = random(4, 8);
        this.length = random(10, 20);
    }

    fall(){
        this.y = this.y + this.speed_y;
        if (this.y > height){
            this.y = random(-500, -100);
        }
    }

    show(){
        strokeWeight(2);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.length);
    }
}