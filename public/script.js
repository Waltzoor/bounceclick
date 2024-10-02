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
    image(ghostPNG,0,0,64,64)
}

function draw_paddle(){
    rect(mouseX,paddleYPosition,paddleWidth,paddleHeight);
}