function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,30,1200,20);
}

function draw() {
  background(480,800);  
  
  ground.display();

  drawSprites();
}