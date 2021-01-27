
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1=new ground(675,580,1350,20);
	stone1=new stone(210,450,50,50);
	boy1=new boy(270,500);
	tree1=new tree();
	mango1=new mango(900,200,50,50);
	mango2=new mango(1000,150,60,60);
	mango3=new mango(1100,170,40,40);
	mango4=new mango(1100,100,55,55);
	mango5=new mango(1000,90,65,65);
	mango6=new mango(1100,230,35,35);
	mango7=new mango(800,200,50,50);
	mango8=new mango(1050,200,60,60);
	mango9=new mango(1150,170,40,40);
	mango10=new mango(1200,250,55,55);
	mango11=new mango(930,90,65,65);
	mango12=new mango(950,230,35,35);

	slingShot1=new slingShot(stone1.body,{x:210,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 

  tree1.display();
  boy1.display();
  ground1.display();
  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  slingShot1.display();
 
 detectollision(stone1,mango1);
 detectollision(stone1,mango2);
 detectollision(stone1,mango3);
 detectollision(stone1,mango4);
 detectollision(stone1,mango5);
 detectollision(stone1,mango6);
 detectollision(stone1,mango7);
 detectollision(stone1,mango8);
 detectollision(stone1,mango9);
 detectollision(stone1,mango10);
 detectollision(stone1,mango11);
 detectollision(stone1,mango12);

 keyPressed(); 
 

  drawSprites();
 
}


function detectollision(lstone,lmango)
{ mangoBodyPosition=lmango.body.position;
   stoneBodyPosition=lstone.body.position;
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance<=lmango.r+lstone.r) 
    { Matter.Body.setStatic(lmango.body,false); }};

function mouseDragged()
{
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingShot1.fly();
}

function keyPressed() {
	if(keyCode===32)
	{
	   Matter.Body.setPosition(stone1.body,{x:210,y:450})
	   slingShot1.attach(stone1.body);
	}
	
}

