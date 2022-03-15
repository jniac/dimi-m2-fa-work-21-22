export class Point{
    constructor(index, x, y){
        this.x=x;
        this.y=y;
        this.fixedY = y;
        this.speed = 0.4;
        this.cur = index;
        this.max = Math.random()*200+200;
    }

    update(){
        this.cur += this.speed;
        this.y = this.fixedY+(Math.sin(this.cur)*this.max);
    }
}