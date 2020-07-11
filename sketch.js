var trex,trexrun,collided;
var ground,desert;
var invisibleground;

function preload(){
  trexrun = loadAnimation("trex1.png","trex3.png","trex4.png");
  desert = loadImage("ground2.png");
  collided = loadImage("trex_collided.png");
}

function setup() {
  createCanvas(400, 400);
  trex = createSprite(60,350,10,10);
  trex.addAnimation("running",trexrun);
  trex.scale = 0.6;
  ground = createSprite(200,380,400,10);
  ground.addImage("ground",desert);
  invisibleground = createSprite(200,385,400,10);
  invisibleground.visible = false;
}

function draw() {
  background(220);
  
 if(keyDown("SPACE")){
   trex.velocityY = -10;
 } 
 
trex.velocityY = trex.velocityY+1;

trex.collide(invisibleground);
  resetground();

ground.velocityX = -2;



  
  
  drawSprites();
}

function resetground(){
  if(ground.x<0){
    ground.x = ground.width/2;
  }
}

