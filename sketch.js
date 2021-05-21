var back,backI;
var ball,ballI;
var enemy1,enemy2,enemy3,enemy4,enemy5;
var platform1,platform2;
var obstacle,obstacle2;
var star;
var enemy1I,enemy2I,enemy3I,enemy4I,enemy5I;
var platform1I,platform2I;
var obstacleI,obstacle2I;
var starsI;
var r,r2;
var platformG,enemyG,obstacleG,starG;
var gameState = play;
var play = 1;
var end = 0;
var score;
var star_s = 0;
var gameState = "play";
var end;
var over,overI,restart,restartI,overB,overBI;
var backS;
var jumpS;

function preload(){

  backI = loadImage("back.jpg");
  ballI = loadImage("red ball.png");
  enemy1I = loadImage("enemy1.png");
  enemy2I = loadImage("enemy2.png");
  enemy3I = loadImage("enemy3.png");
  enemy4I = loadImage("enemy4.png");
  enemy5I = loadImage("enemy5.png"); 
  obstacleI = loadImage("obstacle1.png");
  obstacle2I = loadImage("obstacle2.png")
  platform1I = loadImage("plateform1.png");
  platform2I = loadImage("plateform2.png");
  starsI = loadImage("star.png");
  overI = loadImage("game end.png");
  restartI = loadImage("restart.png");
  overBI = loadImage("endB.jpg");
  backS = loadSound("music.m4a");
  jumpS = loadSound("jumping.mp3");
  
}

function setup() {
  createCanvas(600,450);
  
  back = createSprite(300,170,600,450);
  back.addImage(backI);
 
  ball = createSprite(80,150,20,20);
  ball.addImage(ballI);
  ball.scale = 0.11;
  

  
  overB = createSprite(300,230,10,10);
  overB.addImage(overBI);
  overB.scale = 1.5;
  overB.visible = false;

  restart = createSprite(300,200,10,10);
  restart.addImage(restartI);           
  restart.scale = 0.1;
  restart.visible = false;
  
  over = createSprite(300,70,10,10);
  over.addImage(overI);
  over.scale = 0.7;
  over.visible = false;
  
  //ball.debug = true;
  ball.setCollider("circle");
  
  platformG = new Group();
  enemyG = new Group();
  obstacleG = new Group();
  starG = new Group();
  
  score = 0;
  back.velocityX = 0;
  
  backS.play();
  invisi= createSprite(300,350,600,10)
  invisi.visible=false
}

function draw() {
  background(120);
  
 if(gameState === "play"){
   
  if(back.x<0){
     back.x = back.width/2;
  }
   
   back.velocityX = -(7+1* score/100);
   ball.rotationSpeed = 10;
   ball.x = 70;
   
  if(keyDown("space")||mousePressedOver(back)) {
        ball.velocityY = -15;
        jumpS.play();    
    }
   
   if(frameCount % 5 === 0){
     score = score + 3;
  }
   
   if(ball.isTouching(starG)){
      star_s += 1;
      starG.destroyEach();
   }
  
   ball.velocityY = ball.velocityY+0.7;
  
   spawnEnemy();
   spawnObstacle();
   spawnStars();
  
 }  
  
  if(ball.isTouching(enemyG)||ball.isTouching(obstacleG)||ball.x < 0){
     gameState = end;
     enemyG.setLifetimeEach(-1);
     enemyG.setVelocityXEach(0);
     obstacleG.setLifetimeEach(-1);
     obstacleG.setVelocityXEach(0);
     platformG.setLifetimeEach(-1);
     platformG.setVelocityXEach(0);
     starG.setLifetimeEach(-1);
     starG.setVelocityXEach(0);
    
  
    
     enemyG.setVisibleEach(false);
     obstacleG.setVisibleEach(false);
     platformG.setVisibleEach(false);
     starG.setVisibleEach(false);
     back.velocityX = 0;
  }  
    
  if(gameState === end){
    
     ball.rotationSpeed = 0;
      
    
     overB.visible = true;
     restart.visible = true;
     over.visible = true;
     
    
    
     if(mousePressedOver(restart)){
        reset();
     }
  }
  if (ball.isTouching(platformG)){
    ball.collide(platformG)
  }
  
  drawSprites();
   ball.collide(invisi);
  
  fill("orange");
  stroke("black");
  strokeWeight(3)
  textSize(17);
  text("score:" + score,500,50);
  text("stars:" + star_s,400,50)
}

function reset(){
  gameState = "play";
  score = 0;
  star_s = 0;
  overB.visible = false;
  restart.visible = false;
  over.visible = false;
  enemyG.destroyEach();
  obstacleG.destroyEach();
  platformG.destroyEach();
  starG.destroyEach();
}






  