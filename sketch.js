var wall,thick;
var bullet,speed,weight;
var deform;


function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50,200,30,20);
  wall = createSprite(1200,200,thick,height/2);
  wall = color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);

  thick = random(22,83);
  
  bullet.velocityX = speed;

  deform = 0.5*weight*speed*speed/thick*thick*thick;
}

function draw() {
  background("brown");  
  
  if(bullet.x=1150){
    bullet.velocityX = 0;
    if(deform>10){
      bullet.shapeColor = color(255,0,0);
      }
    
    if(deform<=10){
      bullet.shapeColor = color(0,230,0);
    }
    
  } 

  
  
  drawSprites();
}