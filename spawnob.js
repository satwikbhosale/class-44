function spawnObstacle(){
    if(frameCount % 230 === 0){
       obstacle = createSprite(270,200,10,10);
       obstacle.addImage(obstacleI);
       obstacle.scale = 0.5;
       obstacle.x = 600;
       obstacle.y = Math.round(random(15,300));
       obstacle.rotationSpeed = -14
       obstacle.velocityX = -(11+1*score/100);
      // obstacle.debug = true;
       obstacle.setCollider("circle",0,0,50)
      
       obstacleG.add(obstacle);
    }
    
    if(frameCount % 350 === 0){
       obstacle2 = createSprite(650,305,20,10);
       obstacle2.addImage(obstacle2I);
       obstacle2.scale = 0.6;
      obstacle2.velocityX = -(7+1*score/100);
      
       obstacleG.add(obstacle2);
      
  
        platform1 = createSprite(650,300,200,20);
         platform1.addImage(platform2I);
      
        platform1.velocityX = -(7+1*score/100);
        platform1.y = Math.round(random(180,250));
        //platform1.debug = true;
        platform1.setCollider("rectangle",0,0,270,30);
      
        platformG.add(platform1); 
       }
  }