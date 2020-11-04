/*respected ma'am
there is some proclem with my code whenever i click on the 
up arrow it shows an error i am not able to identify, could you please
tellt he solution for that and get back to me.
regards, 
avani.*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var ball;
var wall1, wall2, wall3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	bgImg = loadImage("bg.png");

	wall1 = new Wall(900,630,500,20);
	wall2 = new Wall(640,515,20,250);
	wall3 =  new Wall(1160,515,20,250);


		  var groundOption = {
			isStatic : true
		  }

		  ground = Bodies.rectangle(600,650,1200,20,groundOption);
			  World.add(world, ground);
			  
			  ball = Bodies.circle(100,630,20);
			  World.add(world, ball);


	Engine.run(engine);
  
}


function draw() {

  background(bgImg);
  Engine.update(engine);
  



  wall1.display();
  wall2.display();
  wall3.display();

  
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x, ground.position.y, 1200, 20);

  ellipseMode(RADIUS);
  fill("red")
  ellipse(ball.position.x, ball.position.y,20,20);

  keyPress();

  drawSprites();
 
 
}

function keyPress(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x: 85, y: -85})
	}
}



