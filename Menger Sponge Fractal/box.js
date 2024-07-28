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
        noFill();
        strokeWeight(2);
        var rValue = map(this.pos.x, -boxWidth/2, boxWidth/2, 10, 255);
        var gValue = map(this.pos.y, -boxWidth/2, boxWidth/2, 10, 255);
        var bValue = map(this.pos.z, -boxWidth/2, boxWidth/2, 10, 255);
        stroke(rValue, gValue, bValue, 255);
        box(this.r);
        pop();
    }
}