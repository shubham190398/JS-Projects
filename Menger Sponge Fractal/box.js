class Box {
    constructor(x, y, z, r){
        this.pos = createVector(x, y, z);
        this.size = r;
    }

    generate(){
        let boxes = []
        var new_size = this.size / 3;
        for (var i = -1; i < 2; i++){
            for (var j = -1; j < 2; j++){
                for (var k = -1; k < 2; k++){
                    var sum = abs(i) + abs(j) + abs(k);
                    if (sum > 1) {
                        var b = new Box(this.pos.x + i * new_size, this.pos.y + j * new_size, this.pos.z + k * new_size, new_size);
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
        fill(255);
        box(this.size);
        pop();
    }
}