var paddle;
var ball;
var bricks=[];
var brickWidth=50;
var brickHeight=15;
var rows;
var cols;
var life=3;
var hitSound;
var paddleImage;
var ballImage;
var backgroundImage;
function preload(){
    hitSound=loadSound("./hitsound.mp3");
    paddleImage=loadImage("./paddleImage.png");
    ballImage=loadImage("./ballImage.png");
    backgroundImage=loadImage("./background.jpg");
}
function setup(){
    createCanvas(501,500);
    rows=height/brickHeight;
    cols=width-1/brickWidth;
    paddle=new Paddle();
    ball=new Ball();
    ball.applyForce(createVector(3,-3))
    for(var i=2;i<5;i++){
        for(var j=0;j<cols;j++){
            bricks.push(new Brick(j*brickWidth,i*brickHeight,brickWidth,brickHeight));
        }
    }
}
function draw(){
    background(255);
    imageMode(CORNER);
    background(backgroundImage,501,500);
    stroke(0);
    noFill();
    text("Life = "+life,10,20);
    paddle.show();
    ball.update();
    if(ball.inAir){
        ball.checkBoundaries(paddle);
        ball.increaseSpeed();
    }
    ball.show();
    for(var i in bricks){
        if(bricks[i].hits(ball) && !bricks[i].hit){
            hitSound.play();
            bricks[i].hit=true;
            ball.velocity.y=-ball.velocity.y;
            ball.paddleHit=false;
            ball.ceilHit=false;
            ball.sideHit=false;
        }
    }
    for(var i in bricks){
        if(!bricks[i].hit)
            bricks[i].show();
    }
    if(keyIsDown(37)){
        paddle.moveLeft();
    }
    if(keyIsDown(39)){
        paddle.moveRight();
    }
    if(winCheck()){
        alert("Won!!");
        noLoop();
    }
}
function keyPressed(){
    if(keyCode==32){
        ball.inAir=true;
    }
}
function winCheck(){
    for(var i in bricks){
        if(!bricks[i].hit){
            return false;
        }
    }
    return true;
}

