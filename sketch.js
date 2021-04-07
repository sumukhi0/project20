var tom,jerry,garden;
var tom1Img,tom2Img,tom3Img,jerry1Img,jerry2Img,jerry3Img;
var gardenImg;

function preload() {
    //load the images here
    tom1Img = loadAnimation("images/cat1.png"); 
    tom2Img = loadAnimation("images/cat2.png","images/cat3.png");
    tom3Img = loadAnimation("images/cat4.png");

    jerry1Img = loadAnimation("images/mouse1.png");
    jerry2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3Img = loadAnimation("images/mouse4.png");
    
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenImg); 

    tom = createSprite(690,600,50,50);
    tom.addAnimation("catFirstImage",tom1Img);
    tom.scale = 0.1;

    jerry = createSprite(200,600,30,30);
    jerry.addAnimation("mouseFirstImage",jerry1Img);
    jerry.scale = 0.1;

}
    
function draw() {
    
    background("black");
    
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){

       tom.velocityX = 0; 
       tom.addAnimation("catLastImage",tom3Img);
       tom.x = 300;
       tom.scale = 0.1;
       tom.changeAnimation("catLastImage");
       jerry.addAnimation("jerryLastImage",jerry3Img);
       jerry.scale = 0.1;
       jerry.changeAnimation("jerryLastImage");
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
     jerry.addAnimation("mouseTeasing",jerry2Img);
     jerry.frameDelay = 25;
     jerry.changeAnimation("mouseTeasing");
     
  }

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
     tom.addAnimation("catMoving",tom2Img);
     tom.changeAnimation("catMoving");
}
}
