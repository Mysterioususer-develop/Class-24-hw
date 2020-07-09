
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(910,597,20,100);
	box2 = new Box(1090,597,20,100);
	box3 = new Box(1000,647,200,20);
	box4 = new Box(600,675,1200,20);

	paper = new Paper(200,300,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
 box4.display();

  paper.display();

  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
}

