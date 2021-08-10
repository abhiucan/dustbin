
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var balloptions={
isStatic:false,
restitution:0.3,
friction:0.3,
density:1.2






}

  ball = Bodies.circle(200,200,25,balloptions)
 World.add(world,ball)

 ground1 = new Ground(width/2,640,width,20)
 left = new Ground(1100,570,20,120)
 right = new Ground(930,570,20,120)

	Engine.run(engine);
  


}
function draw() {
  rectMode(CENTER);
  background("black");

  ground1.show()
  left.show()
  right.show()
  
ellipse(ball.position.x,ball.position.y,50,50)




  drawSprites();
 
}

function keyPressed(){
  
if (keyCode === UP_ARROW){

  console.log("hi")


  Matter.Body.applyForce(ball,{x:0,y:0},{x:110,y:-110})


}

}