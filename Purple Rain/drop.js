class Drop {
    constructor(){
        this.x = random(width);
        this.y = random(-height/2, height/2);
        this.speed_y = random(4, 8);
    }

    fall(){
        this.y = this.y + this.speed_y;
        if (this.y > height){
            this.y = random(-height/2, -height/3);
        }
    }

    show(){
        strokeWeight(2);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + 15);
    }
}