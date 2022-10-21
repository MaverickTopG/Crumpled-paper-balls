var ball,g1,l1,r1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;
    
	//creating ground objects
	g1 = new Ground(width/2,570,width,20)
	l1 = new Ground(1100,500,20,120)
	r1 = new Ground(1400,500,20,120)
	var ball_options = {
		isSatic:false,
		retitution:0.3,
		friction:0,
		density:1.2
	  }

	//Create the Bodies Here.
    ball = Bodies.circle(300,400,20,ball_options)
    World.add(world,ball)
	Engine.run(engine);

    
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  g1.display()
  l1.display()
  r1.display()
  
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

