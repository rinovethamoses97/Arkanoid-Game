class Paddle{
    constructor(){
        this.width=70;
        this.height=20;
        this.pos=createVector(width/2-this.width/2,height-this.height);
        this.speed=5;
    }
    show(){
        imageMode(CORNER);
        image(paddleImage,this.pos.x,this.pos.y,this.width,this.height);
        // stroke(255);
        // fill(255);
        // rect(this.pos.x,this.pos.y,this.width,this.height);
    }
    moveRight(){
        this.pos.x+=this.speed;
    }
    moveLeft(){
        this.pos.x-=this.speed;
    }
}