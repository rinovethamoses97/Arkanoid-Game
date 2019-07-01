class Brick{
    constructor(x_,y_,w,h){
        this.pos=createVector(x_,y_);
        this.width=w;
        this.height=h;
        this.hit=false;
    }
    show(){
        stroke(0);
        fill(255,0,0);
        rect(this.pos.x,this.pos.y,this.width,this.height);
    }
    hits(ball){
        return (collideRectCircle(this.pos.x,this.pos.y,this.width,this.height,ball.pos.x,ball.pos.y,ball.radius*2));
    }
}