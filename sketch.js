var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var appleImg
var leaves 
var leavesImg 


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("leaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
    // Moving background
    garden=createSprite(200,200);
    garden.addImage(gardenImg);

    //creating boy running
    rabbit = createSprite(180,340,30,30);
    rabbit.scale =0.09;
    rabbit.addImage(rabbitImg);
    }


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX 
  
  createApples()
  createLeaves()
  drawSprites();
}
function createApples(){
if(frameCount % 80 === 0){
    apple = createSprite(500,200,10,40)
    apple.addImage(appleImg)
    apple.x = Math.round(random(1,80))
    apple.scale = 0.05
    apple.velocityX = 4
    apple.lifetime = 300
  }
}


function createLeaves(){
  if(frameCount % 80 === 0){
    leaves = createSprite(400,160,10,40)
    leaves.addImage(leavesImg)
    leaves.x = Math.round(random(1,80)) 
    leaves.scale = 0.05
    leaves.velocityX = 4
    leaves.lifetime = 300
     }
}
