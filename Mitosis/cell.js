import { Vector } from "../../../.vscode/extensions/samplavigne.p5-vscode-1.2.15/p5types/index";

class Cell{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.radius = 60;
    }

    move(){
        var vel = Vector.random2D();
        this.pos.add(vel);
    }

    draw(){
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}