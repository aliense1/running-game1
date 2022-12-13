var plane;
var planeImg;
var sky;
var skyImg;

var pip1,pip2,pip3;
var pip1Img,pip2Img,pip3Img;
function preload(){
 planeImg = loadImage("plane.png")
 skyImg =loadImage("background.png")
 pipe1Img = loadImage("pipe.png")
}

function setup() {
 createCanvas(600,600)


 sky = createSprite(20,10)
 sky.addAnimation("skyed",skyImg)
 sky.velocityX = -3


 plane = createSprite(50,230)
 plane.addAnimation("planerunning",planeImg)
 plane.scale = 0.3;


}

function draw() {
 background("white")

 drawSprites();

 if(sky.x <0){
    sky.x = width/2;
 }

 var selectpipe = Math.round(random(1,3))

 if(World.framecount % 60 ==0){
    if(selectpipe == 1){
     pipe1();
    }
   else if(selectpipe == 2){
    pipe2();
    }
   else if(selectpipe == 3){
     pipe3();
    }
 }
}

function pipe1(){
    pip1 = createSprite(Math.round(random(50,550)))
    pip1.addAinmation("piped",pip1Img)
}
function pipe2(){
    pip2 = createSprite(Math.round(random(50,550)))
    pip2.addAinmation("piped",pip1Img)
}

function pipe3(){
    pip3 = createSprite(Math.round(random(50,550)))
    pip3.addAinmation("piped",pip1Img)
}
