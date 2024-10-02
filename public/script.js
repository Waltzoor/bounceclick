let paddleWidth = 200;
let paddleHeight = 30;
let paddleYPosition = 700
;
let ghostPNG;

function preload(){
    ghostPNG = loadImage("Images/PixelGhost.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background("gray");
}

function draw(){
    background("blue")
    draw_paddle();
}

function draw_paddle(){
    rect(mouseX,paddleYPosition,paddleWidth,paddleHeight);
}


class Ghost{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 30
        this.height = 30
        this.xSpeed = 1;
        this.ySpeed = -1;
        this.gravity = 0.05;
    }

    Move(){
        
        image(ghostPNG,this.x,this.y,this.width,this.height)

    }

}