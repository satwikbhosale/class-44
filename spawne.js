function spawnEnemy(){
    if(frameCount % 100 === 0){
       r = Math.round(random (1,5));
       if(r == 1){
          enemy1 = createSprite(300,200,10,10);
          enemy1.addImage(enemy1I);
          enemy1.scale = 0.5
          enemy1.y = 305;
          enemy1.x = 600;
          enemy1.velocityX = -(7+1* score/100);
          
         enemyG.add(enemy1);
       }
        if(r == 2){
          enemy2 = createSprite(300,200,10,10);
          enemy2.addImage(enemy2I);
          enemy2.scale = 0.5
          enemy2.y = 305;
          enemy2.x = 600;
          enemy2.velocityX = -(7+1* score/100);
          
          enemyG.add(enemy2);
       }
      
        if(r == 3){
          enemy3 = createSprite(300,200,10,10);
          enemy3.addImage(enemy3I);
          enemy3.scale = 0.5
          enemy3.y = 305;
          enemy3.x = 600;
          enemy3.velocityX = -(7+1*score/100);
          
          enemyG.add(enemy3);
       }
      
        if(r == 4){
          enemy4 = createSprite(300,200,10,10);
          enemy4.addImage(enemy4I);
          enemy4.scale = 0.5
          enemy4.y = 305;
          enemy4.x = 600;
          enemy4.velocityX = -(7+1*score/100);
          
          enemyG.add(enemy4);
       }
      
        if(r == 5){
          enemy5 = createSprite(300,200,10,10);
          enemy5.addImage(enemy5I);
          enemy5.scale = 0.5
          enemy5.y = 305;
          enemy5.x = 600;
          enemy5.velocityX = -(7+1*score/100);
          
          enemyG.add(enemy5);
       }
    }  
  }