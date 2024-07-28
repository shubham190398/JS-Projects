class Box {
    constructor(x, y, z, r){
        this.pos = createVector(x, y, z);
        this.size = r;
    }

    generate(){
        var boxes = []
        for (let i = -1; i < 2; i++){
            for (let j = -1; j < 2; j++){
                for (let k = -1; k < 2; k++){
                    var sum = abs(i) + abs(j) + abs(k);
                    var new_size = this.size / 3;
                    if (sum > 1){
                        var b = new Box(this.pos.x + x * new_size, this.pos.y + y * new_size, this.pos.z + z * new_size, new_size);
                        boxes.push(b);
                    }
                }
            }
        }
        return boxes;
    }

    show(){
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        stroke(255);
        noStroke();
        noFill();
        fill(255);
        box(this.size);
        pop();
    }
}