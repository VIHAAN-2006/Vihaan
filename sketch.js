var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var restart,gameOver
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
  obstacle1Image = loadImage("obstacle1.png")
  obstacle2Image = loadImage("obstacle2.png")
  obstacle3Image = loadImage("obstacle3.png")
  obstacle4Image = loadImage("obstacle4.png")
  obstacle5Image = loadImage("obstacle5.png")
  obstacle6Image = loadImage("obstacle6.png")
  gameOverImage = loadImage("gameOver.png")
  restartImage = loadImage("restart.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  obstaclesGroup = createGroup();
  
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  spawnclouds()
  spawnonstacles()
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if(obstaclesGroup.isTouching(trex))
    {
      obstaclesGroup.setVelocityXEach(0)
      gameOver = createSprite(300,100)
      gameOver.addImage(gameOverImage)
      gameOver.scale = 0.5
      restart = createSprite(300,120)
      restart.addImage(restartImage)
      restart.scale = 0.5
    }
  
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnclouds(){
  if(frameCount%60==0){
    var cloud = createSprite(600,100,30,50)
    cloud.addImage(cloudImage)
    cloud.velocityX = -4;
    cloud.scale = 0.5;
    cloud.lifetime = 180;
    cloud.y = Math.round(random(80,120))
  }
}
function spawnonstacles(){
  if(frameCount%60==0){
    var obstacle = createSprite(600,175,30,50)
    obstacle.velocityX = -3;
    obstacle.scale = 0.5;
    obstacle.lifetime = 180;
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1:
        obstacle.addImage(obstacle1Image)
        break
        case 2:
        obstacle.addImage(obstacle2Image)
        break
        case 3:
        obstacle.addImage(obstacle3Image)
        break
        case 4:
        obstacle.addImage(obstacle4Image)
        break
        case 5:
        obstacle.addImage(obstacle5Image)
        break
        case 6:
        obstacle.addImage(obstacle6Image)
        break
    }
    obstaclesGroup.add(obstacle)
    
    
  }
}