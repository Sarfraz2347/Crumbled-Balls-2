
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
db= new Dustbin(1100,610)
paper = new Paper(200,450,40)
ground = new Ground(800,670,1600,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('yellow');
  db.display();
  paper.display();
  ground.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



