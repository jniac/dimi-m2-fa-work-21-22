export class Point{
    constructor(index, x, y){
        this.x=x;
        this.y=y;
        this.fixedY = y;
        this.speed = 0.03;
        this.cur = index;
        this.max = Math.random()*90+100;
    }

    update(){
        this.cur += this.speed;
        this.y = this.fixedY+(Math.sin(this.cur)*this.max);
    }
}