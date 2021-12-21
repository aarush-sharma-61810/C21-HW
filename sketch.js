const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1530, 700);
	engine =Engine.create();
	world = engine.world;
	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1300,600,20,120)
	var ball_options = {
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)





	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  fill("blue")
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
  drawSprites();
 
}



function keyPressed() {
		if(keyCode === UP_ARROW) {
			Matter.Body.applyForce(ball,{x:0,y:0},{x:130,y:-60})
		}
}