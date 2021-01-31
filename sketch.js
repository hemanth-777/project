
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth / 2 , windowHeight / 1.5);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConsteraint = MouseConstraint.crate(engine,option);
	world.add(world,Constraint);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(penduluml.body,{x: mouseX, y: mouseY });
}


