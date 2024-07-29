class Drop {
    constructor(){
        this.x = width;
        this.y = 0;
        this.speed_y = 1;
    }
    fall(){
        this.y = this.speed_y;
    }
    show(){
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + 10);
    }
}