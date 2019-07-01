class Ball{
    constructor(){
        this.radius=10;
        this.pos=createVector();
        this.velocity=createVector(0,0);
        this.acceleration=createVector(0,0);
        this.inAir=false;
        this.paddleHit=false;
        this.ceilHit=false;
        this.sideHit=false;
    }
    show(){
        imageMode(CENTER);
        image(ballImage,this.pos.x,this.pos.y,this.radius*3,this.radius*3)
        // stroke(255);
        // fill(255);
        // ellipse(this.pos.x,this.pos.y,this.radius*2);
    }
    increaseSpeed(){
        if(this.velocity.y>0 && this.velocity.y<9){
            this.velocity.y+=0.003;
        }
        else if(this.velocity<0 && this.velocity.y>-9){
            this.velocity.y-=0.003;
        }
    }
    applyForce(force){
        this.acceleration.add(force);
    }
    update(){
        if(this.inAir){
            this.velocity.add(this.acceleration);
            this.pos.add(this.velocity);
            this.acceleration=createVector(0,0);
        }
        else{
            this.pos.x=paddle.pos.x+paddle.width/2;
            this.pos.y=paddle.pos.y-this.radius;
        }
    }
    checkBoundaries(paddle){
        if(((this.pos.x+this.radius)>=width || (this.pos.x-this.radius)<=0) &&(!this.sideHit)){
            // this.velocity.x=-this.velocity.x;
            if(this.velocity.x>0){
                this.velocity.x=-3+(random(-1,1));
            }
            else if(this.velocity.x<0){
                this.velocity.x=3+(random(-1,1));
            }
            this.sideHit=true;
        }
        else if(this.pos.y-this.radius<=0 && !this.ceilHit){
            this.velocity.y=-this.velocity.y;
            this.paddleHit=false;
            this.ceilHit=true;
            this.sideHit=false;
        }
        else if((this.pos.y+this.radius>=paddle.pos.y && this.pos.y+this.radius<=paddle.pos.y+paddle.height && this.pos.x>=paddle.pos.x && this.pos.x<=paddle.pos.x+paddle.width) && !this.paddleHit){
            this.paddleHit=true;
            this.velocity.y=-this.velocity.y;
            this.ceilHit=false;
            this.sideHit=false;
        }
        else if(this.pos.y+this.radius>=height){
            life--;
            if(life>0){
                this.pos.x=paddle.pos.x+(paddle.width/2);
                this.pos.y=paddle.pos.y
                this.inAir=false;
                this.paddleHit=false;
                this.ceilHit=false;
                this.sideHit=false;
            }
            else{
                alert("Game Over");
                noLoop();
            }
        }
    }
}