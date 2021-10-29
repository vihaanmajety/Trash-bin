
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,left,right
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var ball_options={
    restitution:0.3,
	density:1.2
	}


  
	//Create the Bodies Here.
   
   
     ground=new Ground(400,670,800,20)
	 left=new Ground(500,600,20,120)
	 right=new Ground(400,600,20,120)
    ball=Matter.Bodies.circle(150,200,20,ball_options)
    World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  left.show()
  right.show()
  
  ellipse(ball.position.x,ball.position.y,20)  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW)
  Matter.Body.applyForce(ball,{x:0,y:0},{x:65,y:-65})
}


