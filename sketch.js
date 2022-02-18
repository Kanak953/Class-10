
var trex ,trex_running;
var edges,ground,groundImg

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160 ,20, 50);
 trex.addAnimation("running",trex_running);
trex.scale=0.5

ground = createSprite(200, 180, 400, 20);
ground.addImage("ground",groundImg);
 edges=createEdgeSprites();
 
}



function draw(){
  background("white")


  ground.velocityX=-2;

//infinetly moving ground
if(ground.x<0){
ground.x=ground.width/2;
}



  console.log(ground.x)
  if(keyDown("SPACE")){
trex.velocityY=-10
  }


  //adding gravity
  trex.velocityY = trex.velocityY + 0.5;

  
trex.collide(ground)
drawSprites();
}
