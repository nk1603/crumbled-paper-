var ball;
var groundobj,leftSide,rightSide

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_options = {
  istatic:false,
  restitution:0.3,
  friction:0,
  density:1.2,
 }
 ball=Bodies.circle(260,100,60,ball_options)
 World.add(world,ball)

 groundobj = new Ground(600,670,1600,20)
 fill(255,255,0)
 leftSide = new Ground(1100,600,20,120)
 fill(255,255,0)
 rightSide = new Ground(1350,600,20,120)
  
 

  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ellipse(ball.position.x,ball.position.y,60)
  groundobj.display()
  leftSide.display()
  rightSide.display()
  

  drawSprites();
 
}

function keyPressed() {
 if(keyCode === UP_ARROW) { 
 Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}) 

 }

}


