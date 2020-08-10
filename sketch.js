const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var ball;
var box1,box2,box3;
var ground;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = createSprite(1000,385,150,10);
	box.shapeColor = "red";
	box1 = createSprite(925,320,10,150);
	box1.shapeColor = "red";
	box2 = createSprite(1075,320,10,150);
	box2.shapeColor = "red";

	ground = createSprite(600,395,1200,10); 

    ball = new Ball(600,200,20);
	//ball.shapeColor = "red";

	//Engine.run(engine);
	//Engine.update(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 // ball.x= ball.position.x
 //ball.y= ball.position.y
  ball.display();
  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{nx:925,y:-320});
	}
}



