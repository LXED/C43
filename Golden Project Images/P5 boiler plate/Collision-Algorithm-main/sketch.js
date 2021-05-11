var player,playerImg;
var chicken,chickenImg,obstacle,obstacleImg;
var spaceBackG;


function preload(){
playerImg = loadImage("Images/ship.png");


 }


function setup() {
  createCanvas(800,400);

  player = createSprite(200,200,10,10);
  player.addImage(playerImg);


  
}

function draw() {
  background("white");
 

  
  drawSprites();
}