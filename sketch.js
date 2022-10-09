var sky;
var Boom;
var Player;
var Enemy;
var Enemy_2;
var Nuker;
var gameState = play;
var score;
var Enemy_Missile;
var Enemy_2_Missile;

function preload()
{
    sky = loadImage("sky.jpeg");
    Boom = loadImage("Blast.jpeg");
    Player = loadImage("F - 35.png");
    Enemy = loadImage("player.png");
    Enemy_2 = loadIamge("Enemy_2.jpeg");
    Nuker = loadImage("Nuke.png");
    Enemy_Missile = loadImage("Enemy Missile.png");
    Enemy_2_Missile = loadImage("Enemy_2_Missile.png");
}

function setup()
{ 
  var message;
  createcanvas(600,600) 
    sky = createSprite(600,600); 
    sky.addImage(sky); 
     
    Boom = createSprite(600,400); 
    Boom.addImage(Blast); 
    Boom.scale = 0.6; 
 
    Player = createSprite(600,100); 
    Player.addImage(F - 35); 
    Player.scale = 0.5; 
 
    Enemy = createSprite(200,20); 
    Enemy.addImage(player); 
    Enemy.scale = 0.5; 
    Enemy.velocityY = 0.5; 
 
    Enemy_2 = createSprite(100,30); 
    Enemy_2.addImage(Enemy_2); 
    Enemy.scale = 0.5; 
    Enemy.velocityY = 0.5; 
 
    Nuker = createSprite(600,100); 
    Nuker.addImage(Nuke); 
    Nuker.scale = 0.05; 
    Nuker.velocityY = -5; 

    Enemy_Missile = CreateSprite(200,20);
    Enemy_Missile.addImage(Enemy.Missile);
    Enemy_Missile.scale = 0.05;
    Enemy_Missile.velocityY = 5;

    Enemy_2_Missile = createSprite(100,30);
    Enemy_2_Missile.addImage(Enemy_2_Missile)
    Enemy_2_Missile.velocityY = 5;
    Enemy_2_Missile.scale = 0.05
}
function draw()
{
  if(gameState ===  PLAY) 
  {
    if(keyDown("left_arrow"))
    {
        player.x = player.x+5
    }
    if(keyDown("right_arrow"))
    {
        player.x = player.x -5
    }
    if(keyDown("Space"))
    {
      Nuker.x = player.x;
      Nuker.y = plane.y -40;
      Nuker.velocityY = -5;
    }
   if(Nuker.isTouching(Enemy))
   {
    Enemy.Math.round(random(5,550));
    score = score+1
   }
   if(Nuker.isTouching(Enemy_2));
   {
    Enemy_2.Math.round(random(6,500));
    score = score+1;
   }
   if(Nuker.isTouching(Enemy))
   {
    Enemy.changeImage("Blast.jpeg")
   }
   if(Nuker.isTouching(Enemy_2))
   {
    Enemy_2.changeImage("Blast.jpeg")
    }
   textSize(30);
   textColor("black")
   text("SCORE:" + score,25,50)

    drawSprites();
 }

}