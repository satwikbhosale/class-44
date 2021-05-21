
function spawnStars(){
    if(frameCount % 90 === 0){
       star = createSprite(600,200,10,10);
       star.addImage(starsI);
       star.scale = 0.12;
       star.y = Math.round(random(80,260));
       star.velocityX = -(7+1*score/100);  
      
       starG.add(star);
    }
  }